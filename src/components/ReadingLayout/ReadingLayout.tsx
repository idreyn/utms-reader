import React from "react";
import { Vollkorn } from "next/font/google";

import styles from "./ReadingLayout.module.css";

const bodyFont = Vollkorn({ subsets: ["latin"] });

type Props = {
    pre: React.ReactNode;
    main: React.ReactNode;
    post: React.ReactNode;
};

export const ReadingLayout = (props: Props) => {
    const { pre, main, post } = props;
    return (
        <div className={styles.readingLayout}>
            {pre}
            <main className={bodyFont.className}>{main}</main>
            {post}
        </div>
    );
};
