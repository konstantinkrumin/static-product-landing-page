import React from "react";

import Title from "../repeated-components/title";

export default function Features() {
  return (
    <div id="features">
      <Title
        className="features-title"
        titleText="Learn English while being fully emerged in Bali vibe"
      />
      <p>
        By joining our community you would be able to fully immerse into English
        learning environment without being stuck in a boring class for many
        hours. During the program you and your classmates would travel around
        the island, visit glorious waterfalls and full of adventures jungles,
        meet the sunrise on the beach, experience surfing and kitesurfing and
        visit amazing parties in your spare time, meanwhile the rest of your
        time would be filled with interactive English classes with experienced
        English-teachers and interaction with your fellow students from all
        around the world. You will never be bored!
      </p>

      <Title
        className="features-title"
        titleText="Flexibility of learning experience"
      />
      <p>
        We also offer you a great variety of classes at our campus. Nearly 30
        teachers and 450 students are living at our campus at the same time, and
        we offer nearly 15 different classes every day! You are free to visit
        any of your interest, use our amazing library and get a great feedback
        and even schedule individual classes from our excellent teachers.
      </p>

      <Title className="features-title" titleText="Guaranteed result" />
      <p>
        Our campus has been opened since 2009 and over 10000+ students have went
        through our programs since then. No matter what is your inital
        background in English we are willing to work not only hard but smart to
        help you achieve your goals. We provide classes from A1 to C2 level and
        also can help you to prepare for standardized exams such as IELTS and
        TOEFL.
      </p>
    </div>
  );
}
