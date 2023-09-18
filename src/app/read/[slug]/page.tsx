import React from "react";
import { Metadata } from "next";

import {
    loadChapterContents,
    loadManuscriptJson,
    getChapters,
    getChapterDetails,
} from "@/ingest";
import { ChapterDetails } from "@/types";
import { Chapter, Redirect } from "@/components";
import { bookMetadata } from "@/utils";
import { redirect } from "next/dist/server/api-utils";

type Props = {
    params: {
        slug: string;
    };
};

const redirects: Record<string, string> = {
    "nine-eyes": "old-new-prosperity", // Old chapter that began Part 4
};

const getCurrentChapterDetails = (slug: string): ChapterDetails => {
    const manuscript = loadManuscriptJson();
    const chapters = getChapters(manuscript);
    return getChapterDetails(chapters, slug);
};

export const generateMetadata = (props: Props): Metadata => {
    const {
        params: { slug },
    } = props;
    if (redirects[slug]) {
        return {
            title: "Redirecting...",
        };
    }
    const { current, number } = getCurrentChapterDetails(slug);
    const title = `${number} // ${current.title}`.toUpperCase();
    return {
        title,
        twitter: {
            title,
            card: "summary_large_image",
        },
        openGraph: {
            title,
            description: bookMetadata.fullSentenceDescription,
            images: [current.coverImage || bookMetadata.coverImage],
        },
    };
};

export const generateStaticParams = () => {
    const manuscript = loadManuscriptJson();
    const chapters = getChapters(manuscript);
    return [
        ...chapters.map(({ slug }) => ({ slug })),
        ...Object.keys(redirect).map((slug) => ({ slug })),
    ];
};

export default function ChapterPage(props: Props) {
    const {
        params: { slug },
    } = props;
    const redirect = redirects[slug];
    if (redirect) {
        return <Redirect href={`/read/${redirects[slug]}`} />;
    }
    const details = getCurrentChapterDetails(slug);
    const { current } = details;
    const contents = loadChapterContents(current);
    return <Chapter details={details} contents={contents} />;
}
