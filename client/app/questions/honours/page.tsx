// app/questions/honours/page.tsx (✅ Server Component)
import FilterHons from "@/components/FilterHons/FilterHons";
import ResultsTable from "@/components/ResultsTable/ResultsTable";
import styles from "@/styles/questions.module.scss";

const HonoursPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  // Extract filters from URL
  const year = searchParams.year || "";
  const course = searchParams.course || "";
  const subject = searchParams.subject || "";

  console.log(year, course, subject);

  // console.log(year, subject, board, university);
  const pdfUrl = "/pdfs/Ashikur_CV.pdf"; // No need to import

  // create a function here to fetch the search results from database
  // const fetchResults = async () => {
  //   const query = new URLSearchParams({ year, subject, board, university });
  //   const res = await fetch(`/api/questions?${query.toString()}`);
  //   const data = await res.json();
  //   return data;
  // };
  // const results = await fetchResults();

  // Fake Result Data (Temporary)
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
        {/* <Filter hons /> */}
        <FilterHons />
      </div>

      {/* show the results here */}
      <ResultsTable results={results} />
    </div>
  );
};

export default HonoursPage;
