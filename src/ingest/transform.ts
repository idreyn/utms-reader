import { HTMLElement, Node, NodeType, TextNode } from "node-html-parser";

import { texTransform } from "./tex";

type Transform = (node: HTMLElement) => null | HTMLElement;

const mapHtml = (node: HTMLElement, fn: Transform) => {
    if (node instanceof HTMLElement) {
        const mapped = fn(node);
        if (mapped) {
            const mappedChildren = mapped.childNodes
                .map((child) => {
                    if (child instanceof HTMLElement) {
                        return mapHtml(child, fn);
                    }
                    return child;
                })
                .filter((x): x is Node => !!x);
            const clone = mapped.clone() as HTMLElement;
            clone.set_content(mappedChildren);
            return clone;
        }
        return null;
    }
    return node;
};

const transformsByClass: Record<string, Transform> = {
    tex: texTransform,
};

const applyClassesTransform = (node: HTMLElement) => {
    const {
        childNodes: [firstChild],
    } = node;
    if (firstChild?.nodeType === NodeType.TEXT_NODE) {
        const { textContent } = firstChild;
        if (textContent.startsWith("{") && textContent.charAt(1) !== "{") {
            const closingBraceIndex = textContent.indexOf("}");
            const classList = textContent
                .slice(1, closingBraceIndex)
                .split(".")
                .filter((entry: string) => !!entry);
            const clone = node.clone() as HTMLElement;
            if (clone) {
                classList.forEach((className) =>
                    clone.classList.add(className),
                );
                const newTextContent = textContent
                    .slice(closingBraceIndex + 1)
                    .trim();
                clone.exchangeChild(
                    clone.firstChild,
                    new TextNode(newTextContent, clone),
                );
            }
            const transformedClone = classList.reduce(
                (nextNode: null | HTMLElement, cls: string) => {
                    const transform = transformsByClass[cls];
                    if (transform && nextNode) {
                        return transform(nextNode);
                    }
                    return nextNode;
                },
                clone,
            );
            return transformedClone;
        }
    }
    return node;
};

const removeEmptyParagraphsTransform = (node: HTMLElement) => {
    const { childNodes } = node;
    if (childNodes.length === 1) {
        const [first] = childNodes;
        if (
            first instanceof HTMLElement &&
            first.tagName.toLowerCase() === "br"
        ) {
            return null;
        }
    }
    return node;
};

const transforms: Transform[] = [
    removeEmptyParagraphsTransform,
    applyClassesTransform,
];

export const transformHtml = (body: HTMLElement) => {
    return mapHtml(body, (element) =>
        transforms.reduce(
            (el: null | HTMLElement, tr: Transform) => el && tr(el),
            element,
        ),
    )!;
};
