import React from "react";
import Link from "next/link";

import { Chapter } from "@/types";
import { chapterUrl } from "@/utils";

type Props = {
    chapter: Chapter;
    showNumber?: boolean;
    digits?: number;
    children?: React.ReactNode;
    link?: boolean;
    separator?: React.ReactNode;
};

const padNumber = (number: number, digits: number) => {
    const numberString = number.toString();
    const padding = digits - numberString.length;
    return "0".repeat(padding) + numberString;
};

const renderTitleString = (props: Props) => {
    const {
        children,
        chapter,
        showNumber = true,
        digits,
        separator = " //",
    } = props;
    if (children) {
        return children;
    }
    const { number, title } = chapter;
    const andSeparator = <>{separator} </>;
    const numberPrefix =
        typeof number === "number" && showNumber ? (
            digits ? (
                <>
                    {padNumber(number, digits)}
                    {andSeparator}
                </>
            ) : (
                <>
                    {number}
                    {andSeparator}
                </>
            )
        ) : (
            ""
        );
    return (
        <>
            {numberPrefix}
            {title}
        </>
    );
};

export const ChapterTitle = (props: Props) => {
    const { chapter, link = false } = props;
    const title = renderTitleString(props);
    if (link) {
        return <Link href={chapterUrl(chapter)}>{title}</Link>;
    }
    return <span>{title}</span>;
};
