import React from "react";
import { Vollkorn } from "next/font/google";

import styles from "./ReadingLayout.module.css";

const bodyFont = Vollkorn({ subsets: ["latin"] });

type Props = {
    pre?: React.ReactNode;
    body: React.ReactNode;
    post?: React.ReactNode;
    useSerifBodyFont?: boolean;
};

export const ReadingLayout = (props: Props) => {
    const { pre = null, body, post = null, useSerifBodyFont = false } = props;
    return (
        <div className={styles.readingLayout}>
            {pre}
            <main className={useSerifBodyFont ? bodyFont.className : ""}>
                {body}
            </main>
            {post}
        </div>
    );
};
