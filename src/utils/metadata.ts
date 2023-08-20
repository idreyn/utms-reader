import { BookMetadata } from "@/types";

const title = "Upon the Mirror Sea";
const description =
    "A serialized science fiction novel about psychedelics, surveillance, and first contact with ourselves.";
const fullSentenceDescription = `${title} is ${description
    .charAt(0)
    .toLowerCase()}${description.slice(1)}`;

export const bookMetadata: BookMetadata = {
    title,
    description,
    fullSentenceDescription,
    coverImage: "covers/displays.png",
    baseUrl: "https://mirrorsea.xyz",
    license: "© 2023 by @phaseborn",
    language: "en",
};
