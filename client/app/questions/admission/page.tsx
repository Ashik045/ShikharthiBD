import FilterAdmission from "@/components/FilterAdmission/FilterAdmission";
import ResultsTable from "@/components/ResultsTable/ResultsTable";
import styles from "@/styles/questions.module.scss";

const pdfUrl = "/pdfs/Ashikur_CV.pdf"; // No need to import

const admission = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const year = searchParams.year || "";
  const university = searchParams.university || "";
  const group = searchParams.group || "";

  console.log(year, university, group);

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
        {/* <Filter admission /> */}
        <FilterAdmission />
      </div>

      {/* show the results here */}
      <ResultsTable results={results} />
    </div>
  );
};

export default admission;
