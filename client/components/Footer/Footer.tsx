import Link from "next/link";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* First Column - Website Name & Quote */}
        <div className={styles.column}>
          <h2>
            <Link href="/"> ShikharthiBD</Link>
          </h2>
          <p className={styles.quote}>
            &quot;শিক্ষার্থীবিডি এর মাধ্যমে অনলাইনে পড়ালেখা হয়ে উঠুক আরও সহজ।
            প্রশ্ন, কোর্স, চাকরি প্রস্তুতি, ইন্টার্ভিউ প্রশ্ন পেয়ে যান হাতের
            কাছেই।&quot;
          </p>
          <p>আমাদের লক্ষ্য শিক্ষার্থীদের জন্য সর্বোত্তম রিসোর্স সরবরাহ করা।</p>
        </div>

        {/* Second & Third Column - Navigation Menus */}
        <div className={styles.column}>
          <h3>Navigation</h3>
          <ul>
            <li>
              <a href="#">Questions</a>
            </li>
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
            <li>
              <a href="#">University Info</a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>More Links</h3>
          <ul>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Forums</a>
            </li>
            <li>
              <a href="#">Interview Questions</a>
            </li>
            <li>
              <a href="#">চাকরি বিজ্ঞাপন</a>
            </li>
          </ul>
        </div>

        {/* Fourth Column - Contact Information */}
        <div className={styles.column}>
          <h3>Contact Us</h3>
          <p>Email: support@shikharthibd.com</p>
          <p>Phone: +880 1710-502483</p>
          <p>Address: Rangpur, Bangladesh</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.copyright}>
        <p>
          &copy; {new Date().getFullYear()} ShikharthiBD. All Rights Reserved.
          Developed by{" "}
          <Link href="https://ashikur.vercel.app/" target="_blank">
            <span className={styles.designed}> Ashikur</span>
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
