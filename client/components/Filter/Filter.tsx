"use client";
import styles from "./filter.module.scss";

interface FilterProps {
  years: string[];
  subjects: string[];
  boards: string[];
  universities?: string[]; // Optional for Admission page
  year: string;
  setYear: (value: string) => void;
  subject: string;
  setSubject: (value: string) => void;
  board?: string | null;
  setBoard?: (value: string | null) => void;
  university?: string | null;
  setUniversity?: (value: string | null) => void;
  onApply: () => void;
}

const Filter = ({
  years,
  subjects,
  boards,
  universities,
  year,
  setYear,
  subject,
  setSubject,
  board,
  setBoard,
  university,
  setUniversity,
  onApply,
}: FilterProps) => {
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

        {setBoard && (
          <select
            value={board || ""}
            onChange={(e) => setBoard(e.target.value || null)}
          >
            <option value="">Select Board</option>
            {boards.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        )}

        {setUniversity && universities && (
          <select
            value={university || ""}
            onChange={(e) => setUniversity(e.target.value || null)}
          >
            <option value="">Select University</option>
            {universities.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        )}

        <button className={styles.apply_filter} onClick={onApply}>
          Apply
        </button>
      </div>
    </div>
  );
};

export default Filter;
