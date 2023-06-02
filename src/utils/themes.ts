import { Theme, ThemeName } from "@/types";

export const themes: Record<ThemeName, Theme> = {
    light: {
        text: "black",
        background: "white",
    },
    dark: {
        text: "white",
        background: "black",
    },
};
