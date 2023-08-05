import React from "react";
import Link from "next/link";
import { MdRssFeed } from "react-icons/md";

import styles from "./GlobalHeader.module.css";
import { ThemeToggle } from "../ThemeToggle";

const iconSize = 20;

export const GlobalHeader = () => {
    return (
        <header className={styles.globalHeader}>
            <div className={styles.title}>
                <Link href="/">Upon the Mirror Sea</Link>
            </div>
            <div className={styles.icons}>
                <ThemeToggle iconSize={iconSize} />
                <a
                    href="/rss.xml"
                    style={{ height: iconSize }}
                    title="RSS Feed"
                >
                    <MdRssFeed size={iconSize} />
                </a>
            </div>
        </header>
    );
};
