/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import styles from "./resultsTable.module.scss";

const ResultsTable = ({ results }: { results: any[] }) => {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  return (
    <div className={styles.filter_results}>
      <h2>Filter Results:</h2>

      {results.length > 0 ? (
        <table className={styles.results_table}>
          <thead>
            <tr>
              <th className={styles.table_th_name}>S/N</th>
              <th>Name</th>
              <th>Year</th>
              <th>Board</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {results.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td className={styles.table_th_name}>{index + 1}</td>{" "}
                  {/* Serial Number */}
                  <td>{item.name}</td>
                  <td>{item.year}</td>
                  <td>{item.board || "N/A"}</td>
                  <td>
                    <button
                      className={styles.view_btn}
                      onClick={() => setSelectedItem(item)}
                    >
                      View
                    </button>
                    <a
                      href={item.pdfUrl}
                      download
                      className={styles.download_btn}
                    >
                      Download
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>No results found.</p>
      )}

      {/* Popup Modal */}
      {selectedItem && (
        <div
          className={styles.popup_overlay}
          onClick={() => setSelectedItem(null)}
        >
          <div
            className={styles.popup_content}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.close_popup}
              onClick={() => setSelectedItem(null)}
            >
              ✖
            </button>
            <h3>{selectedItem.name}</h3>
            <p>
              <strong>Year:</strong> {selectedItem.year}
            </p>
            <p>
              <strong>Board:</strong> {selectedItem.board || "N/A"}
            </p>
            <iframe src={selectedItem.pdfUrl} width="100%" height="400px" />
            <button
              className={styles.close_btn}
              onClick={() => setSelectedItem(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsTable;
