import headerImg from "@/public/images/308.jpg";
import Image from "next/image"; // For image handling in Next.js
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.textSection}>
        <h1 className={styles.heading}>
          শিক্ষার্থীবিডি এর মাধ্যমে অনলাইনে পড়ালেখা হয়ে উঠুক আরও সহজ। প্রশ্ন,
          কোর্স, চাকরি প্রস্তুতি, ইন্টার্ভিউ প্রশ্ন পেয়ে যান হাতের কাছেই।
        </h1>
        <p className={styles.subHeading}>
          A complete academic platform to help you succeed in your education,
          career, and personal growth.
        </p>
      </div>
      <div className={styles.imageSection}>
        <Image
          src={headerImg}
          alt="Study illustration"
          width={600}
          height={500}
          className={styles.headerImage}
        />
      </div>
    </header>
  );
};

export default Header;
