import React from "react";
import Link from "next/link";
import styles from "./BottomNav.module.css";

const BottomNav = () => {
  return (
    <nav className={styles.bottomNav}>
      <Link href="/" className={styles.navItem}>
        <img src="../../images/HomeIcon.svg" />
        <span>Home</span>
      </Link>
      <Link href="/search" className={styles.navItem}>
        <img src="../../images/SearchIcon.svg" />
        <span>Search</span>
      </Link>
      <Link href="/library" className={styles.navItem}>
        <img src="../../images/LibraryIcon.svg" />
        <span>Library</span>
      </Link>
      <Link href="/profile" className={styles.navItem}>
        <img src="../../images/ProfileIcon.svg" />
        <span>Profile</span>
      </Link>
    </nav>
  );
};

export default BottomNav;