import React from "react";

const Blog = () => {
  return (
    <>
      {/* <!-- ====================================== Section Blogs ===================================== --> */}
      <section className="blog-section" id="blog">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Blogs.
          </h2>
          <div className="line"></div>
        </div>
        <div className="blog-main zoom_in">
          <div className="blog-img-section">
            <p className="blog-date">
              20<span>APR</span>
            </p>
          </div>
          <div>
            <h3 className="post-date">20 April 2025 | web development</h3>
            <h4 className="steps">
              Become a Frontend Developer in 5 Simple Steps
            </h4>
            <h5 className="est">
              Est a quis ipsum et arcu. Sit eros leo enim sed vivamus. Nulla et
              eget commodo mus suspendisse imperdiet. Rhoncus commodo duis nulla
              habitasse viverra turpis metus in. Tellus nam vivamus et in
              commodo bibendum.
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
        <div className="blog-main zoom_in">
          <div className="blog-img-section blog-img-section2">
            <p className="blog-date">
              15<span>APR</span>
            </p>
          </div>
          <div>
            <h3 className="post-date">15 April 2025 | GRAPHIC DESIGN</h3>
            <h4 className="steps">
              11 Best Logo Design Online & Offline Courses
            </h4>
            <h5 className="est">
              Lectus neque aliquet faucibus diam neque sapien rhoncus morbi
              viverra. Sed lorem a eget nisi porttitor augue. Aenean consectetur
              tristique quisque risus. Aliquet posuere quis pellentesque id eget
              nisi Ornare.
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
        <div className="blog-main mb-0 zoom_in">
          <div className="blog-img-section blog-img-section3">
            <p className="blog-date">
              10<span>APR</span>
            </p>
          </div>
          <div>
            <h3 className="post-date">10 April 2025 | SEO</h3>
            <h4 className="steps">
              10 Content Proofreading Tips to Catch More
            </h4>
            <h5 className="est">
              Habitasse gravida vestibulum egestas dis quis mauris ut nulla
              quam. Ultrices ac tincidunt mattis odio. Est morbi non posuere
              elementum luctus massa duis consectetur duis. Convallis sit hac
              suspendisse mattis sit.
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
