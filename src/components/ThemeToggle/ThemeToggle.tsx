"use client";
import React, { useCallback } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import { useThemeContext } from "../ThemeProvider";

import styles from "./ThemeToggle.module.css";

type Props = {
    iconSize?: number;
};

export const ThemeToggle = (props: Props) => {
    const { iconSize = 20 } = props;
    const { theme, setTheme } = useThemeContext();
    const Icon = theme === "dark" ? MdLightMode : MdDarkMode;

    const toggleTheme = useCallback(
        () => setTheme(theme === "dark" ? "light" : "dark"),
        [theme, setTheme],
    );
    const hidden = theme === null;

    return (
        <button
            className={styles.button}
            disabled={hidden}
            onClick={toggleTheme}
            style={{ opacity: hidden ? 0 : 1 }}
        >
            <Icon size={iconSize} />
        </button>
    );
};
