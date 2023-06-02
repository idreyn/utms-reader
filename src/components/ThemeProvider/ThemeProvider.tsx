"use client";
import React, { useCallback, useEffect, useState } from "react";
import { ThemeName } from "@/types";

import { themeInjectionScript } from "./injection";
import { themes } from "@/utils";

type ThemeContextType = {
    theme: null | ThemeName;
    setTheme: (value: ThemeName) => void;
};

const ThemeContext = React.createContext<ThemeContextType>({
    theme: "dark",
    setTheme: (v: ThemeName) => void v,
});

type Props = {
    children: React.ReactNode;
};

const updateTheme = (theme: ThemeName) => {
    const root = window.document.documentElement;
    root.style.setProperty("--color-text", themes[theme].text);
    root.style.setProperty("--color-background", themes[theme].background);
    window.localStorage.setItem("theme-name", theme);
};

export const ThemeProvider = (props: Props) => {
    const { children } = props;
    const [theme, rawSetTheme] = useState<null | ThemeName>(null);

    const setTheme = useCallback((value: ThemeName) => {
        rawSetTheme(value);
        updateTheme(value);
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        const initialTheme = root.style.getPropertyValue(
            "--initial-theme-name",
        ) as ThemeName;
        rawSetTheme(initialTheme);
    }, []);

    return (
        <>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <script
                    dangerouslySetInnerHTML={{ __html: themeInjectionScript }}
                />
                {children}
            </ThemeContext.Provider>
        </>
    );
};

export const useThemeContext = () => React.useContext(ThemeContext);
