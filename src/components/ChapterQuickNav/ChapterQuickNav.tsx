import React from "react";

import { ChapterDetails } from "@/types";

import styles from "./ChapterQuickNav.module.css";

type Props = {
    details: ChapterDetails;
};

export const ChapterQuickNav = (props: Props) => {
    const {
        details: { previous, next },
    } = props;
    return (
        <div className={styles.chapterQuickNav}>
            {previous && (
                <div className={styles.previous}>
                    <a href={`/read/${previous.slug}`}>&larr; Previous</a>
                </div>
            )}
            {next && (
                <div className={styles.next}>
                    <a href={`/read/${next.slug}`}>Next &rarr;</a>
                </div>
            )}
        </div>
    );
};
