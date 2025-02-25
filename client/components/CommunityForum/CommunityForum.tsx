"use client";
import { useEffect, useState } from "react";
import Question from "../Question/Question";
import styles from "./CommunityForum.module.scss";

export interface Comment {
  _id: string;
  user: string;
  text: string;
  createdAt: Date;
}

export interface QuestionType {
  _id: string;
  title: string;
  question: string;
  user: string;
  userid: string;
  userTitle: string;
  userPhoto: string;
  tags: string[]; // Array of strings for tags
  reacts: string[]; // Array of strings for reactions
  comments: Comment[]; // Array of Comment objects
  createdAt: Date; // Date
}

const CommunityForum = () => {
  const [questions, setQuestions] = useState<QuestionType[]>([]); // Corrected type to an array of QuestionType
  console.log(questions);

  useEffect(() => {
    // Fetch the questions from the Askloom API
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/questions/all");

        // Ensure the request was successful
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setQuestions(data.message); // Assuming the response has 'message' property with questions
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    // Log the questions when they are updated
    console.log(questions);
  }, [questions]); // This will log the updated questions whenever they change

  return (
    <section className={styles.communityForum}>
      <div className={styles.sectionTitle}>
        <h2>Community & Discussion</h2>
        <p>
          Join the conversation! Explore the most popular discussions and
          questions from the Askloom community.
        </p>
      </div>

      <div className={styles.questionsList}>
        {questions.length > 0 ? (
          questions
            .slice(0, 4)
            .map((question) => (
              <Question key={question._id} question={question} />
            ))
        ) : (
          <p>Loading questions...</p>
        )}
      </div>

      <div className={styles.cta}>
        <h3>Got a Question?</h3>
        <p>
          Join our forum and ask your own questions to get help from the
          community.
        </p>
        <a
          href="https://askloom.vercel.app/createquestion"
          className={styles.askQuestionBtn}
        >
          Ask a Question
        </a>
      </div>
    </section>
  );
};

export default CommunityForum;
