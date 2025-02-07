import React from "react";
import BasicPlanSvg from "../assets/images/knust.jpg";
import StandardPlanSvg from "../assets/images/svg/strandard-plan.svg";
import GoldPlanSvg from "../assets/images/svg/gold-plan.svg";
import ColanIcon from "../assets/images/svg/colan-icon.svg";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const Pricing = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      {/* <!-- ====================================== Section Pricing ===================================== --> */}
      <section className="Pricing-section" id="pricing">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Education.
          </h2>
          <div className="line"></div>
        </div>
        <div className="pricing-section-main zoom_in">
          <div className="basic-plain-box-main">
            <div className="basic-plain-box">
              <img src={BasicPlanSvg} alt="education-icon" style={{borderRadius: "10px", width: "100%",height: "100%"}}/>
              <p className="basic-plain-text">Academic Background</p>
            </div>
            <div className="basic-plain-box-sub">
              <p className="mon">KNUST</p>
            </div>
          </div>
          <div className="development-box">
            <div>
              <h3 className="pricing-plaines-name">
                Bachelor of Science (BS) in Geomatic Engineering
              </h3>
              <h3 className="pricing-plaines-name">
                Graduated with First Class Honours
              </h3>
              <h3 className="pricing-plaines-name">Remote Sensing</h3>
              <h3 className="pricing-plaines-name">GIS & Geodesy</h3>
              <h3 className="pricing-plaines-name">
                Photogrammetry & Astronomy
              </h3>
              <h3 className="pricing-plaines-name">Programming</h3>
            </div>
            <div className="choose-plain-btn-main">
              <div className="wrapper">
                <a className="btn-hover" href="https://www.knust.edu.gh/">
                KNUST
                  
                </a>
              </div>
              <p className="taxes">Relevant coursework and skills acquired</p>
              <h3 className="pricing-plaines-name">Software Development</h3>
              <h3 className="pricing-plaines-name">GIS Analyst</h3>
              <h3 className="pricing-plaines-name">Data Analyst</h3>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ====================================== Section Pricing End ===================================== --> */}
      {/* <!-- ====================================== Section Testimonials ===================================== --> */}
      {/* <section className="testimonials-section">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Testimonials.
          </h2>
          <div className="line"></div>
        </div>
        <p className="testament fade_up">
          Their words are a testament to our commitment to excellence and our
          ability to bring their visions to life. Read on to see how we've made
          a lasting impact on their brands and projects.
        </p>

        <Slider className="Testimonials" {...settings}>
          <div>
            <div className="colan-icon-img-main">
              <img src={ColanIcon} alt="colan-icon" />
            </div>
            <p className="avix">
              Thanks to Avix's game-changing website design and development, our
              online presence has reached new heights. Our website has never
              looked better. Avix presence with their outstanding. development
              team took our and turned.
            </p>
            <p className="client-name">Olivia Segio</p>
            <p className="kello">Oria Studio</p>
          </div>
          <div>
            <div className="colan-icon-img-main">
              <img src={ColanIcon} alt="colan-icon" />
            </div>
            <p className="avix">
              Auxa has been a game-changer for our online presence. Their
              website design and development team took our vision and turned it
              into a stunning reality. The results speak for themselves - our
              website has never looked better.
            </p>
            <p className="client-name">Marilina Harless</p>
            <p className="kello">Kello Auxa</p>
          </div>
          <div>
            <div className="colan-icon-img-main">
              <img src={ColanIcon} alt="colan-icon" />
            </div>
            <p className="avix">
              Thanks to Avix's game-changing website design and development, our
              online presence has reached new heights. Our website has never
              looked better. Avix presence with their outstanding. development
              team took our and turned.
            </p>
            <p className="client-name">Olivia Segio</p>
            <p className="kello">Oria Studio</p>
          </div>
          <div>
            <div className="colan-icon-img-main">
              <img src={ColanIcon} alt="colan-icon" />
            </div>
            <p className="avix">
              Auxa has been a game-changer for our online presence. Their
              website design and development team took our vision and turned it
              into a stunning reality. The results speak for themselves - our
              website has never looked better.
            </p>
            <p className="client-name">Marilina Harless</p>
            <p className="kello">Kello Auxa</p>
          </div>
        </Slider>
      </section> */}
      {/* <!-- ====================================== Section Testimonials ===================================== --> */}
    </>
  );
};
export default Pricing;
