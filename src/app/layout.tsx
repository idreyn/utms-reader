import { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import classNames from "classnames";

import { ThemeProvider } from "@/components";
import { bookMetadata } from "@/utils";

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

const { title, description, coverImage, baseUrl } = bookMetadata;

export const metadata: Metadata = {
    title,
    description,
    metadataBase: new URL(baseUrl),
    openGraph: {
        title,
        images: [coverImage],
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
