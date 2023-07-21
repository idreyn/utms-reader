import React from "react";
import Link from "next/link";

import styles from "./page.module.css";

const info = (
    <>
        <p>
            <i>Upon the Mirror Sea</i> is longform science fiction.{" "}
            <b>It is a work in progress</b>, to be completed in 2023. You can
            follow{" "}
            <a href="https://twitter.com/phaseborn" target="_blank">
                @phaseborn
            </a>{" "}
            on Twitter for updates.
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
            The most exciting thing in Mona's life was her flatmate, Cai Yuhui.
            Cai taught her to probe Shanghai's bizarrely anonymized surveillance
            system, to chase the Ripples inhabiting it towards strange,
            electrifying, noctural dimensions of self and city. She hurt herself
            badly that way. Her advisor is sympathetic, in her own stilted way:
            urging Mona to heal, forget, and cobble together a dissertation.
        </p>
        <p>
            But she's about to discover something in a patient's mind that
            pushes her back to that boundary between reality and delusion,
            observer and observed. Back to the Mirror Sea. On the eve of crisis,
            against the wishes of her advisor, Mona must guide an
            earth-shattering revelation into the world: when we are together,{" "}
            <i>we are not alone</i>.
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
