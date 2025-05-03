import CommunityForum from "@/components/CommunityForum/CommunityForum";
import FeaturedResources from "@/components/FeaturedResources/FeaturedResources";
import Header from "@/components/Header/Header";
import JobOpportunities from "@/components/JobOpportunities/JobOpportunities";
import Newsletter from "@/components/Newsletter/Newsletter";
import PopularCourses from "@/components/PopularCourses/PopularCourses";

export default function Home() {
  return (
    <div className="" style={{ overflowX: "hidden" }}>
      <Header />
      <FeaturedResources />
      <PopularCourses />
      <JobOpportunities />
      <CommunityForum />
      <Newsletter />
    </div>
  );
}
