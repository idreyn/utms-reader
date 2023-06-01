import fs from "fs";
import { parse as parseHtml } from "node-html-parser";

import { Chapter, ManuscriptElement } from "@/types";

export const walkManuscript = (
    manuscript: ManuscriptElement,
    callback: (element: ManuscriptElement) => void,
) => {
    const visit = (element: ManuscriptElement) => {
        callback(element);
        if ("children" in element) {
            element.children.forEach((child) => visit(child));
        }
    };
    visit(manuscript);
};

export const findManuscriptElements = (
    manuscript: ManuscriptElement,
    where: (element: ManuscriptElement) => boolean,
) => {
    const found: ManuscriptElement[] = [];
    walkManuscript(manuscript, (element) => {
        if (where(element)) {
            found.push(element);
        }
    });
    return found;
};

export const loadHtmlFile = (filePath: string) => {
    const htmlText = fs.readFileSync(filePath).toString();
    const parsed = parseHtml(htmlText);
    return parsed.querySelector("body")!.innerHTML;
};

export const loadChapterContents = (chapter: Chapter) => {
    return [chapter.src, ...chapter.children.map((child) => child.src)]
        .filter((path) => path.endsWith(".html"))
        .map((path) => loadHtmlFile(path))
        .join("\n");
};
