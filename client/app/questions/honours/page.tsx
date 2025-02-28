"use client";

// app/questions/honours/page.tsx
import { useState } from "react";

import Filter from "@/components/Filter/Filter";
import styles from "@/styles/questions.module.scss";

const HonoursPage = () => {
  // State for filters (optional values)
  const [year, setYear] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [board, setBoard] = useState<string | null>(null); // Optional
  const [university, setUniversity] = useState<string | null>(null); // Optional

  // Fake result items (Replace with API data)
  const [results, setResults] = useState([
    {
      id: 1,
      name: "Honours Math 2024 Question",
      pdf: "/path/to/question1.pdf",
    },
    {
      id: 2,
      name: "Honours Physics 2023 Question",
      pdf: "/path/to/question2.pdf",
    },
  ]);

  // Function to fetch filtered data
  const fetchResults = async () => {
    const queryParams = new URLSearchParams({
      year: year || "",
      subject: subject || "",
      board: board || "",
      university: university || "",
    });

    try {
      const response = await fetch(`/api/questions?${queryParams.toString()}`);
      const data = await response.json();
      setResults(data); // Update results state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className={styles.page_container}>
      <h2>Honours Questions</h2>

      {/* Filter Component */}
      <div className={styles.filter_wrapper}>
        <Filter
          years={["2024", "2023", "2022"]}
          subjects={["Math", "Physics", "Chemistry"]}
          boards={["Dhaka", "Rajshahi", "Chattogram"]}
          universities={["Dhaka University", "Rajshahi University"]} // Optional
          year={year}
          setYear={setYear}
          subject={subject}
          setSubject={setSubject}
          board={board}
          setBoard={setBoard}
          university={university}
          setUniversity={setUniversity}
          onApply={fetchResults}
        />
      </div>

      {/* Results Section */}
      <div className={styles.filter_results}>
        {results.length > 0 ? (
          results.map((item) => (
            <div key={item.id} className={styles.result_card}>
              <h4>{item.name}</h4>
              <div className={styles.result_actions}>
                <a href={item.pdf} download>
                  📥 Download PDF
                </a>
                <a href={item.pdf} target="_blank" rel="noopener noreferrer">
                  👁 View PDF
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default HonoursPage;
