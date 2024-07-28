import React from "react";
import Link from "next/link";
import styles from "./Library.module.css";

const Library = () => {
  return (
    <div className={styles.library}>
      <h1>Library</h1>
      <div className={styles.sections}>
        <Link href="/library/artist" className={styles.section}>
            <img src="../../public/images/MusicIcon.svg" />
            <span>Artist</span>
        </Link>
        <Link href="/library/playlist" className={styles.section}>
            <img src="../../public/images/PlaylistIcon.svg" />
            <span>Playlist</span>
        </Link>
        <Link href="/library/albums" className={styles.section}>
            <img src="../../public/images/AlbumIcon.svg" />
            <span>Albums</span>
        </Link>
      </div>
    </div>
  );
};

export default Library;