import { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import classNames from "classnames";

import { ThemeProvider } from "@/components";

import "./globals.css";
import "katex/dist/katex.min.css";

type Props = {
    children: React.ReactNode;
};

const bodyFont = Space_Mono({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});

const title = "Upon the Mirror Sea";

const description =
    "A serialized science fiction novel about psychedelics, surveillance, and first contact with ourselves.";

export const metadata: Metadata = {
    title,
    description,
    metadataBase: new URL("https://mirrorsea.xyz"),
    openGraph: {
        title,
        images: ["cover.png"],
        description,
    },
    twitter: {
        title,
        card: "summary_large_image",
        creator: "@phaseborn",
    },
};

export default function RootLayout(props: Props) {
    const { children } = props;
    return (
        <html lang="en">
            <body className={classNames(bodyFont.className)}>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
