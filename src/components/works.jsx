
import React, { useEffect, useRef, useState } from "react";
import flutter from "../assets/images/3.png";
import kotlin from "../assets/images/kotlin.png";
import po_fl_dj from "../assets/images/po_fl_dj.png";
import web_pack from "../assets/images/web_pack.webp";
import tote_dj from "../assets/images/tote_dj.png";
import arc_flutter from "../assets/images/arc_flutter.jpg";
import pothole from "../assets/images/pothole.png";
import vision from "../assets/images/vision.png";
import tensorflow from "../assets/images/4.png";
import ML from "../assets/images/ML.jpg";
import tableau from "../assets/images/tableau.jpg";
import PythonImg from "../assets/images/python.png"; // Replace with actual image path
import TableauImg from "../assets/images/TableauImg.png";
import OpenCVImg from "../assets/images/OpenCVImg.png";
import DjangoImg from "../assets/images/DjangoImg.png";
import QGISImg from "../assets/images/QGISImg.jpeg";
import GitImg from "../assets/images/GitImg.webp";
import DatabaseImg from "../assets/images/DatabaseImg.png";
import js from "../assets/images/js.png";
import arcgis from "../assets/images/arcgis.png";



const Works = () => {
    return (
        <section className="awards-section overflow-hidden" id="pricing">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Works
          </h2>
          <div className="line"></div>
        </div>
        <div className="row awards-row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={tensorflow}
                        alt="winner-award4"
                        style={{ width: "30%" }}
                      />
                      <p className="award-yer">2022</p>
                    </div>
                    <p className="award-interior">
                      Crop Detection and Counting
                    </p>
                    <p className="award-winner-text">
                      Python, OpenCV, TensorFlow, YOLOv8
                    </p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Implemented a computer vision application to detect and
                      count crops using image processing and YOLOv8. Automated
                      crop monitoring for better agricultural management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={flutter}
                        alt="winner-award4"
                        style={{ width: "20%" }}
                      />

                      <p className="award-yer">2025</p>
                    </div>
                    <p className="award-interior">GhISS-SS Mobile App</p>
                    <p className="award-winner-text">
                      Flutter (Frontend), Django (Backend), Firebase
                    </p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Developed a mobile application for the Ghana Institution
                      of Surveyors Students Society. Implemented features like
                      event calendars, news updates, and member communication.
                      Django backend manages user authentication and content
                      updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={kotlin}
                        alt="winner-award2"
                        style={{ width: "20%" }}
                      />
                      <p className="award-yer">2024</p>
                    </div>
                    <p className="award-interior">
                      Admin Manager App for Afarinick Company Limited
                    </p>
                    <p className="award-winner-text">Kotlin, Flutter</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Designed and developed a Kotlin-based admin management
                      application for Afarinick Company Limited. Enabled
                      seamless administrative control for managing staff and
                      resources. Integrated backend for real-time updates and
                      data synchronization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={web_pack}
                        alt="winner-award4"
                        style={{ width: "30%" }}
                      />
                      <p className="award-yer">2022</p>
                    </div>
                    <p className="award-interior">
                      Afarinick Company Limited Website
                    </p>
                    <p className="award-winner-text">
                      Python, Django (Backend), PostgreSQL, HTML/CSS (Frontend),
                      JavaScript
                    </p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Led the development of Afarinick’s company website for
                      their GIS and mapping services. Built and maintained a
                      robust Django backend with PostgreSQL integration for
                      efficient data handling and content storage.
                      <a
                        href="https://afarinick.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Website
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={tote_dj}
                        alt="winner-award4"
                        style={{ width: "30%" }}
                      />
                      <p className="award-yer">2022</p>
                    </div>
                    <p className="award-interior">
                      Tote Bag E-commerce Website
                    </p>
                    <p className="award-winner-text">
                      Django, UltrHOst Ghana, Paystack
                    </p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Designed and developed a feature-rich e-commerce website
                      specializing in tote bag sales. Integrated Paystack for
                      secure payments and AWS for scalable hosting. Used jQuery
                      for dynamic UI elements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={arc_flutter}
                        alt="winner-award4"
                        style={{ width: "30%" }}
                      />
                      <p className="award-yer">2022</p>
                    </div>
                    <p className="award-interior">Hospital Finder App</p>
                    <p className="award-winner-text">
                      ArcGIS Pro, Flutter (Frontend), Django (Backend)
                    </p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Created a hospital locator app with Django backend for
                      managing search queries and integrated Google Maps API for
                      real-time navigation to nearby hospitals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={vision}
                        alt="winner-award4"
                        style={{ width: "30%" }}
                      />
                      <p className="award-yer">2022</p>
                    </div>
                    <p className="award-interior">
                      Pothole Detection and Report App
                    </p>
                    <p className="award-winner-text">
                      Python, Flutter (Frontend), Django (Backend), YOLOv8
                      (Computer Vision)
                    </p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Developed a pothole detection app using YOLOv8 for
                      real-time detection. Django backend processes and stores
                      user-submitted data, including pothole dimensions and
                      locations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={ML}
                        alt="winner-award4"
                        style={{ width: "30%" }}
                      />
                      <p className="award-yer">2022</p>
                    </div>
                    <p className="award-interior">
                      Sales Prediction with Machine Learning
                    </p>
                    <p className="award-winner-text">
                      Python, scikit-learn, Pandas, NumPy
                    </p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Developed a machine learning model to predict sales for a
                      retail company using historical sales data and various
                      machine learning algorithms.
                      {/* <a href="Github_Link_2" target="_blank" rel="noopener noreferrer">Github Link</a> */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={tableau}
                        alt="winner-award4"
                        style={{ width: "45%" }}
                      />
                      <p className="award-yer">2022</p>
                    </div>
                    <p className="award-interior">
                      Tableau Retail Sales Dashboard
                    </p>
                    <p className="award-winner-text">Tableau, SQL, Excel</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Created interactive dashboards using Tableau to visualize
                      retail sales data, providing insights into sales trends,
                      product performance, and customer behavior. This enabled
                      data-driven decision-making through comprehensive data
                      analysis and visualization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={po_fl_dj}
                        alt="winner-award3"
                        style={{ width: "30%" }}
                      />
                      <p className="award-yer">2023</p>
                    </div>
                    <p className="award-interior">
                      QR Code Scanner App for Afarinick Company Limited
                    </p>
                    <p className="award-winner-text">
                      Flutter (Frontend), Django (Backend), PostgreSQL
                    </p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Built a QR Code Scanner application to verify member
                      details and inventory assets. Enabled quick database
                      queries for user ID and asset ID validation. Ensured
                      efficient data verification and management for the
                      company’s operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};
 export default Works;

