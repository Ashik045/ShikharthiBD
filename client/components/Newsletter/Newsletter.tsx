"use client";
import { useState } from "react";
import styles from "./newsletter.module.scss";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }
    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <div className={styles.newsletter}>
      <div className={styles.newsletter_main}>
        <h3>
          Stay updated with the latest news and updates from ShikharthiBD.
        </h3>

        <form onSubmit={handleSubscribe} className={styles.form}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Subscribe
          </button>
          {message && <p className={styles.message}>{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
