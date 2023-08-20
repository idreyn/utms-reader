import React from "react";

import { Chapter, Manuscript, Part } from "@/types";
import { ReadingLayout } from "../ReadingLayout";
import { ChapterTitle } from "../ChapterTitle";

import styles from "./TableOfContents.module.css";

type Props = {
    manuscript: Manuscript;
    teaser?: React.ReactNode;
};

export const TableOfContents = (props: Props) => {
    const { manuscript, teaser = null } = props;

    const renderChapter = (chapter: Chapter, link = true) => {
        return <ChapterTitle chapter={chapter} link={link} digits={2} />;
    };

    const renderPart = (part: Part) => {
        const {
            title,
            number,
            children,
            metadata: { incomplete },
        } = part;
        const latestChapter = children[children.length - 1];
        const fakeNextChapter: Chapter = {
            title: "Coming soon",
            number: latestChapter.number + 1,
            src: "",
            metadata: {},
            kind: "chapter",
            slug: "",
            publicationDate: "1999-12-31",
            coverImage: "",
            children: [],
        };
        return (
            <section className={styles.section}>
                <h2 id={`part-${number}`}>
                    Part {number}: {title}
                </h2>
                <ul className={styles.list}>
                    {children.map((child, index) => (
                        <li key={index}>{renderChapter(child)}</li>
                    ))}
                    {incomplete && (
                        <li className={styles.incomplete}>
                            {renderChapter(fakeNextChapter, false)}
                        </li>
                    )}
                </ul>
            </section>
        );
    };

    const renderBody = () => {
        return (
            <>
                <ul className={styles.list}>
                    {manuscript.children.map((child, index) => {
                        if (child.kind === "part") {
                            return <li key={index}>{renderPart(child)}</li>;
                        }
                        return <li key={index}>{renderChapter(child)}</li>;
                    })}
                </ul>
                {teaser && (
                    <section className={styles.section}>{teaser}</section>
                )}
            </>
        );
    };

    return (
        <ReadingLayout pre={<h1>Table of Contents</h1>} body={renderBody()} />
    );
};
