// app/components/Filter.tsx
"use client";
import { useState } from "react";

import styles from "./filter.module.scss";
interface FilterProps {
  years: string[];
  subjects: string[];
  boards: string[];
}

const Filter = ({ years, subjects, boards }: FilterProps) => {
  const [year, setYear] = useState("");
  const [subject, setSubject] = useState("");
  const [board, setBoard] = useState("");

  return (
    <div className={styles.filter_container}>
      <h3>Filter Questions</h3>
      <div className={styles.filters}>
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">Select Year</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>

        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option value="">Select Subject</option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <select value={board} onChange={(e) => setBoard(e.target.value)}>
          <option value="">Select Board</option>
          {boards.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>

        <button className={styles.apply_filter}>Apply</button>
      </div>
    </div>
  );
};

export default Filter;
