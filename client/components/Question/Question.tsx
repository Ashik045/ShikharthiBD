import nophoto from "@/public/images/no-photo.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./question.module.scss";

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

interface QuestionProps {
  question: QuestionType;
}

const Question = ({ question }: QuestionProps) => {
  return (
    <div className={styles.single_question}>
      <div className={styles.question_user}>
        <Link
          href={`${process.env.NEXT_PUBLIC_ASKLOOM_URL}/profile/${question.userid}`}
          target="blank"
        >
          <Image
            src={question?.userPhoto ? question.userPhoto : nophoto}
            height={37}
            width={37}
            alt="askloom"
            className={styles.user_profile}
            placeholder="blur"
            blurDataURL="../../public/images/no-photo.png"
          />
        </Link>

        <div className={styles.post_user_nameandtime}>
          <Link
            href={`${process.env.NEXT_PUBLIC_ASKLOOM_URL}/profile/${question.userid}`}
            target="blank"
            style={{ textDecoration: "none" }}
          >
            <p className={styles.username}>{question.user}</p>
          </Link>
        </div>
      </div>

      <div className={styles.question_body}>
        <h2 className={styles.question_title}>
          <Link
            href={`${process.env.NEXT_PUBLIC_ASKLOOM_URL}/questions/${question._id}`}
            target="blank"
          >
            {" "}
            {question.title}
          </Link>
        </h2>

        <div className={styles.question_text}>
          <div
            className={styles.question_q}
            dangerouslySetInnerHTML={{ __html: question.question }}
          ></div>

          <a
            href={`${process.env.NEXT_PUBLIC_ASKLOOM_URL}/questions/${question._id}`}
            target="blank"
            className={styles.view_more_btn}
          >
            View More
          </a>
        </div>

        <div className={styles.add_like_cmnt}>
          <p>
            <span className={styles.likes}>
              {question.reacts.length}
              {question.reacts.length > 1 ? " Likes" : " Like"}
            </span>
          </p>
          <p>
            <span className={styles.comments}>
              <Link
                href={`${process.env.NEXT_PUBLIC_ASKLOOM_URL}/questions/${question._id}`}
                target="blank"
              >
                {question.comments.length}{" "}
                {question.comments.length > 1 ? "Answers" : "Answer"}
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question;
