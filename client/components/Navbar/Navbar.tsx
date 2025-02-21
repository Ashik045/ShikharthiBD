"use client";

import userPhoto from "@/public/images/no-photo.png";
import Image from "next/image";
import { useState } from "react";
import styles from "./navbar.module.scss";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_main}>
        <button className={styles.menu_toggle} onClick={toggleMenu}>
          ☰
        </button>

        <div className={styles.navbar_icon}>
          <h1>ShikharthiBD</h1>
        </div>

        <div
          className={`${styles.nav_menus} ${
            isMenuOpen ? styles.open : styles.not_open
          }`}
        >
          <ul>
            <li className={styles.nav_item}>
              <a href="#">Questions</a>

              <ul className={styles.dropdown}>
                <li>
                  <a href="#">Hons</a>
                </li>
                <li>
                  <a href="#">HSC</a>
                </li>
                <li>
                  <a href="#">SSC</a>
                </li>
                <li>
                  <a href="#">Admission</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">University info</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">forums</a>
            </li>
            <li>
              <a href="#">Interview question</a>
            </li>
            <li>
              <a href="#">চাকরি বিজ্ঞাপন</a>
            </li>

            <select className={styles.language}>
              <option value="grapefruit">English</option>
              <option value="lime">বাংলা</option>
            </select>

            <Image
              className={styles.user_photo}
              src={userPhoto}
              alt="ShikharthiBD"
              height={30}
              width={30}
              objectFit="cover"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
