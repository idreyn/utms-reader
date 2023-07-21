import fs from "fs";
import path from "path";

import {
    ManuscriptElement,
    ManuscriptElementKind,
    isSection,
    isChapter,
    isPart,
    Part,
    Chapter,
} from "../types";

type IngestOptions = {
    inputDirectoryPath: string;
    outputJsonPath: string;
};

const slugify = (str: string) => {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
};

const transformMetadataValue = (value: string) => {
    if (value === "Yes") {
        return true;
    }
    if (value === "No") {
        return false;
    }
    return value;
};

const ingestMetadata = (metadataPath: string): Record<string, any> => {
    if (fs.existsSync(metadataPath)) {
        const lines = fs
            .readFileSync(metadataPath)
            .toString()
            .trim()
            .split("\n");
        return Object.fromEntries(
            lines.map((line) => {
                const [key, value] = line.split(":").map((x) => x.trim());
                return [key, transformMetadataValue(value)];
            }),
        );
    }
    return {};
};

const ingestMetadataForHtml = (htmlPath: string) => {
    return ingestMetadata(htmlPath.replace(".html", " MetaData.txt"));
};

const ingestMetadataForDirectory = (directoryPath: string) => {
    const baseName = path.basename(directoryPath);
    const metadataPath = path.join(directoryPath, `${baseName} MetaData.txt`);
    return ingestMetadata(metadataPath);
};

const extractTitle = (elementPath: string) => {
    const baseName = path.basename(elementPath);
    const matchToRemoveNumbers = baseName.match(/[0-9]+\s(.*)/);
    if (matchToRemoveNumbers) {
        const title = matchToRemoveNumbers[1];
        return title.replace(".html", "");
    }
    return baseName;
};

const counter = () => {
    const state: Partial<Record<ManuscriptElementKind, number>> = {};

    const next = (kind: ManuscriptElementKind) => {
        const current = state[kind] ?? 1;
        state[kind] = current + 1;
        return current;
    };

    return next;
};

type Counter = ReturnType<typeof counter>;

const ingestManuscriptElement = (
    src: string,
    counter: Counter,
    depth = 0,
): null | ManuscriptElement => {
    const isDirectory = fs.statSync(src).isDirectory();
    if (isDirectory) {
        const childElements = fs
            .readdirSync(src)
            .map((subpath) => path.join(src, subpath));
        const containsDirectory = childElements.some((child) =>
            fs.statSync(child).isDirectory(),
        );
        const kind: ManuscriptElementKind =
            depth === 0 ? "manuscript" : containsDirectory ? "part" : "chapter";
        const metadata = ingestMetadataForDirectory(src);
        const title = metadata["Title"] || extractTitle(src);
        const children = childElements
            .filter(
                (path) =>
                    path.endsWith(".html") || fs.statSync(path).isDirectory(),
            )
            .map((path) => ingestManuscriptElement(path, counter, depth + 1));
        if (kind === "manuscript") {
            const validChildren = children.filter(
                (child): child is Chapter | Part =>
                    isChapter(child) || isPart(child),
            );
            return {
                src,
                kind,
                title,
                metadata,
                children: validChildren,
            };
        }
        if (kind === "chapter") {
            const childSections = children.filter(isSection);
            const slug = slugify(title);
            return {
                src,
                kind,
                title,
                slug,
                metadata,
                number: counter("chapter"),
                children: childSections,
            };
        }
        const childChapters = children.filter(isChapter);
        if (metadata.unpublished) {
            return null;
        }
        return {
            src,
            kind,
            title,
            metadata,
            number: counter("part"),
            children: childChapters,
        };
    }
    const kind: ManuscriptElementKind = depth > 0 ? "section" : "chapter";
    const metadata = ingestMetadataForHtml(src);
    const title = metadata["Title"] || extractTitle(src);
    if (kind === "chapter") {
        const slug = slugify(title);
        return {
            src,
            kind,
            metadata,
            title,
            slug,
            number: counter("chapter"),
            children: [],
        };
    }
    return { src, kind, metadata, title };
};

export const ingestManuscript = (options: IngestOptions) => {
    const { inputDirectoryPath, outputJsonPath } = options;
    const manuscript = ingestManuscriptElement(inputDirectoryPath, counter());
    fs.writeFileSync(outputJsonPath, JSON.stringify(manuscript, null, 4));
};
