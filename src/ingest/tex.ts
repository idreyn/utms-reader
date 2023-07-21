import katex from "katex";
import { HTMLElement, TextNode, parse } from "node-html-parser";

type Range = {
    start: number;
    end: number;
    content: string;
    isTex: boolean;
};

const getRangesFromText = (text: string): Range[] => {
    const ranges: Range[] = [];
    let start = 0;
    let isTex = false;
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === "$") {
            const end = i;
            ranges.push({
                start,
                end,
                content: text.slice(start, end),
                isTex,
            });
            isTex = !isTex;
            start = i + 1;
        }
    }
    if (text.length > start) {
        ranges.push({
            start,
            end: text.length,
            content: text.slice(start, text.length),
            isTex,
        });
    }
    return ranges;
};

export const texTransform = (node: HTMLElement) => {
    const ranges = getRangesFromText(node.innerText);
    const clone = node.clone() as HTMLElement;
    const children = ranges.map((range) => {
        if (range.isTex) {
            const rendered = katex.renderToString(range.content);
            return parse(rendered);
        }
        return new TextNode(range.content, clone);
    });
    clone.set_content(children);
    return clone;
};
