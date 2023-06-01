import { Chapter } from ".";

export type ChapterDetails = {
    current: Chapter;
    number: number;
    previous: null | Chapter;
    next: null | Chapter;
};
