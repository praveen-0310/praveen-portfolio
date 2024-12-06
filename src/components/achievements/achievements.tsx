import React, { useEffect } from "react";
import { SiOnlyoffice } from "react-icons/si";
import { FaUserGraduate } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./achievements.css";
import { useTheme } from "../themeContext";

export default function Achievements() {
  const [officeRef, officeInView] = useInView({ threshold: 0 });
  const [collegeRef, collegeInView] = useInView({ threshold: 0 });
  const [schoolRef, schoolInView] = useInView({ threshold: 0 });

  const officeAnimation = useAnimation();
  const collegeAnimation = useAnimation();
  const schoolAnimation = useAnimation();

  const { isDark } = useTheme();

  useEffect(() => {
    // Update animations based on visibility
    if (officeInView) {
      officeAnimation.start({ x: 0, opacity: 1 });
    } else {
      officeAnimation.start({ x: "100%", opacity: 0 });
    }

    if (collegeInView) {
      collegeAnimation.start({ x: 0, opacity: 1 });
    } else {
      collegeAnimation.start({ x: "100%", opacity: 0 });
    }

    if (schoolInView) {
      schoolAnimation.start({ x: 0, opacity: 1 });
    } else {
      schoolAnimation.start({ x: "100%", opacity: 0 });
    }
  }, [
    officeInView,
    collegeInView,
    schoolInView,
    officeAnimation,
    collegeAnimation,
    schoolAnimation,
  ]); // Add the animation hooks to the dependencies

  return (
    <div className="ach-main-view mt-10">
      <h2 className="flex text-2xl font-bold">Achievements</h2>
      <div className="content-view mt-5">
        <motion.div
          className={`card-view ${isDark ? "bg-[#494e4e]" : "bg-[#eaecea]"}`}
          ref={officeRef}
          animate={officeAnimation}
          initial={{ x: "100%", opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="row-view">
            <SiOnlyoffice color="green" />
            <h4 className="flex text-xl font-bold text-green-500">Office</h4>
          </div>
          <div className="row-view">
            <GiAchievement color="green" />
            <p className=" text-base">
              Rising Star by <span className="font-bold">Centizen Inc</span> on
              2022
            </p>
          </div>
          <div className="row-view">
            <GiAchievement color="green" />
            <p className=" text-base">
              Most Determined Employee by{" "}
              <span className="font-bold">Centizen Inc</span> on 2023
            </p>
          </div>
        </motion.div>

        <motion.div
          className={`card-view ${isDark ? "bg-[#494e4e]" : "bg-[#eaecea]"}`}
          ref={collegeRef}
          animate={collegeAnimation}
          initial={{ x: "100%", opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="row-view">
            <FaUserGraduate color="green" />
            <h4 className="flex text-xl font-bold text-green-500">College</h4>
          </div>
          <div className="row-view">
            <GiAchievement color="green" />
            <p className=" text-base">
              Completed degree with <span className="font-bold">7.6 GPA</span>
            </p>
          </div>
          <div className="row-view">
            <GiAchievement color="green" />
            <p className=" text-base">
              Scored more than 800+ bronze medals by solving challenges in
              <span className="font-bold"> Skillrack</span>
            </p>
          </div>
          <div className="row-view">
            <GiAchievement color="green" />
            <p className=" text-base">
              Runner-up in{" "}
              <span className="font-bold">Zonal Level Basketball</span>{" "}
              Championship in 2024
            </p>
          </div>
        </motion.div>

        <motion.div
          className={`card-view ${isDark ? "bg-[#494e4e]" : "bg-[#eaecea]"}`}
          ref={schoolRef}
          animate={schoolAnimation}
          initial={{ x: "100%", opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="row-view">
            <FaSchool color="green" />
            <h4 className="flex text-xl font-bold text-green-500">School</h4>
          </div>
          <div className="row-view">
            <GiAchievement color="green" />
            <p className=" text-base">Completed HSC with 80%</p>
          </div>
          <div className="row-view">
            <GiAchievement color="green" />
            <p className=" text-base">Completed SSLC with 88%</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
