import React from "react";

import {
    loadChapterContents,
    loadManuscriptJson,
    getChapters,
    getChapterDetails,
} from "@/ingest";
import { ChapterDetails } from "@/types";
import { Chapter } from "@/components";

type Props = {
    params: {
        slug: string;
    };
};

const getCurrentChapterDetails = (slug: string): ChapterDetails => {
    const manuscript = loadManuscriptJson();
    const chapters = getChapters(manuscript);
    return getChapterDetails(chapters, slug);
};

export const generateMetadata = (props: Props) => {
    const {
        params: { slug },
    } = props;
    const { current, number } = getCurrentChapterDetails(slug);
    return {
        title: `${number}: ${current.title}`,
    };
};

export const generateStaticParams = () => {
    const manuscript = loadManuscriptJson();
    const chapters = getChapters(manuscript);
    return chapters.map((chapter) => {
        return { slug: chapter.slug };
    });
};

export default function ChapterPage(props: Props) {
    const {
        params: { slug },
    } = props;
    const details = getCurrentChapterDetails(slug);
    const { current } = details;
    const contents = loadChapterContents(current);
    return <Chapter details={details} contents={contents} />;
}
