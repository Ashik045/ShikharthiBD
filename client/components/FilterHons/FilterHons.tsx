"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import styles from "../FilterSSCHSC/FilterSSCHSC.module.scss";

export default function FilterHons() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Maintain local state
  const [year, setYear] = useState(searchParams.get("year") || "");
  const [course, setCourse] = useState(searchParams.get("course") || "");
  const [subject, setSubject] = useState(searchParams.get("subject") || "");

  const handleApply = () => {
    const query = new URLSearchParams();
    if (year) query.set("year", year);
    if (course) query.set("course", course);
    if (subject) query.set("subject", subject);

    const path = "/questions/honours";

    router.push(`${path}?${query.toString()}`);
  };
  return (
    <div className={styles.filter_container}>
      <h3>Find Honours Questions</h3>

      <div className={styles.filters}>
        <>
          <select value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option value="">Select Subject</option>
            <option value="bengali">BENGALI</option>
            <option value="english">ENGLISH</option>
            <option value="history">HISTORY</option>
            <option value="physics">ISLAMIC HISTORY & CULTURE</option>
            <option value="physics">PHILOSOPHY</option>
            <option value="physics">ISLAMIC STUDIES</option>
            <option value="physics">POLITICAL SCIENCE</option>
            <option value="physics">SOCIOLOGY </option>
            <option value="physics">SOCIAL WORK </option>
            <option value="physics">ECONOMICS </option>
            <option value="physics">ACCOUNTING </option>
            <option value="physics">MANAGEMENT </option>
            <option value="physics">PHYSICS </option>
            <option value="physics">CHEMISTRY </option>
            <option value="physics">BOTANY </option>
            <option value="physics">GEOGRAPHY AND ENVIRONMENT </option>
            <option value="physics">MATHEMATICS </option>
          </select>
          {/*  */}
          <select value={course} onChange={(e) => setCourse(e.target.value)}>
            <option value="">Course Year</option>
            <option value="first year">First year</option>
            <option value="second year">Second year</option>
            <option value="third year">Third year</option>
            <option value="fourth year">Fourth year</option>
          </select>
          {/*  */}
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">Select Year</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
          </select>
        </>
      </div>

      <button className={styles.apply_filter} onClick={handleApply}>
        Apply
      </button>
    </div>
  );
}
