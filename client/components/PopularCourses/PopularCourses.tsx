"use client";

import coursesImg2 from "@/public/images/5834.jpg";
import Image from "next/image";
import { useState } from "react";
import styles from "./popularCourses.module.scss";

const PopularCourses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const courses = [
    {
      title: "Advanced Web Development",
      description:
        "Master front-end and back-end development with real-world projects.",
      rating: 4.8,
      thumbnail: coursesImg2,
    },
    {
      title: "Data Science Essentials",
      description:
        "Learn data analysis, machine learning, and data visualization techniques.",
      rating: 4.7,
      thumbnail: coursesImg2,
    },
    {
      title: "Career Development & Interview Prep",
      description:
        "Prepare for your job interviews with expert-level guidance and mock sessions.",
      rating: 4.9,
      thumbnail: coursesImg2,
    },
    {
      title: "UX/UI Design Fundamentals",
      description:
        "Design intuitive and user-friendly web and mobile interfaces.",
      rating: 4.6,
      thumbnail: coursesImg2,
    },
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + courses.length) % courses.length
    );
  };

  return (
    <section className={styles.popularCourses}>
      <div className={styles.sectionTitle}>
        <h2>Popular Courses</h2>
        <p>
          Explore trending courses to enhance your skills and boost your career.
        </p>
      </div>
      <div className={styles.carousel}>
        <button className={styles.navButton} onClick={goToPrev}>
          ❮
        </button>
        <div className={styles.courseCard}>
          <Image
            src={courses[currentIndex].thumbnail}
            alt={courses[currentIndex].title}
            width={300}
            height={200}
          />
          <div className={styles.cardContent}>
            <h3>{courses[currentIndex].title}</h3>
            <p>{courses[currentIndex].description}</p>
            <div className={styles.rating}>
              ⭐ {courses[currentIndex].rating}
            </div>
            <button className={styles.viewCourse}>View Course</button>
          </div>
        </div>
        <button className={styles.navButton} onClick={goToNext}>
          ❯
        </button>
      </div>
    </section>
  );
};

export default PopularCourses;
