"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import styles from "../FilterSSCHSC/FilterSSCHSC.module.scss";

export default function FilterAdmission() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Maintain local state
  const [year, setYear] = useState(searchParams.get("year") || "");
  const [university, setUniversity] = useState(
    searchParams.get("university") || ""
  );
  const [group, setGroup] = useState(searchParams.get("group") || "");

  const handleApply = () => {
    const query = new URLSearchParams();
    if (year) query.set("year", year);
    if (university) query.set("university", university);
    if (group) query.set("group", group);

    const path = "/questions/admission";

    router.push(`${path}?${query.toString()}`);
  };
  return (
    <div className={styles.filter_container}>
      <h3>Find Admission Questions</h3>

      <div className={styles.filters}>
        <select value={group} onChange={(e) => setGroup(e.target.value)}>
          <option value="">Select Group</option>
          <option value="science">Science</option>
          <option value="humanities">Humanities</option>
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
          <option value="Chittagong University">Chittagong University</option>
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
      </div>

      <button className={styles.apply_filter} onClick={handleApply}>
        Apply
      </button>
    </div>
  );
}
