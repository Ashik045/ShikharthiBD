import styles from "./navbar.module.scss";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_main}>
        <div className={styles.navbar_icon}>
          <h1>shikharthibd</h1>
        </div>

        <div className={styles.nav_menus}>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
