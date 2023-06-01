import React from "react";

import "./layout.css";

type Props = {
    children: React.ReactNode;
};

export default function ReadLayout(props: Props) {
    const { children } = props;
    return <div className="read-layout">{children}</div>;
}
