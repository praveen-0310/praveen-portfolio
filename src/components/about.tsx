import React from "react";
import { RiMailSendFill } from "react-icons/ri";
import { ImMobile } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "./themeContext";

export default function About() {
  const { isDark } = useTheme();
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the element is visible
  });
  return (
    <div className="flex flex-col w-screen p-2.5">
      <div className="about-main">
        <div className="flex flex-col items-center justify-center text-center mt-3">
          <motion.img
            className="profile-img"
            src={require("../assets/my-profile.jpeg")}
            alt="profile-picture"
            ref={ref}
            animate={inView ? { scale: 1 } : { scale: 0.5 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <h3 className="text-2xl text-green-900 font-bold">
            Hi, I am Praveen!
          </h3>
          <h3 className="text-4xl text-gray-700 font-bold">
            Software Developer
          </h3>
        </div>
        <div className="contact-info-card">
          <h2 className="flex text-xl font-bold">Contact Info</h2>
          <hr style={{ borderWidth: 0.5, margin: "20px 0" }} />
          <div className="flex items-center gap-2">
            <RiMailSendFill />
            <a
              href="mailto:praveen.j.chand@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-l hover:text-blue-500"
            >
              praveen.j.chand@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <ImMobile />
            <a
              href="tel:+918248542358"
              target="_blank"
              rel="noreferrer"
              className="text-l hover:text-blue-500"
            >
              +91 8248542358
            </a>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-3 justify-center items-center md:justify-start md:items-start">
            <a
              className={`contact-info-button ${
                isDark ? "bg-white" : "bg-black"
              }`}
              href="https://github.com/praveen-0310"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub color={`${isDark ? "black" : "white"}`} size={22} />
              <p className={`${isDark ? "text-black" : "text-white"}`}>
                Github
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/praveen-03/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-button bg-blue-500"
            >
              <ImLinkedin size={20} />
              <p>LinkedIn</p>
            </a>
            <a
              className="contact-info-button bg-green-600"
              href="https://drive.google.com/file/d/1QcY69-Bh5XoJrTddcT6Qk-GDy9AIV1_X/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbFileCv size={24} />
              <p>Resume</p>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-2xl font-bold">About Me</h1>
        <div className="p-5 mt-5 border-2 border-[rgb(211,211,211)] rounded-[10px]">
          <p>
            Welcome to my portfolio! I am thrilled to share my journey and
            expertise with you.
          </p>
          <br />
          <p>
            I am a passionate MERN Stack Developer with a Bachelor's degree in
            Information Technology from National Engineering College, graduating
            with a GPA of 7.6. During my final year, I had the privilege of
            serving as the President of the IT Association, showcasing my
            leadership and organizational skills.
          </p>
          <br />
          <p>
            In my professional journey spanning three years, I have honed my
            skills primarily in React Native mobile development, with a strong
            focus on frontend technologies including Redux, TypeScript, HTML,
            CSS, and SCSS. I am proficient in JavaScript and have leveraged my
            expertise to lead teams to success.
          </p>
          <br />
          <p>
            My career began as an intern at Centizen in 2021, where I swiftly
            progressed to the role of Junior Software Developer. Subsequently.
          </p>
          <br />
          <p>
            My dedication to innovation and excellence has been acknowledged
            through various accolades, including the "Rising Star" award in 2022
            and "Most Determined Employee" award in 2023, all bestowed by
            Centizen Inc.
          </p>
          <br />
          <p>
            With expertise in React Native, Redux, React,Node.js, MongoDB, and
            PostgreSQL. My strengths lie in my ability to think creatively,
            collaborate effectively, and deliver projects with speed and
            elegance.
          </p>
          <br />
          <p>
            My short-term goal is to further explore various technologies and
            expand my skills as a Full Stack Developer, while my long-term
            aspiration is to leverage these skills to create groundbreaking
            applications that push the boundaries of innovation.
          </p>
          <br />
          <p>
            Beyond my professional endeavors, I am driven by a commitment to
            continuous learning and growth, constantly seeking opportunities to
            enhance my knowledge and contribute meaningfully to the IT world.
          </p>
          <br />
          <p>
            Thank you for taking the time to explore my portfolio. I look
            forward to the opportunity to collaborate with you on creating
            elegant applications.
          </p>
        </div>
      </div>
    </div>
  );
}
