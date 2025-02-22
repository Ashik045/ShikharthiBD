"use client";
import { useState } from "react";
import styles from "./featuredResources.module.scss";

const FeaturedResources = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const features = [
    {
      title: "Online Courses",
      description:
        "Explore a wide range of online courses to boost your skills and knowledge.",
      icon: "📚",
    },
    {
      title: "Job Preparation Materials",
      description:
        "Prepare for your dream job with exclusive study material and mock exams.",
      icon: "💼",
    },
    {
      title: "Interview Questions",
      description:
        "Access a collection of common and expert-level interview questions for various roles.",
      icon: "💬",
    },
    {
      title: "Study Materials",
      description:
        "Get the best study materials for your academic and professional growth.",
      icon: "📝",
    },
  ];

  return (
    <section className={styles.featuredResources}>
      <div className={styles.sectionTitle}>
        <h2>Featured Resources</h2>
        <p>
          Discover key resources to help you excel in your academic and career
          journey.
        </p>
      </div>
      <div className={styles.cards}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${styles.card} ${
              hovered === index ? styles.hovered : ""
            }`}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className={styles.icon}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <button className={styles.learnMore}>Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedResources;
