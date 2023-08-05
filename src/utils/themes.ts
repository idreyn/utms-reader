import { Theme, ThemeName } from "@/types";

export const themes: Record<ThemeName, Theme> = {
    light: {
        text: "black",
        background: "white",
        incomplete: "#aaa",
    },
    dark: {
        text: "white",
        background: "black",
        incomplete: "#333",
    },
};
