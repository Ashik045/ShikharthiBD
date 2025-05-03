import FilterSSCHSC from "@/components/FilterSSCHSC/FilterSSCHSC";
import ResultsTable from "@/components/ResultsTable/ResultsTable";
import styles from "@/styles/questions.module.scss";

const pdfUrl = "/pdfs/Ashikur_CV.pdf"; // No need to import

const hsc = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const year = searchParams.year || "";
  const board = searchParams.board || "";
  const group = searchParams.group || "";

  console.log(year, board, group);

  const results = [
    {
      id: 1,
      name: "Math 2023 Question",
      year: "2023",
      board: "Dhaka",
      pdfUrl: pdfUrl,
    },
    {
      id: 2,
      name: "Physics 2022 Question",
      year: "2022",
      board: "Dhaka",
      pdfUrl: pdfUrl,
    },
  ];

  return (
    <div className={styles.page_container}>
      {/* Pass filters to the Filter component */}
      <div className={styles.filter_wrapper}>
        {/* <Filter hsc /> */}
        <FilterSSCHSC hsc />
      </div>

      {/* show the results here */}
      <ResultsTable results={results} />
    </div>
  );
};

export default hsc;
