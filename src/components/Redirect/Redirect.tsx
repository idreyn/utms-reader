"use client";
import React, { useEffect } from "react";
import Link from "next/link";

import { ReadingLayout } from "../ReadingLayout";

type Props = {
    href: string;
};

export const Redirect = (props: Props) => {
    const { href } = props;

    useEffect(() => {
        window.location.replace(href);
    }, [href]);

    const body = (
        <p>
            Redirecting you now. If this doesn't work,{" "}
            <Link href={href}>click here</Link>.
        </p>
    );

    return <ReadingLayout body={body} />;
};
