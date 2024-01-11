import React from "react";

import { loadManuscriptJson } from "@/ingest";
import { TableOfContents } from "@/components";

const teaser = (
    <div style={{ color: "var(--color-incomplete)" }}>
        <h2>Part 5 of 5</h2>
        <i>Coming soon</i>
    </div>
);

export default function TocPage() {
    const manuscript = loadManuscriptJson();
    return <TableOfContents manuscript={manuscript} teaser={teaser} />;
}
