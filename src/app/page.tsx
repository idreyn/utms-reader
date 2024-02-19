import React from "react";
import Link from "next/link";

import styles from "./page.module.css";

const info = (
    <>
        <p>
            <i>Upon the Mirror Sea</i> is longform science fiction.{" "}
            <b>It is a work in progress</b>. You can follow the{" "}
            <a href="/rss.xml">RSS feed</a> for updates.
        </p>
        <p>
            Like everyone else at Shanghai's top university, Mona Xu is a
            neikonaut: mind soaked in psychedelics, intertwined with a
            supercomputer, she does things in there she can barely imagine
            sober. She's also a clinician, helping her patients deal with
            dangerous mental debris that this process leaves behind. And she's
            the student of the illustrious Dr. Deng — who insists she has a
            bright future, if she can focus her thesis away from certain
            attractive dead ends. She shouldn't be thinking about the Mirror Sea
            at all. They gave her pills to take if she starts.
        </p>
        <p>
            That's hard, when the Mirror Sea surrounds her. Shanghai has pried
            open countless portholes into its own surveillance system, from tiny
            LCDs to ten-story quasigrams, to watch the city's motion make the
            Ripples. They're not really <i>alive</i>, of course. Not unless we
            choose to see intention, intelligence, agency, in the way they move.
            Not unless we give them life. The city's interest in chasing Ripples
            is becoming an obsession. It made Mona do dangerous things, once,
            and she'd prefer to forget that.
        </p>
        <p>
            But she's about to find something in a patient's mind that pushes
            her back to that boundary between reality and delusion, observer and
            observed. Back to the Mirror Sea. Weaving between her drab clinical
            daytime and nocturnal, electrifying dimensions of self and city,
            she'll soon find herself at the dead center of a decades-long deceit
            that once nearly ripped China apart. The Ripples have something they
            shouldn't, Dr. Deng knows something she won't say, and Mona's
            dead-end research might be the decisive weapon in a battle for
            consciousness itself.
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
