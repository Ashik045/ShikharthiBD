// components/Filter.tsx (✅ Client Component)
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import styles from "./filter.module.scss";

const Filter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Maintain local state
  const [year, setYear] = useState(searchParams.get("year") || "");
  const [subject, setSubject] = useState(searchParams.get("subject") || "");
  const [board, setBoard] = useState(searchParams.get("board") || "");
  const [university, setUniversity] = useState(
    searchParams.get("university") || ""
  );

  const handleApply = () => {
    const query = new URLSearchParams();

    if (year) query.set("year", year);
    if (subject) query.set("subject", subject);
    if (board) query.set("board", board);
    if (university) query.set("university", university);

    // Update the URL without refreshing the page
    router.push(`/questions/honours?${query.toString()}`);
  };

  return (
    <div className={styles.filter_container}>
      <h3>Filter Questions</h3>

      <div className={styles.filters}>
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">Select Year</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>

        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option value="">Select Subject</option>
          <option value="math">Math</option>
          <option value="physics">Physics</option>
        </select>

        <select value={board} onChange={(e) => setBoard(e.target.value)}>
          <option value="">Select Board</option>
          <option value="dhaka">Dhaka</option>
          <option value="rajshahi">Rajshahi</option>
        </select>

        <select
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
        >
          <option value="">Select University</option>
          <option value="Dhaka University">Dhaka University</option>
          <option value="Rajshahi University">Rajshahi University</option>
        </select>
      </div>

      <button className={styles.apply_filter} onClick={handleApply}>
        Apply
      </button>
    </div>
  );
};

export default Filter;
