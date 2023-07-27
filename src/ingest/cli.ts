import yargs from "yargs";

import { ingestManuscript } from "./ingest";

const main = () => {
    const { argv } = yargs(process.argv);
    const {
        source,
        input,
        output,
        unpublished: includeUnpublished,
    } = argv as Record<string, string>;
    if (!source || !input || !output) {
        throw new Error("Missing some arguments");
    }
    ingestManuscript({
        includeUnpublished: !!includeUnpublished,
        sourceDirectoryPath: source,
        inputDirectoryPath: input,
        outputJsonPath: output,
    });
};

main();
