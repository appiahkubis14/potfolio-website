import React, { useEffect, useRef, useState } from "react";

// import "../components/technicalSkills.css";

const Resume = () => {
  const colors = [
    "#BCE70C",
    "#FF759C",
    "#00CC97",
    "#FFDB59",
    "#6F39FD",
    "#FF7D61",
  ];
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
                <p className="bachelor">
                  Software Engineer - Full Stack Developer
                </p>
                <p className="cursus university">Afarinick Company Limited</p>
                <p className="cursus">
                  <ul>
                    <li>
                      • Developed scalable and dynamic websites using
                      JavaScript, Django, Python, and jQuery.
                    </li>
                    <li>
                      • Integrated AWS for cloud services and deployment to
                      enhance web performance and accessibility.
                    </li>
                    <li>
                      • Collaborated with teams to optimize user experience and
                      ensure responsive designs.
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
                  TRECK Innovation Challenge, Ghana
                </p>
                <p className="cursus">
                  <ul>
                    <li>
                      • Designed and developed a Pothole Detection and Reporting
                      mobile app using Flutter and Dart
                    </li>
                    <li>
                      • Integrated AI models for real-time and static image
                      pothole detection with location data.
                    </li>
                    <li>
                      • Implemented multimedia capture, geolocation features,
                      and seamless RESTful API integration for data reporting
                    </li>
                    <li>
                      • Ensured backend efficiency using Django and PostgreSQL,
                      delivering a scalable and innovative mobile solution.
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
                      • Designed and developed the GhIS-SS mobile app using
                      Flutter to streamline communication and resources for
                      surveyors.
                    </li>
                    <li>
                      • Integrated geolocation, real-time updates, and
                      user-friendly interfaces for enhanced usability.
                    </li>
                    <li>
                      • Leveraged backend services with Django for efficient
                      data management and secure user authentication.
                    </li>
                    <li>
                      • Ensured backend efficiency using Django and PostgreSQL,
                      delivering a scalable and innovative mobile solution.
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
                <p className="cursus university">
                  Joshop Construction Company, Kumasi, Ghana
                </p>
                <p className="cursus">
                  <ul>
                    <li>
                      • Collaborated on highway and urban road projects,
                      contributing to road planning, design, and analysis
                    </li>
                    <li>
                      • Utilized GIS software (QGIS, ArcGIS Pro) for spatial
                      analysis, mapping, and drafting.
                    </li>
                    <li>
                      • Conducted field surveys and assisted in preparing
                      engineering reports and presentations
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
                <p className="cursus university">
                  Galiano Gold Mines (Asanko Gold Ghana Limited)
                </p>
                <p className="cursus">
                  <ul>
                    <li>
                      • Conducted topographic and underground surveys using
                      Total Stations, GPS, and laser scanners
                    </li>
                    <li>
                      • Analyzed survey data using software like ArcGIS, QGIS,
                      and ArcMap
                    </li>
                    <li>
                      • Processed and analyzed survey data to create accurate
                      maps of mine sites.
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
      
      {/* <!-- ====================================== Section Coding Skill End ===================================== --> */}
      {/* <!-- ====================================== Section Award ===================================== --> */}
      
      {/* <!-- ====================================== Section Award End ===================================== --> */}
    </>
  );
};
export default Resume;
