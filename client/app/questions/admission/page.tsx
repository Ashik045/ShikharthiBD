import Filter from "@/components/Filter/Filter";
import ResultsTable from "@/components/ResultsTable/ResultsTable";
import styles from "@/styles/questions.module.scss";

const pdfUrl = "/pdfs/Ashikur_CV.pdf"; // No need to import

const admission = () => {
  const results = [
    {
      id: 1,
      name: "Math 2023 Question",
      year: "2023",
      pdfUrl: pdfUrl,
    },
    {
      id: 2,
      name: "Physics 2022 Question",
      year: "2022",
      pdfUrl: pdfUrl,
    },
  ];

  return (
    <div className={styles.page_container}>
      {/* Pass filters to the Filter component */}
      <div className={styles.filter_wrapper}>
        <Filter admission />
      </div>

      {/* show the results here */}
      <ResultsTable results={results} />
    </div>
  );
};

export default admission;
