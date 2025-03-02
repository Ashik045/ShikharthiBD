// app/questions/honours/page.tsx (✅ Server Component)
import Filter from "@/components/Filter/Filter";
import ResultsTable from "@/components/ResultsTable/ResultsTable";
import styles from "@/styles/questions.module.scss";

const HonoursPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  // Extract filters from URL
  const year = searchParams.year || "";
  const subject = searchParams.subject || "";
  const board = searchParams.board || "";
  const university = searchParams.university || "";

  console.log(year, subject, board, university);

  // create a function here to fetch the search results from database

  // Fake Result Data (Temporary)
  const results = [
    {
      id: 1,
      name: "Math 2023 Question",
      pdfUrl: "/questions/math-2023.pdf",
    },
    {
      id: 2,
      name: "Physics 2022 Question",
      pdfUrl: "/questions/physics-2022.pdf",
    },
  ];

  return (
    <div className={styles.page_container}>
      {/* Pass filters to the Filter component */}
      <div className={styles.filter_wrapper}>
        <Filter />
      </div>

      <div className={styles.results_c}>
        <ResultsTable results={results} />
      </div>
    </div>
  );
};

export default HonoursPage;
