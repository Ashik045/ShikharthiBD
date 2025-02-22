import { useState } from "react";
import styles from "./JobOpportunities.module.scss";

const JobOpportunities = () => {
  const [jobs] = useState([
    {
      title: "Frontend Developer",
      company: "Tech Solutions Ltd.",
      location: "Dhaka, Bangladesh",
      description:
        "Join our team as a frontend developer to build modern, scalable web applications.",
      logo: "https://via.placeholder.com/50x50",
      link: "/job/frontend-developer",
    },
    {
      title: "Data Analyst",
      company: "Data Insights Inc.",
      location: "Chittagong, Bangladesh",
      description:
        "Help businesses make informed decisions using data analysis and visualization tools.",
      logo: "https://via.placeholder.com/50x50",
      link: "/job/data-analyst",
    },
    {
      title: "UI/UX Designer",
      company: "Creative Agency",
      location: "Sylhet, Bangladesh",
      description:
        "Design intuitive user interfaces for both web and mobile platforms.",
      logo: "https://via.placeholder.com/50x50",
      link: "/job/ui-ux-designer",
    },
  ]);

  return (
    <section className={styles.jobOpportunities}>
      <div className={styles.sectionTitle}>
        <h2>Job Opportunities & Career Support</h2>
        <p>
          Explore top job listings, career advice, and resources to help you
          succeed in your career.
        </p>
      </div>

      <div className={styles.jobsList}>
        {jobs.map((job, index) => (
          <div className={styles.jobCard} key={index}>
            <img
              className={styles.companyLogo}
              src={job.logo}
              alt={job.company}
            />
            <div className={styles.jobDetails}>
              <h3>{job.title}</h3>
              <p className={styles.companyName}>{job.company}</p>
              <p className={styles.jobLocation}>{job.location}</p>
              <p className={styles.jobDescription}>{job.description}</p>
              <a href={job.link} className={styles.viewJobBtn}>
                View Job
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.careerAdvice}>
        <h3>Career Advice & Interview Preparation</h3>
        <div className={styles.adviceContent}>
          <p>
            Get tips on how to ace your interviews, improve your resume, and
            build your professional network.
          </p>
          <button className={styles.viewAdviceBtn}>View Career Advice</button>
        </div>
      </div>
    </section>
  );
};

export default JobOpportunities;
