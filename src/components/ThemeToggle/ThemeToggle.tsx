"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import { useThemeContext } from "../ThemeProvider";

import styles from "./ThemeToggle.module.css";

type Props = {
    iconSize?: number;
};

const animationTimeMs = 300;

export const ThemeToggle = (props: Props) => {
    const { iconSize = 20 } = props;
    const { theme, setTheme } = useThemeContext();
    const iconsRef = useRef<HTMLDivElement>(null);

    const toggleTheme = useCallback(() => {
        if (iconsRef.current) {
            const icons = iconsRef.current;
            icons.classList.add(styles.sunset);
            const timeout = setTimeout(() => {
                icons.classList.remove(styles.sunset);
                icons.classList.add(styles.sunrise);
                setTheme(theme === "dark" ? "light" : "dark");
                setTimeout(() => {
                    icons.classList.remove(styles.sunrise);
                }, animationTimeMs / 2);
            }, animationTimeMs / 2);
            return () => clearTimeout(timeout);
        }
        return () => {};
    }, [theme, setTheme]);

    useEffect(() => {
        document.body.classList.add(styles.animatedBody);
    }, []);

    const hidden = theme === null;

    return (
        <button
            className={styles.button}
            disabled={hidden}
            onClick={toggleTheme}
            style={{ opacity: hidden ? 0 : 1, height: iconSize }}
        >
            <div
                className={styles.icons}
                ref={iconsRef}
                style={{
                    flexDirection:
                        theme === "dark" ? "column-reverse" : "column",
                    height: iconSize * 2,
                    animationDuration: `${animationTimeMs}ms`,
                }}
            >
                <MdLightMode size={iconSize} />
                <MdDarkMode size={iconSize} />
            </div>
        </button>
    );
};
