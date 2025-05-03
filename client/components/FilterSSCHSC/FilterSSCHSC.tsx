/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import styles from "./FilterSSCHSC.module.scss";

type FilterParams = {
  hons?: boolean;
  ssc?: boolean;
  hsc?: boolean;
  admission?: boolean;
};

export default function FilterSSCHSC({ hons, ssc, hsc }: FilterParams) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Maintain local state
  const [year, setYear] = useState(searchParams.get("year") || "");
  const [board, setBoard] = useState(searchParams.get("board") || "");
  const [group, setGroup] = useState(searchParams.get("group") || "");

  const handleApply = () => {
    const query = new URLSearchParams();
    if (year) query.set("year", year);
    if (board) query.set("board", board);
    if (group) query.set("group", group);

    let path = "/questions";
    if (ssc) path += "/ssc";
    if (hsc) path += "/hsc";

    router.push(`${path}?${query.toString()}`);
  };

  return (
    <div className={styles.filter_container}>
      <h3>Find {ssc ? "SSC" : "HSC"} Questions</h3>

      <div className={styles.filters}>
        {(ssc || hsc) && (
          <>
            <select value={group} onChange={(e) => setGroup(e.target.value)}>
              <option value="">Select Group</option>
              <option value="science">Science</option>
              <option value="humanities">Humanities</option>
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
      </div>

      <button className={styles.apply_filter} onClick={handleApply}>
        Apply
      </button>
    </div>
  );
}
