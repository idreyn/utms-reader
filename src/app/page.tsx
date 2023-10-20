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
            neikonaut: mind soaked with psychedelics and intertwined with a
            supercomputer, she performs calculations she can barely imagine
            sober. Most neikonauts return from their trips with theorems,
            reactor designs, or millions in parallel yuan. Mona is a clinician,
            and she's just lucky to be there, never quite living up to the
            expectations of her illustrious advisor, Dr. Deng. She mops up after
            everyone else's recklessness, tunneling into their minds and
            dredging out the digital debris that gets left behind.
        </p>
        <p>
            And once, Mona Xu was a Ripplechaser. Shanghai's billion anonymizing
            CCTV cameras reveal the Mirror Sea: a strange, electrifying,
            nocturnal dimension of self and city inhabited by primal creatures
            called Ripples, their motion borrowed from our own. Like many
            others, Mona has a hard time looking away — even after it triggers a
            psychotic break. Dr. Deng begs her to move on, write a dissertation,
            and graduate. But Mona is about to discover something in a patient's
            mind that pushes her back to that boundary between reality and
            delusion, observer and observed. Back to the Mirror Sea. The Ripples
            have something they shouldn't, and Dr. Deng knows something she
            won't say.
        </p>
        <p>
            On the eve of crisis, against the wishes of her advisor, Mona must
            guide a dangerous revelation safely into the world: when we are
            together, <i>we are not alone</i>.
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
