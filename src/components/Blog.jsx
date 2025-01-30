import React from "react";

const Blog = () => {
  return (
    <>
      {/* <!-- ====================================== Section Blogs ===================================== --> */}
      <section className="blog-section" id="blog">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
          Leadership & Engagement
          </h2>
          <div className="line"></div>
        </div>

        {/* Conference and Presentation */}
        <div className="blog-main zoom_in">
          <div className="blog-img-section">
            <p className="blog-date">
              20<span>JAN</span>
            </p>
          </div>
          <div>
            <h3 className="post-date">20 January 2025 | Conference & Presentation</h3>
            <h4 className="steps">
              Invited Speaker and Poster Presenter at Young Surveyors Conference
            </h4>
            <h5 className="est">
              Technologies: Flutter (Frontend), Django (Backend), Firebase
            </h5>
            <h5 className="est">
              • Delivered a talk and poster presentation showcasing the development and functionalities of the GhIS-SS Mobile App for both Android and iOS platforms.
              <br />
              • Demonstrated how the app supports the Ghana Institution of Surveyors Students Society by integrating event calendars, news updates, and member communication tools.
              <br />
              • Launched the app to attendees at the conference.
            </h5>
            <div className="wrapper blog-btn">
              <a className="btn-hover" href="#blog-popup">
                Read More
                <svg
                  className="btn-arrow-right"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M21.5621 14.6665L14.4101 7.51452L16.2957 5.62891L26.6666 15.9999L16.2957 26.3707L14.4101 24.4851L21.5621 17.3332H5.33331V14.6665H21.5621Z"
                    fill="#0F141C"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Teaching Experience */}
        <div className="blog-main zoom_in">
          <div className="blog-img-section blog-img-section2">
            <p className="blog-date">
              15<span>FEB</span>
            </p>
          </div>
          <div>
            <h3 className="post-date">15 February 2025 | Teaching Experience</h3>
            <h4 className="steps">
              Peer Tutor and Motivator
            </h4>
            <h5 className="est">
              • Demonstrated strong learning abilities by quickly mastering complex concepts and sharing this knowledge with peers.
              <br />
              • Organized and led study sessions for classmates, coursemates, and other schoolmates to simplify challenging topics, enabling them to better understand and succeed academically.
              <br />
              • Created and facilitated study groups to address difficult coursework, fostering collaborative learning environments.
              <br />
              • Provided personalized support to students struggling with specific subjects, breaking down concepts into easily digestible parts.
            </h5>
            <div className="wrapper blog-btn">
              <a className="btn-hover" href="#blog-popup">
                Read More
                <svg
                  className="btn-arrow-right"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M21.5621 14.6665L14.4101 7.51452L16.2957 5.62891L26.6666 15.9999L16.2957 26.3707L14.4101 24.4851L21.5621 17.3332H5.33331V14.6665H21.5621Z"
                    fill="#0F141C"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Leadership Experience */}
        <div className="blog-main mb-0 zoom_in">
          <div className="blog-img-section blog-img-section3">
            <p className="blog-date">
              10<span>MAR</span>
            </p>
          </div>
          <div>
            <h3 className="post-date">10 March 2025 | Leadership Experience</h3>
            <h4 className="steps">
              Judicial Committee Member, GhIS-SS
            </h4>
            <h5 className="est">
              • Serve on the Judicial Committee, overseeing the enforcement of the Ghana Institution of Surveyors Students Society (GhIS-SS) constitution and regulations.
              <br />
              • Collaborate with other committee members to resolve internal disputes and maintain a fair and transparent system for addressing member grievances.
              <br />
              • Contribute to the creation and revision of society policies, ensuring they align with current ethical and professional standards in the surveying industry.
              <br />
              • Conduct disciplinary hearings when necessary, ensuring due process and impartial judgment.
            </h5>
            <div className="wrapper blog-btn">
              <a className="btn-hover" href="#blog-popup">
                Read More
                <svg
                  className="btn-arrow-right"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M21.5621 14.6665L14.4101 7.51452L16.2957 5.62891L26.6666 15.9999L16.2957 26.3707L14.4101 24.4851L21.5621 17.3332H5.33331V14.6665H21.5621Z"
                    fill="#0F141C"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </section>
      {/* <!-- ====================================== Section Blogs End ===================================== --> */}
    </>
  );
};

export default Blog;
