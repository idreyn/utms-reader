import React from "react";

import { ChapterDetails } from "@/types";

import { ReadingLayout } from "../ReadingLayout";
import { ChapterQuickNav } from "../ChapterQuickNav";

import styles from "./Chapter.module.css";

type Props = {
    contents: string;
    details: ChapterDetails;
};

export const Chapter = (props: Props) => {
    const { details, contents } = props;

    const quickNav = <ChapterQuickNav details={details} />;

    return (
        <ReadingLayout
            pre={
                <>
                    <h1>
                        {details.number} {"//"} {details.current.title}
                    </h1>
                    {quickNav}
                </>
            }
            body={
                <div
                    className={styles.bodyText}
                    dangerouslySetInnerHTML={{ __html: contents }}
                />
            }
            post={quickNav}
            useSerifBodyFont
        />
    );
};
