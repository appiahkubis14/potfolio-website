import React, { useEffect, useRef, useState } from "react";
import FigmaImg from "../assets/images/figma-img.png";
import PhotoShopImg from "../assets/images/photoshop-img.png";
import AdobeImg from "../assets/images/adobe-xd-img.png";
import SketchImg from "../assets/images/sktech-img.png";
import InvisionImg from "../assets/images/invision-img.png";
import WinnerAward from "../assets/images/winner-award.png";
import WinnerAward2 from "../assets/images/winner-award2.png";
import WinnerAward3 from "../assets/images/winner-award3.png";
import WinnerAward4 from "../assets/images/winner-award4.png";
import flutter from "../assets/images/3.png";
import kotlin from "../assets/images/kotlin.png";
import po_fl_dj from "../assets/images/po_fl_dj.png"
import web_pack from "../assets/images/web_pack.webp"
import tote_dj from "../assets/images/tote_dj.png"
import arc_flutter from "../assets/images/arc_flutter.jpg"
import pothole from "../assets/images/pothole.png"
import vision from "../assets/images/vision.png"
import tensorflow from "../assets/images/4.png"
import ML from "../assets/images/ML.jpg"
import tableau from "../assets/images/tableau.jpg"
import PythonImg from "../assets/images/python.png"; // Replace with actual image path
import TableauImg from "../assets/images/TableauImg.png";
import OpenCVImg from "../assets/images/OpenCVImg.png";
import DjangoImg from "../assets/images/DjangoImg.png";
import QGISImg from "../assets/images/QGISImg.jpeg";
import GitImg from "../assets/images/GitImg.webp";
import DatabaseImg from "../assets/images/DatabaseImg.png";
import js from "../assets/images/js.png";
import arcgis from "../assets/images/arcgis.webp";
import '../components/technicalSkills.css';


