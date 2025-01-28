import React from "react";
import UiUxSvg from "../assets/images/svg/ui-ux.svg";
import DownArrow from "../assets/images/svg/down-arrow.svg";
import VisualBranding from "../assets/images/svg/visual-branding.svg";
import WebDevelopement from "../assets/images/svg/web-development.svg";
import AppDevelopement from "../assets/images/svg/app-development.svg";
import GalleryImg2 from "../assets/images/gallery/gallery-img2.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      {/* <!-- ====================================== Section Services ===================================== --> */}
      <section className="Services-section" id="services">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Services.
          </h2>
          <div className="line"></div>
        </div>
        <h3 className="services-product-text fade_up">
          BUILDING DIGITAL SOLUTIONS WITH BETTER EXPERIENCES
        </h3>
        <p className="visoion-text fade_up">
          My vision is to be a trailblazer in software development, geospatial analysis,
          and data science, recognized for delivering innovative, impactful, and scalable solutions.
        </p>
        <div className="row services-row">
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 services-column fade_up">
            <Link to="#services-popup">
              <div className="services-img">
                <img src={WebDevelopement} alt="ui-ux" />
              </div>
              <p className="services-text">WEB DEVELOPMENT</p>
              <p className="molestie">
                I specialize in developing dynamic, responsive, and user-friendly web applications using modern frameworks like React, Django, and Node.js. My goal is to create seamless user experiences tailored to your needs.
              </p>
              {/* <img className="down-arrow-svg" src={DownArrow} alt="down-arrow" /> */}
            </Link>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 services-column fade_up">
            <Link to="#services-popup">
              <div className="services-img services-img2">
                <img src={AppDevelopement} alt="visual-branding" />
              </div>
              <p className="services-text services-text2">MOBILE APP DEVELOPMENT</p>
              <p className="molestie">
                I develop cross-platform mobile apps using Flutter, incorporating features like AI integration, real-time updates, and intuitive interfaces to enhance user engagement and functionality.
              </p>
              {/* <img className="down-arrow-svg" src={DownArrow} alt="down-arrow" /> */}
            </Link>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 services-column fade_up">
            <Link to="#services-popup">
              <div className="services-img services-img3">
                <img src={VisualBranding } alt="web-development" />
              </div>
              <p className="services-text services-text3">GIS ANALYSIS</p>
              <p className="molestie">
                I provide advanced geospatial analysis and mapping solutions, integrating tools like QGIS, ArcGIS Pro, and web GIS platforms to deliver actionable insights and interactive visualizations.
              </p>
              {/* <img className="down-arrow-svg" src={DownArrow} alt="down-arrow" /> */}
            </Link>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 services-column fade_up">
            <Link to="#services-popup">
              <div className="services-img services-img4">
                <img src={UiUxSvg} alt="app-development" />
              </div>
              <p className="services-text services-text4">DATA SCIENCE</p>
              <p className="molestie">
                I analyze complex datasets, create predictive models, and build impactful visualizations using Python, TensorFlow, and Tableau, empowering businesses with data-driven decisions.
              </p>
              {/* <img className="down-arrow-svg" src={DownArrow} alt="down-arrow" /> */}
            </Link>
          </div>
        </div>
      </section>

      {/* <!-- ====================================== Section Services End ===================================== --> */}
      {/* <!-- ====================================== Section Services Pop Up ===================================== --> */}
      <div id="services-popup" className="popup-container">
        <div className="popup-content popup-content2">
          <Link to="#" className="close">
            &times;
          </Link>
          <h2 className="simple-steps">My Services</h2>
          <img
            className="blog-popup-img1"
            src={GalleryImg2} // Replace with an appropriate image showcasing your services
            alt="services-image"
          />
          <p className="blog-sit-text">
            I offer a range of professional services leveraging my expertise in software engineering, GIS analysis, and data science. My goal is to deliver innovative solutions tailored to meet your business needs, ensuring efficiency and scalability.
          </p>

          <h2 className="simple-steps services-popup-text">Software Engineer - Web Developer</h2>
          <p className="blog-sit-text">
            With a strong background in web development, I specialize in creating responsive and visually appealing websites and applications using modern frameworks like React, Django, and Node.js. From frontend design to backend development, I deliver seamless user experiences tailored to your goals.
          </p>

          <h2 className="simple-steps services-popup-text">Software Engineer - Mobile App Developer</h2>
          <p className="blog-sit-text">
            I develop intuitive mobile applications for both Android and iOS platforms using Flutter. My expertise includes crafting apps with AI integrations, real-time data processing, and user-friendly interfaces to enhance engagement and usability.
          </p>

          <h2 className="simple-steps services-popup-text">GIS Analyst</h2>
          <p className="blog-sit-text">
            As a GIS Analyst, I provide spatial data analysis, mapping, and geospatial solutions to support decision-making. My services include creating 2D/3D maps, geospatial modeling, and integrating GIS tools into web and mobile applications for enhanced visualization.
          </p>

          <h2 className="simple-steps services-popup-text">Data Science Analyst</h2>
          <p className="blog-sit-text">
            I specialize in data analysis, visualization, and predictive modeling. Using tools like Python, TensorFlow, and Tableau, I help uncover insights from complex datasets, enabling data-driven strategies for your business growth.
          </p>
        </div>
      </div>

      {/* <!-- ====================================== Services PopUp End ===================================== --> */}
    </>
  );
};
export default Services;
