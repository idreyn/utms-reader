import React from "react";

import { ChapterDetails } from "@/types";
import { ChapterTitle } from "@/components";

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
            <div className={styles.previous}>
                {previous && (
                    <ChapterTitle chapter={previous} link>
                        &larr; Previous
                    </ChapterTitle>
                )}
            </div>
            <div className={styles.contents}>
                <a href="/read">Contents</a>
            </div>
            <div className={styles.next}>
                {next && (
                    <ChapterTitle chapter={next} link>
                        Next &rarr;
                    </ChapterTitle>
                )}
            </div>
        </div>
    );
};
