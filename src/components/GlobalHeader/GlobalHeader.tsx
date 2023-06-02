import React from "react";
import Link from "next/link";

import styles from "./GlobalHeader.module.css";
import { ThemeToggle } from "../ThemeToggle";

export const GlobalHeader = () => {
    return (
        <header className={styles.globalHeader}>
            <div className={styles.title}>
                <Link href="/">Upon the Mirror Sea</Link>
            </div>
            <ThemeToggle />
        </header>
    );
};
