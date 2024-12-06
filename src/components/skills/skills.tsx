import React from "react";
import { motion } from "framer-motion";
import "./skills.css";
export default function Skills() {
  const skills = require("../../components/shared/knownSkill.json");
  return (
    <div className="skills-main-view mt-10">
      <h2 className="flex text-2xl font-bold">Skills</h2>
      <div className="skills-view mt-5">
        {skills?.skill?.map((item: any) => (
          <motion.div
            className="skill-content"
            initial={{ opacity: 0 }} // Start fully transparent
            whileInView={{ opacity: [0, 0, 0.2, 0.3, 0.5, 0.8, 1] }} // Blink effect when in view
            transition={{ duration: 1, ease: "easeInOut" }} // Animation duration and easing
            viewport={{ amount: 0.7 }} // Trigger animation only once when 50% of the element is in view
          >
            {item?.image && (
              <div className="image-view">
                <img
                  src={require(`../../assets/${item?.image}`)}
                  alt={item.name}
                  className="skill-image"
                />
              </div>
            )}
            <p>{item?.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
