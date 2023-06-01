import React from "react";

import {
    findManuscriptElements,
    loadChapterContents,
    loadManuscriptJson,
} from "@/ingest";
import { Chapter as TChapter, ChapterDetails } from "@/types";
import { Chapter } from "@/components";

type Props = {
    params: {
        slug: string;
    };
};

const getChapterDetails = (slug: string): ChapterDetails => {
    const chapters = getChapters();
    const index = chapters.findIndex((chapter) => chapter.slug === slug);
    const current = chapters[index];
    const next = chapters[index + 1] ?? null;
    const previous = chapters[index - 1] ?? null;
    return { current, next, previous, number: 1 + index };
};

const getChapters = () => {
    const manuscript = loadManuscriptJson();
    return findManuscriptElements(
        manuscript,
        (el) => el.kind === "chapter",
    ) as TChapter[];
};

export const generateMetadata = (props: Props) => {
    const {
        params: { slug },
    } = props;
    const { current, number } = getChapterDetails(slug);
    return {
        title: `${number}: ${current.title}`,
    };
};

export const generateStaticParams = () => {
    const chapters = getChapters();
    return chapters.map((chapter) => {
        return { slug: chapter.slug };
    });
};

export default function ChapterPage(props: Props) {
    const {
        params: { slug },
    } = props;
    const details = getChapterDetails(slug);
    const { current } = details;
    const contents = loadChapterContents(current);
    return <Chapter details={details} contents={contents} />;
}
