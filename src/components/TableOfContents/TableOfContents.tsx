import React from "react";

import { Chapter, Manuscript, Part } from "@/types";
import { ReadingLayout } from "../ReadingLayout";
import { ChapterTitle } from "../ChapterTitle";

import styles from "./TableOfContents.module.css";

type Props = {
    manuscript: Manuscript;
};

export const TableOfContents = (props: Props) => {
    const { manuscript } = props;

    const renderChapter = (chapter: Chapter) => {
        return (
            <ChapterTitle
                chapter={chapter}
                showNumber={false}
                link={true}
                digits={2}
            />
        );
    };

    const renderPart = (part: Part) => {
        return (
            <section className={styles.section}>
                <h2>
                    Part {part.number}: {part.title}
                </h2>
                <ul className={styles.list}>
                    {part.children.map((child, index) => (
                        <li key={index}>{renderChapter(child)}</li>
                    ))}
                </ul>
            </section>
        );
    };

    const renderBody = () => {
        return (
            <ul className={styles.list}>
                {manuscript.children.map((child, index) => {
                    if (child.kind === "part") {
                        return <li key={index}>{renderPart(child)}</li>;
                    }
                    return <li key={index}>{renderChapter(child)}</li>;
                })}
            </ul>
        );
    };

    return (
        <ReadingLayout pre={<h1>Table of Contents</h1>} body={renderBody()} />
    );
};
