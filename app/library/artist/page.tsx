import React from "react";
import styles from "./Artist.module.css";

const Artist = () => {
  return (
    <div className={styles.artist}>
      <h1>Artist</h1>
      <ul>
        <li><img src="../../images/Coldplay.svg" /> Coldplay</li>
        <li><img src="../../images/Sia.svg" /> Sia</li>
        <li><img src="../../images/HarryStyles.svg" /> Harry Styles</li>
        <li><img src="../../images/Rihanna.svg" /> Rihanna</li>
        <li><img src="../../images/TheBeatles.svg" /> The Beatles</li>
      </ul>
    </div>
  );
};

export default Artist;