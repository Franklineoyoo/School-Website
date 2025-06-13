import React from "react";
import "./About.css";
import about_img from "../../assets/about.jpg";
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Our mission is to identify, inspire, and equip emerging leaders with
          the knowledge, character, and real-world experience needed to make a
          meaningful impact. We foster environments where young minds learn to
          think critically, act with integrity, and lead with confidence. We are
          committed to unlocking the potential in every student through
          education, mentorship, and personal growth. We believe true leadership
          is rooted in empathy, resilience, and the ability to inspire others.
          By shaping ethically grounded, forward-thinking individuals, we
          prepare them not only to face the future—but to shape it for the
          better.
        </p>
      </div>
    </div>
  );
};

export default About;
