import { Space_Mono } from "next/font/google";

import { ThemeProvider } from "@/components";

import "./globals.css";

type Props = {
    children: React.ReactNode;
};

const bodyFont = Space_Mono({ subsets: ["latin"], weight: "400" });

export const metadata = {
    title: "Upon the Mirror Sea",
};

export default function RootLayout(props: Props) {
    const { children } = props;
    return (
        <html lang="en">
            <body className={bodyFont.className}>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
