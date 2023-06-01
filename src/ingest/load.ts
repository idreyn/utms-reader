import fs from "fs";
import path from "path";

import { Manuscript } from "@/types";

let loaded: null | Manuscript = null;

export const loadManuscriptJson = (): Manuscript => {
    if (!loaded) {
        const manuscriptJsonPath = path.join(process.cwd(), "manuscript.json");
        const manuscriptJson = JSON.parse(
            fs.readFileSync(manuscriptJsonPath).toString(),
        );
        loaded = manuscriptJson;
    }
    return loaded as Manuscript;
};
