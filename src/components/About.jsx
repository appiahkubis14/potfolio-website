import React, { useEffect } from "react";
import KNUSTLogo from "../assets/images/KNUSTLogo.webp";
import BasicPlanSvg from "../assets/images/svg/basic-plain.svg";
import StandardPlanSvg from "../assets/images/svg/strandard-plan.svg";
import GoldPlanSvg from "../assets/images/svg/gold-plan.svg";
import ColanIcon from "../assets/images/svg/colan-icon.svg";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../components/technicalSkills.css";


const AboutSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(
      ".fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down"
    );
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* ====================================== Section About ===================================== */}
      <section className="About-section jos" id="about">
        <div className="heading-container">
          <h2 className="section-heading-text about-me fade_up">About Me.</h2>
          <div className="line"></div>
        </div>
        <p className="section-sub-text about-sub-text zoom_in">
          With a strong foundation in software development and artificial
          intelligence, I specialize in designing robust software systems,
          developing intelligent algorithms, and integrating backend solutions
          using Python, TensorFlow, Django, and Node.js. I have successfully
          built scalable, data-driven applications and implemented advanced AI
          frameworks to solve real-world challenges. My expertise spans software
          engineering, computer vision, and machine learning, with a proven
          ability to deliver innovative and impactful solutions in both research
          and professional settings.
        </p>

        {/* Personal Details */}
        <div className="about-detail-main">
          <p className="about-detail">Name</p>
          <p className="about-detail-info">Samuel Appiah Kubi</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Nationality</p>
          <p className="about-detail-info">Ghanaian</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Phone</p>
          <p
            className="about-detail-info email"
            onClick="location.href='tel:+233593778113'"
          >
            (+233) 59 377 8113
          </p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Email</p>
          <p
            className="about-detail-info email"
            onClick="location.href='mailto:appiahksamuel21@gmail.com'"
          >
            appiahksamuel21@gmail.com
          </p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Experience</p>
          <p className="about-detail-info">4+ years</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Freelance</p>
          <p className="about-detail-info">Available</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Location</p>
          <p className="about-detail-info">Accra, Ghana</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Language</p>
          <p className="about-detail-info">English</p>
        </div>


        {/* Education Section */}
        <div className="about-detail-main">
          <p className="about-detail">Education</p>
          <div className="about-education-info">
            {/* <img src={KNUSTLogo} alt="KNUST-logo" className="education-logo" /> */}
            <p className="about-detail-info">
              Kwame Nkrumah University of Science and Technology (KNUST)
            </p>
            <p className="about-detail-info">Bachelor of Science (BS) in Geomatic Engineering</p>
            <p className="about-detail-info">Graduated with First Class Honours</p>
            <p className="about-detail-info">
              Relevant Coursework: Remote Sensing, GIS, Geodesy,
            </p>
            <p className="about-detail-info">
            Photogrammetry, Programming, Astronomy
            </p>
          </div>
        </div>

  
      </section>
      {/* ====================================== Section About End ===================================== */}
    </>
  );
};

export default AboutSection;
