import React from "react";

import { loadManuscriptJson } from "@/ingest";
import { TableOfContents } from "@/components";

export default function TocPage() {
    const manuscript = loadManuscriptJson();
    return <TableOfContents manuscript={manuscript} />;
}
