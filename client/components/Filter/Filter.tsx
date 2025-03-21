// components/Filter.tsx (✅ Client Component)
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import styles from "./filter.module.scss";

type FilterParams = {
  hons?: boolean;
  ssc?: boolean;
  hsc?: boolean;
  admission?: boolean;
};

const Filter = ({ hons, ssc, hsc, admission }: FilterParams) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Maintain local state
  const [year, setYear] = useState(searchParams.get("year") || "");
  const [subject, setSubject] = useState(searchParams.get("subject") || "");
  const [board, setBoard] = useState(searchParams.get("board") || "");
  const [university, setUniversity] = useState(
    searchParams.get("university") || ""
  );

  // should update the filter compnent
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
        {hons && (
          <>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="">Select Subject</option>
              <option value="math">BENGALI</option>
              <option value="physics">ENGLISH</option>
              <option value="physics">HISTORY</option>
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
            <select value={year} onChange={(e) => setYear(e.target.value)}>
              <option value="">Course Year</option>
              <option value="2023">First year</option>
              <option value="2023">Second year</option>
              <option value="2023">Third year</option>
              <option value="2023">Fourth year</option>
            </select>
            {/*  */}
            <select value={year} onChange={(e) => setYear(e.target.value)}>
              <option value="">Select Year</option>
              <option value="2023">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2022">2021</option>
              <option value="2022">2020</option>
              <option value="2022">2019</option>
              <option value="2022">2018</option>
              <option value="2022">2017</option>
              <option value="2022">2016</option>
              <option value="2022">2015</option>
            </select>
          </>
        )}

        {(ssc || hsc) && (
          <>
            <select
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
            >
              <option value="">Select Group</option>
              <option value="">Science</option>
              <option value="">Humanities</option>
            </select>
            <select value={board} onChange={(e) => setBoard(e.target.value)}>
              <option value="">Select Board</option>
              <option value="dhaka">Dhaka</option>
              <option value="rajshahi">Rajshahi</option>
              <option value="comilla">Comilla</option>
              <option value="barisal">Barisal</option>
              <option value="sylhet">Sylhet</option>
              <option value="dinajpur">Dinajpur</option>
              <option value="chittagong">Chittagong</option>
            </select>

            <select value={year} onChange={(e) => setYear(e.target.value)}>
              <option value="">Select Year</option>
              <option value="2023">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2022">2021</option>
              <option value="2022">2020</option>
              <option value="2022">2019</option>
              <option value="2022">2018</option>
              <option value="2022">2017</option>
              <option value="2022">2016</option>
              <option value="2022">2015</option>
            </select>
          </>
        )}

        {admission && (
          <>
            <select
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
            >
              <option value="">Select Group</option>
              <option value="">Science</option>
              <option value="">Humanities</option>
            </select>

            <select
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
            >
              <option value="">Select University</option>
              <option value="Dhaka University">Dhaka University</option>
              <option value="Rajshahi University">Rajshahi University</option>
              <option value="Jahangirnagar University">
                Jahangirnagar University
              </option>
              <option value="Chittagong University">
                Chittagong University
              </option>
              <option value="gst">GST</option>
            </select>

            <select value={year} onChange={(e) => setYear(e.target.value)}>
              <option value="">Select Year</option>
              <option value="2023">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2022">2021</option>
              <option value="2022">2020</option>
              <option value="2022">2019</option>
              <option value="2022">2018</option>
              <option value="2022">2017</option>
              <option value="2022">2016</option>
              <option value="2022">2015</option>
            </select>
          </>
        )}
      </div>

      <button className={styles.apply_filter} onClick={handleApply}>
        Apply
      </button>
    </div>
  );
};

export default Filter;
