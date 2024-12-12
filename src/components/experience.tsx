import React, { useEffect } from "react";
import { HiBuildingOffice } from "react-icons/hi2";
import { GoRocket } from "react-icons/go";
import { GiSandsOfTime } from "react-icons/gi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "./themeContext";

export default function Experience() {
  // Define separate refs and animations for each card
  const [ref1, inView1] = useInView({ threshold: 0 });
  const [ref2, inView2] = useInView({ threshold: 0 });
  const [ref3, inView3] = useInView({ threshold: 0 });

  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();

  const { isDark } = useTheme();

  useEffect(() => {
    if (inView1) {
      animation1.start({ x: 0, opacity: 1 });
    } else {
      animation1.start({ x: "-100%", opacity: 0 });
    }
  }, [inView1, animation1]);

  useEffect(() => {
    if (inView2) {
      animation2.start({ x: 0, opacity: 1 });
    } else {
      animation2.start({ x: "-100%", opacity: 0 });
    }
  }, [inView2, animation2]);

  useEffect(() => {
    if (inView3) {
      animation3.start({ x: 0, opacity: 1 });
    } else {
      animation3.start({ x: "-100%", opacity: 0 });
    }
  }, [inView3, animation3]);

  return (
    <div className="flex flex-col w-screen p-2.5 mt-10">
      <h1 className="text-2xl font-bold">Experience</h1>
      <div className={"exp-main-view mt-5"}>
        {/* Card 1 */}
        <motion.div
          className={`exp-card ${isDark ? "bg-[#494e4e]" : "bg-[#eaecea]"}`}
          ref={ref1}
          animate={animation1}
          initial={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="exp-display-content">
            <GoRocket size={18} color="green" />
            <h2 className="exp-head text-green-500">Internship</h2>
          </div>
          <div className="exp-display-content">
            <HiBuildingOffice size={18} color="green" />
            <h5 className="exp-content">Centizen Inc</h5>
          </div>
          <div className="exp-display-content">
            <GiSandsOfTime size={18} color="green" />
            <h5 className="exp-content">Dec 2021 - May 2022</h5>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className={`exp-card ${isDark ? "bg-[#494e4e]" : "bg-[#eaecea]"}`}
          ref={ref2}
          animate={animation2}
          initial={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="exp-display-content">
            <GoRocket size={18} color="green" />
            <h2 className="exp-head text-green-500">Trainee</h2>
          </div>
          <div className="exp-display-content">
            <HiBuildingOffice size={18} color="green" />
            <h5 className="exp-content">Centizen Inc</h5>
          </div>
          <div className="exp-display-content">
            <GiSandsOfTime size={18} color="green" />
            <h5 className="exp-content">Jun 2022 - Nov 2022</h5>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className={`exp-card ${isDark ? "bg-[#494e4e]" : "bg-[#eaecea]"}`}
          ref={ref3}
          animate={animation3}
          initial={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="exp-display-content ">
            <GoRocket size={18} color="green" />
            <h2 className="exp-head text-green-500">Software Developer</h2>
          </div>
          <div className="exp-display-content">
            <HiBuildingOffice size={18} color="green" />
            <h5 className="exp-content">Centizen Inc</h5>
          </div>
          <div className="exp-display-content">
            <GiSandsOfTime size={18} color="green" />
            <h5 className="exp-content">Dec 2022 - Oct 2024</h5>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
