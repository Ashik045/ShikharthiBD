"use client";

import jobLogo from "@/public/images/309.jpg";
import Image from "next/image";
import { useState } from "react";
import styles from "./jobOpportunities.module.scss";

const JobOpportunities = () => {
  const [jobs] = useState([
    {
      title: "Frontend Developer",
      company: "Tech Solutions Ltd.",
      location: "Dhaka, Bangladesh",
      description:
        "Join our team as a frontend developer to build modern, scalable web applications.",
      logo: jobLogo,
      link: "/job/frontend-developer",
    },
    {
      title: "Data Analyst",
      company: "Data Insights Inc.",
      location: "Chittagong, Bangladesh",
      description:
        "Help businesses make informed decisions using data analysis and visualization tools.",
      logo: jobLogo,
      link: "/job/data-analyst",
    },
    {
      title: "UI/UX Designer",
      company: "Creative Agency",
      location: "Sylhet, Bangladesh",
      description:
        "Design intuitive user interfaces for both web and mobile platforms.",
      logo: jobLogo,
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
            <Image
              className={styles.companyLogo}
              src={job.logo}
              alt={job.company}
              width={50}
              height={50}
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
    </section>
  );
};

export default JobOpportunities;
