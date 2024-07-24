'use client';
import Image from "next/image";
// import styles from "./page.module.css";
import React from "react";
import Button from "./components/Button/Button";
import styles from "./components/Button/Button.module.css";

export default function Home() {
  return (
    <>
      <div className="mainDiv">
        <Button initialText="View playlist" filledText={styles.filledText} textOnlyText="View playlist" />
      </div>
    </>
  );
}