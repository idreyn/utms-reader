export type ManupscriptBaseElement = {
    src: string;
    title: string;
    metadata: Record<string, string>;
};

export type Section = ManupscriptBaseElement & {
    kind: "section";
};

export type Chapter = ManupscriptBaseElement & {
    kind: "chapter";
    slug: string;
    children: Section[];
};

export type Part = ManupscriptBaseElement & {
    kind: "part";
    children: Chapter[];
};

export type Manuscript = ManupscriptBaseElement & {
    kind: "manuscript";
    children: (Chapter | Part)[];
};

export type ManuscriptElement = Section | Chapter | Part | Manuscript;
export type ManuscriptElementKind = ManuscriptElement["kind"];

export const isSection = (element: ManuscriptElement): element is Section => {
    return element.kind === "section";
};

export const isChapter = (element: ManuscriptElement): element is Chapter => {
    return element.kind === "chapter";
};

export const isPart = (element: ManuscriptElement): element is Part => {
    return element.kind === "part";
};
