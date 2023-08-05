import fs from "fs";
import path from "path";
import { Feed } from "feed";

import { getChapterDetails, getChapters, loadManuscriptJson } from "../ingest";
import { bookMetadata, chapterUrl } from "../utils";

type FeedFormat = "rss2" | "atom1" | "json1";

const feedLocations: Record<FeedFormat, string> = {
    rss2: path.join(process.cwd(), "/public/rss.xml"),
    atom1: path.join(process.cwd(), "/public/atom.xml"),
    json1: path.join(process.cwd(), "/public/feed.json"),
};

const { title, description, coverImage, language, baseUrl, license } =
    bookMetadata;

const main = async () => {
    const feed = new Feed({
        title,
        description,
        language,
        link: baseUrl,
        image: `${baseUrl}/${coverImage}`,
        favicon: `${baseUrl}/favicon.ico`,
        copyright: license,
        id: baseUrl,
    });

    const manuscript = loadManuscriptJson();
    const chapters = getChapters(manuscript);

    for (const chapter of chapters) {
        const { title, slug, publicationDate } = chapter;
        const { number } = getChapterDetails(chapters, slug);
        const url = chapterUrl(chapter);
        feed.addItem({
            title: `${number} // ${title}`.toUpperCase(),
            id: `${baseUrl}/{url}`,
            link: `${baseUrl}/${url}`,
            date: new Date(publicationDate),
        });
    }

    fs.writeFileSync(feedLocations.rss2, feed.rss2());
    fs.writeFileSync(feedLocations.atom1, feed.atom1());
    fs.writeFileSync(feedLocations.json1, feed.json1());
};

main();
