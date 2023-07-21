import fs from "fs";
import path from "path";
import { parse as parseHtml } from "node-html-parser";

import { Chapter, Manuscript } from "@/types";
import { transformHtml } from "./transform";

let loaded: null | Manuscript = null;

const loadHtmlFile = (filePath: string) => {
    const htmlText = fs.readFileSync(filePath).toString();
    const parsed = parseHtml(htmlText);
    const body = parsed.querySelector("body")!;
    return transformHtml(body).innerHTML;
};

export const loadChapterContents = (chapter: Chapter) => {
    return [chapter.src, ...chapter.children.map((child) => child.src)]
        .filter((path) => path.endsWith(".html"))
        .map((path) => `<section>${loadHtmlFile(path)}</section>`)
        .join("\n");
};

export const loadManuscriptJson = (): Manuscript => {
    if (!loaded) {
        const manuscriptJsonPath = path.join(process.cwd(), "manuscript.json");
        const manuscriptJson = JSON.parse(
            fs.readFileSync(manuscriptJsonPath).toString(),
        );
        loaded = manuscriptJson;
    }
    return loaded as Manuscript;
};
