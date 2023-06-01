import yargs from "yargs";

import { ingestManuscript } from "./ingest";

const main = () => {
    const { argv } = yargs(process.argv);
    const { input, output } = argv as Record<string, string>;
    ingestManuscript({
        inputDirectoryPath: input,
        outputJsonPath: output,
    });
};

main();
