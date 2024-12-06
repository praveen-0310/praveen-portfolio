import React from "react";
import { PiCertificateFill } from "react-icons/pi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./certification.css";

export default function Certification() {
  return (
    <div className="main-view mt-10">
      <h2 className="flex text-2xl font-bold">Certification</h2>
      <div className="certificate-content-view mt-5">
        {[
          {
            link: "https://www.mygreatlearning.com/certificate/HRNTOYQG",
            title: "React Native",
          },
          {
            link: "https://www.mygreatlearning.com/certificate/HRNTOYQG",
            title: "Android App Development",
          },
          {
            link: "https://www.udemy.com/certificate/UC-424460d6-93f2-451b-a056-c4b3a2b762e6/",
            title: "Web Development Bootcamp",
          },
          {
            link: "https://www.skillrack.com/cert/141830/DRQ",
            title: "SQL",
          },
          {
            link: "https://www.skillrack.com/cert/141830/DRQ",
            title: "C Programming",
          },
          {
            link: "https://www.skillrack.com/cert/223569/IDY",
            title: "Skillrack Programming Challenge Medals",
          },
          {
            link: "https://www.skillrack.com/cert/144349/IVG",
            title: "Java Programming Basics",
          },
          {
            link: "https://www.skillrack.com/cert/163382/DNZ",
            title: "Python Programming Basics",
          },
          {
            link: "https://www.udemy.com/certificate/UC-7b8517bb-8ab8-4bcd-ba6e-d9094769b41a/",
            title: "Flutter & Firebase Chat App",
          },
          {
            link: "https://www.skillrack.com/cert/223570/HNT",
            title: "Skillrack Daily Challenge Medals",
          },
        ].map((certificate, index) => (
          <CertificateCard
            key={index}
            link={certificate.link}
            title={certificate.title}
          />
        ))}
      </div>
    </div>
  );
}

function CertificateCard({ link, title }: { link: string; title: string }) {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the element is visible
  });

  return (
    <motion.a
      className="ach-card-view"
      href={link}
      target="_blank"
      rel="noreferrer"
      ref={ref}
      animate={inView ? { scale: 1 } : { scale: 0.5 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <PiCertificateFill size={25} color={"#d2c439"} />
      <p>{title}</p>
    </motion.a>
  );
}
