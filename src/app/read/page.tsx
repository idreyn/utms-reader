import React from "react";

import { loadManuscriptJson } from "@/ingest";
import { TableOfContents } from "@/components";

const teaser = (
    <div style={{ color: "var(--color-incomplete)" }}>
        <h2>Parts 5-6</h2>
        <i>Coming Fall 2023</i>
    </div>
);

export default function TocPage() {
    const manuscript = loadManuscriptJson();
    return <TableOfContents manuscript={manuscript} teaser={teaser} />;
}
