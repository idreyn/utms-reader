import React from "react";

import { loadManuscriptJson } from "@/ingest";
import { TableOfContents } from "@/components";

const teaser = (
    <>
        <h2>Part 4</h2>
        <i>Coming Summer 2023</i>
    </>
);

export default function TocPage() {
    const manuscript = loadManuscriptJson();
    return <TableOfContents manuscript={manuscript} teaser={teaser} />;
}
