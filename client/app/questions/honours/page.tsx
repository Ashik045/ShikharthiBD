// app/questions/honours/page.tsx

import Filter from "@/components/Filter/Filter";
import styles from "@/styles/questions.module.scss";

const HonoursPage = () => {
  return (
    <div className={styles.page_container}>
      <h2>Honours Questions</h2>
      <div className={styles.filter_wrapper}>
        <Filter
          years={["2024", "2023", "2022"]}
          subjects={["Math", "Physics", "Chemistry"]}
          boards={["Dhaka", "Rajshahi", "Chattogram"]}
        />
      </div>
    </div>
  );
};

export default HonoursPage;
