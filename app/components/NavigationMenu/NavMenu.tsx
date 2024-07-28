"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./NavMenu.module.css";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={styles.nav}>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <li>
            <Link href="/"><img src="../public/images/HomeIcon.svg" /> Home</Link>
        </li>
        <li>
            <Link href="/artist"><img src="../public/images/MusicIcon.svg" /> Artist</Link>
        </li>
        <li>
            <Link href="/playlist"><img src="../public/images/PlaylistIcon.svg" /> Playlist</Link>
        </li>
        <li>
            <Link href="/albums"><img src="../public/images/AlbumIcon.svg" /> Albums</Link>
        </li>
        <li>
            <Link href="/profile"><img src="../public/images/LogOutIcon.svg" /> Log Out</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;