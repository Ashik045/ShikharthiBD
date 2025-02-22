import FeaturedResources from "@/components/FeaturedResources/FeaturedResources";
import Header from "@/components/Header/Header";
import JobOpportunities from "@/components/JobOpportunities/JobOpportunities";
import Newsletter from "@/components/Newsletter/Newsletter";
import PopularCourses from "@/components/PopularCourses/PopularCourses";

export default function Home() {
  return (
    <div className="">
      <Header />
      <FeaturedResources />
      <PopularCourses />
      <JobOpportunities />
      <Newsletter />
    </div>
  );
}
