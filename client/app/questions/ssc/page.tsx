import Filter from "@/components/Filter/Filter";
import ResultsTable from "@/components/ResultsTable/ResultsTable";
import styles from "@/styles/questions.module.scss";

const pdfUrl = "/pdfs/Ashikur_CV.pdf"; // No need to import

const ssc = () => {
  const results = [
    {
      id: 1,
      name: "Math 2023 Question",
      pdfUrl: pdfUrl,
    },
    {
      id: 2,
      name: "Physics 2022 Question",
      pdfUrl: pdfUrl,
    },
  ];

  return (
    <div className={styles.page_container}>
      {/* Pass filters to the Filter component */}
      <div className={styles.filter_wrapper}>
        <Filter ssc />
      </div>

      {/* show the results here */}
      <ResultsTable results={results} />
    </div>
  );
};

export default ssc;
