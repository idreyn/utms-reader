import React from "react";
import Link from "next/link";

import styles from "./page.module.css";

const info = (
    <>
        <p>
            <i>Upon the Mirror Sea</i> is longform science fiction.{" "}
            <b>It is a work in progress</b>, to be completed in 2023.
        </p>
        <p>
            Like everyone else at Shanghai's top university, Mona Xu is a
            neikonaut: mind soaked with powerful psychedelics and intertwined
            with a supercomputer, she performs calculations she can barely
            imagine sober. Most neikonauts return from their trips with
            theorems, reactor designs, or millions in parallel yuan. Mona is a
            clinician, and she's just lucky to be here. She mops up after
            everyone else's recklessness, tunneling into their minds and
            dredging out the digital debris that gets left behind.
        </p>
        <p>
            Mona's advisor, the celebrated Dr. Deng, wants her to spend less
            time in the run-down basement clinic, and more time cobbling
            together a dissertation. But to Deng's exasperation, Mona is
            convinced she sees something the entire field missed: the painful
            shards she's collected fit together in a strange and compelling way.
            And day by day, her wild ideas are looking more like a scientific
            theory that will shake the Yangtze Delta Orthogonal Zone to its
            core…
        </p>
    </>
);

export default function Home() {
    return (
        <main className={styles.mainContent}>
            <h1 className={styles.title}>Upon the Mirror Sea</h1>
            <h2 className={styles.subtitle}>镜海之上</h2>
            <div className={styles.info}>{info}</div>
            <div className={styles.links}>
                <Link href="/read">Start reading</Link>
            </div>
        </main>
    );
}
