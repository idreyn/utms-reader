import { ManuscriptElement } from "@/types";

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