const Resume = () => {
  const colors = [
    "#BCE70C",
    "#FF759C",
    "#00CC97",
    "#FFDB59",
    "#6F39FD",
    "#FF7D61",
  ];


  
  // const progressRef = useRef(null);
  // const hasAnimated = useRef(false); // Track if the animation has already run

  // useEffect(() => {
  //   const progressSection = progressRef.current;
  //   const items = progressSection.querySelectorAll(".progress-item");
  //   const observerOptions = { threshold: 0.1 };

  //   function handleIntersection(entries, observer) {
  //     if (entries[0].isIntersecting && !hasAnimated.current) {
  //       items.forEach((item, index) => {
  //         let num = parseInt(item.dataset.num);
  //         let count = 0;
  //         let color = colors[index % colors.length];
  //         let interval = setInterval(() => {
  //           if (count === num) {
  //             clearInterval(interval);
  //           } else {
  //             count++;
  //             item.style.background = `conic-gradient(${color} ${count}%, #80808047 0deg)`;
  //             item.setAttribute("data-value", `${count}%`);
  //             item.innerHTML = `${count}%`;
  //           }
  //         }, 15);
  //       });
  //       observer.unobserve(progressSection);
  //       hasAnimated.current = true; // Mark that the animation has run
  //     }
  //   }

  //   const observer = new IntersectionObserver(
  //     handleIntersection,
  //     observerOptions
  //   );
  //   observer.observe(progressSection);

  //   return () => observer.disconnect();
  // }, [colors]);

  const skills = [
    { id: 1, img: PythonImg, label: "Python, R, MATLAB", percentage: 95 },
    { id: 2, img: TableauImg, label: "Data Visualization", percentage: 90 },
    { id: 3, img: OpenCVImg, label: "Computer Vision", percentage: 88 },
    { id: 4, img: DjangoImg, label: "Dart, Flutter, Django", percentage: 92 },
    { id: 5, img: QGISImg, label: "QGIS, ArcGIS Pro", percentage: 96 },
    { id: 6, img: GitImg, label: "Git, VSCode", percentage: 85 },
    { id: 7, img: DatabaseImg, label: "PostgreSQL, MySQL", percentage: 90 },
    { id: 8, img: js, label: "Javascript,JQuery", percentage: 90 },
    { id: 9, img: arcgis, label: "ArcGIS Pro", percentage: 90 },
  ];
  
  const [skillLevels, setSkillLevels] = useState(
    skills.map((skill) => ({ id: skill.id, currentPercentage: 0 }))
  );

useEffect(() => {
  skillLevels.forEach((_, index) => {
    const interval = setInterval(() => {
      setSkillLevels((prevLevels) =>
        prevLevels.map((level) =>
          level.id === skills[index].id && level.currentPercentage < skills[index].percentage
            ? { ...level, currentPercentage: level.currentPercentage + 1 }
            : level
        )
      );
    }, 20);

    // Cleanup intervals on unmount
    return () => clearInterval(interval);
  });
}, []);

  return (
    <>
      {/* <!-- ====================================== Section Education Experience ===================================== --> */}
      <section className="education-experience" id="resume">
        <div className="row">
          <div className="col-xxl-6 col-lg-6">
            <div className="heading-container">
              <h2 className="section-heading-text about-me fade_up">
                Professional
              </h2>
              <div className="line"></div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Software Engineer - Full Stack Developer</p>
                <p className="cursus university">
                  Afarinick Company Limited
                </p>
                <p className="cursus">
                  <ul>
                    <li>• Developed scalable and dynamic websites using JavaScript, Django,
                          Python, and jQuery.</li>
                    <li>
                      • Integrated AWS for cloud services and deployment to enhance web
                        performance and accessibility.
                    </li>
                    <li>• Collaborated with teams to optimize user experience and ensure responsive designs.</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Software Engineer-Mobile Developer</p>
                <p className="cursus university">
                  TRECK Innovation Challenge, Ghana
                </p>
                <p className="cursus">
                  <ul>
                    <li>
                      • Designed and developed a Pothole Detection and Reporting mobile
                        app using Flutter and Dart
                    </li>
                    <li>
                      • Integrated AI models for real-time and static image pothole detection with location data.
                    </li>
                    <li>
                      • Implemented multimedia capture, geolocation features, and seamless RESTful API integration for data reporting
                    </li>
                    <li>
                      • Ensured backend efficiency using Django and PostgreSQL, delivering a scalable and innovative mobile solution.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Software Engineer-Mobile Developer</p>
                <p className="cursus university">
                  • Ghana Institution of Surveyors Students Society - GhIS-SS
                </p>
                <p className="cursus">
                  <ul>
                    <li>
                      • Designed and developed the GhIS-SS mobile app using Flutter to
                        streamline communication and resources for surveyors.
                    </li>
                    <li>
                      • Integrated geolocation, real-time updates, and user-friendly interfaces for enhanced usability.
                    </li>
                    <li>
                      • Leveraged backend services with Django for efficient data management and secure user authentication.
                    </li>
                    <li>
                      • Ensured backend efficiency using Django and PostgreSQL, delivering a scalable and innovative mobile solution.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-lg-6">
            <div className="heading-container">
              <h2 className="section-heading-text about-me fade_up">
                Experience.
              </h2>
              <div className="line"></div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Assistant Highway Engineer (Intern)</p>
                <p className="cursus university">Joshop Construction Company, Kumasi, Ghana</p>
                <p className="cursus">
                  <ul>
                    <li>
                      • Collaborated on highway and urban road projects, contributing to
                        road planning, design, and analysis
                    </li>
                    <li>
                      • Utilized GIS software (QGIS, ArcGIS Pro) for spatial analysis, mapping, and drafting.
                    </li>
                    <li>
                      • Conducted field surveys and assisted in preparing engineering reports and presentations
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Assistant Mine Surveyor (Intern)</p>
                <p className="cursus university">Galiano Gold Mines (Asanko Gold Ghana Limited)</p>
                <p className="cursus">
                  <ul>
                    <li>
                      • Conducted topographic and underground surveys using Total Stations, GPS, and laser scanners
                    </li>
                    <li>
                      • Analyzed survey data using software like ArcGIS, QGIS, and ArcMap
                    </li>
                    <li>
                      • Processed and analyzed survey data to create accurate maps of mine
                      sites.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            {/* <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">JUNIOR DESIGN & DEVELOPMENT</p>
                <p className="cursus university">Twitter / 2018 - 2019</p>
                <p className="cursus">
                  Aliquet at interdum pellentesque non fringilla eget orci
                  suspendisse. A iaculis augue vitae ultricies fusce sit dolor
                  gravida .
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Education Experience End ===================================== --> */}
      {/* <!-- ====================================== Section Coding Skill ===================================== --> */}
      {/* <section className="coding-skill-section">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Coding Skills.
          </h2>
          <div className="line"></div>
        </div>
        <div id="progress" ref={progressRef}>
          <div data-num="98" className="progress-item fade_up">
            Python Programming
          </div>
          <div data-num="95" className="progress-item fade_up">
            Django Framework
          </div>
          <div data-num="92" className="progress-item fade_up">
            Flutter Development
          </div>
          <div data-num="90" className="progress-item fade_up">
            React Development
          </div>
          <div data-num="88" className="progress-item fade_up">
            TensorFlow & AI
          </div>
          <div data-num="93" className="progress-item fade_up">
            GIS Scripting (QGIS & ArcGIS)
          </div>
        </div>
      </section> */}

      {/* <!-- ====================================== Section Coding Skill End ===================================== --> */}
      {/* <!-- ====================================== Section Design Skill ===================================== --> */}
      <section className="technical-skill-section">
      <div className="heading-container">
        <h2 className="section-heading-text technical-skill-text fade_up">
          Technical Skills.
        </h2>
        <div className="line"></div>
      </div>
      <div className="technical-skill-sub-section">
        {skills.map((skill) => {
          const currentLevel = skillLevels.find((level) => level.id === skill.id)?.currentPercentage || 0;

          return (
            <div key={skill.id} className="technical-skills-img-main flip_up">
              <img src={skill.img} alt={`${skill.label.toLowerCase().replace(/ /g, "-")}-img`} />
              <div className="skill-counter-main">
                {/* <p className="skill-percentage">{currentLevel}%</p> */}
                <p style={{ color: skill.color , fontWeight: "bold", fontSize: "20px"}}>{skill.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
      {/* <!-- ====================================== Section Coding Skill End ===================================== --> */}
      {/* <!-- ====================================== Section Award ===================================== --> */}
      <section className="awards-section overflow-hidden">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Projects
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
                    <p className="award-interior">Crop Detection and Counting</p>
                    <p className="award-winner-text">Python, OpenCV, TensorFlow, YOLOv8</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Implemented a computer vision application to detect and count crops using image processing and YOLOv8. Automated crop monitoring for better agricultural management.
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
                        style={{ width: '20%' }}
                      />

                      <p className="award-yer">2025</p>
                    </div>
                    <p className="award-interior">GhISS-SS Mobile App</p>
                    <p className="award-winner-text">Flutter (Frontend), Django (Backend), Firebase</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Developed a mobile application for the Ghana Institution of Surveyors Students Society. Implemented features like event calendars, news updates, and member communication. Django backend manages user authentication and content updates.
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
                        style={{ width: '20%' }}
                      />
                      <p className="award-yer">2024</p>
                    </div>
                    <p className="award-interior">Admin Manager App for Afarinick Company Limited</p>
                    <p className="award-winner-text">Kotlin, Flutter</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Designed and developed a Kotlin-based admin management application for Afarinick Company Limited. Enabled seamless administrative control for managing staff and resources. Integrated backend for real-time updates and data synchronization.
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
                        style={{ width: '30%' }}
                      />
                      <p className="award-yer">2022</p>
                    </div>
                    <p className="award-interior">Afarinick Company Limited Website</p>
                    <p className="award-winner-text">Python, Django (Backend), PostgreSQL, HTML/CSS (Frontend), JavaScript</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Led the development of Afarinick’s company website for their GIS and mapping services. Built and maintained a robust Django backend with PostgreSQL integration for efficient data handling and content storage.
                      <a href="https://afarinick.com" target="_blank" rel="noopener noreferrer">View Website</a>
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
                    <p className="award-interior">Tote Bag E-commerce Website</p>
                    <p className="award-winner-text">Django, UltrHOst Ghana, Paystack</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Designed and developed a feature-rich e-commerce website specializing in tote bag sales. Integrated Paystack for secure payments and AWS for scalable hosting. Used jQuery for dynamic UI elements.
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
                    <p className="award-winner-text">ArcGIS Pro, Flutter (Frontend), Django (Backend)</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Created a hospital locator app with Django backend for managing search queries and integrated Google Maps API for real-time navigation to nearby hospitals.
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
                    <p className="award-interior">Pothole Detection and Report App</p>
                    <p className="award-winner-text">Python, Flutter (Frontend), Django (Backend), YOLOv8 (Computer Vision)</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Developed a pothole detection app using YOLOv8 for real-time detection. Django backend processes and stores user-submitted data, including pothole dimensions and locations.
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
                    <p className="award-interior">Sales Prediction with Machine Learning</p>
                    <p className="award-winner-text">Python, scikit-learn, Pandas, NumPy</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Developed a machine learning model to predict sales for a retail company using historical sales data and various machine learning algorithms.
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
                        style={{width:"45%"}}
                      />
                      <p className="award-yer">2022</p>
                    </div>
                    <p className="award-interior">Tableau Retail Sales Dashboard</p>
                    <p className="award-winner-text">Tableau, SQL, Excel</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Created interactive dashboards using Tableau to visualize retail sales data, providing insights into sales trends, product performance, and customer behavior. This enabled data-driven decision-making through comprehensive data analysis and visualization.
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
                        style={{ width: '30%' }}
                      />
                      <p className="award-yer">2023</p>
                    </div>
                    <p className="award-interior">QR Code Scanner App for Afarinick Company Limited</p>
                    <p className="award-winner-text">Flutter (Frontend), Django (Backend), PostgreSQL</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                      Built a QR Code Scanner application to verify member details and inventory assets. Enabled quick database queries for user ID and asset ID validation. Ensured efficient data verification and management for the company’s operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      {/* <!-- ====================================== Section Award End ===================================== --> */}
    </>
  );
};
export default Resume;
