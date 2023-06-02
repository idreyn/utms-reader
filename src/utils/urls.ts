import { Chapter } from "@/types";

export const chapterUrl = (chapter: Chapter) => {
    return `/read/${chapter.slug}`;
};
