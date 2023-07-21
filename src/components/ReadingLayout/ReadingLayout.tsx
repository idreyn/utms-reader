"use client";
import React from "react";
import localFont from "next/font/local";
import { Vollkorn } from "next/font/google";

import styles from "./ReadingLayout.module.css";
import { GlobalHeader } from "../GlobalHeader";

const bodyFont = Vollkorn({ subsets: ["latin"] });

const texFont = localFont({
    src: "../../app/fonts/lmroman12-regular.woff2",
    variable: "--tex-font",
});

const fontStyle = (
    <style jsx global>
        {`
            .tex {
                font-family: ${texFont.style.fontFamily};
            }
        `}
    </style>
);

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
            <GlobalHeader />
            {pre}
            {fontStyle}
            <main className={useSerifBodyFont ? bodyFont.className : ""}>
                {body}
            </main>
            {post}
        </div>
    );
};
