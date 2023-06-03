import React from "react";
import Link from "next/link";

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
                        &larr; Back
                    </ChapterTitle>
                )}
            </div>
            <div className={styles.contents}>
                <Link href="/read">Contents</Link>
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
