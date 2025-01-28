import React, { useState, useEffect } from "react";

import ContentSvg from "../assets/images/svg/content-svg.svg";
import ContentImg from "../assets/images/content-img.png";
import YoutubeVideoImg from "../assets/images/youtube-video-img.png";
import YoutubeSvg from "../assets/images/svg/youtube-svg.svg";
import VimeoVideoImg from "../assets/images/vimeo-video-img.png";
import VimeoSvg from "../assets/images/svg/vimeo-svg.svg";
import SoundCloudImg from "../assets/images/sound-cloud-img.png";
import SoundCloudSvg from "../assets/images/svg/sound-cloud.svg";
import GalleryImg from "../assets/images/gallery-img.png";
import GallerySvg from "../assets/images/svg/gallery-svg.svg";
import ContentImg2 from "../assets/images/content-img2.png";
import YouTubeModal from "./YouTubeVideo";
import VimeoModal from "./VimeoModal";
import SoundCloudModal from "./SoundCloudVideo";

import $ from "jquery";

import Galleryimg1 from "../assets/images/gallery/gallery-img1.jpg";
import Galleryimg2 from "../assets/images/gallery/gallery-img2.jpg";
import Galleryimg3 from "../assets/images/gallery/gallery-img3.jpg";
import Galleryimg4 from "../assets/images/gallery/gallery-img4.jpg";
import Galleryimg5 from "../assets/images/gallery/gallery-img5.jpg";
import Galleryimg6 from "../assets/images/gallery/gallery-img6.jpg";
import Galleryimg7 from "../assets/images/gallery/gallery-img7.jpg";
import Galleryimg8 from "../assets/images/gallery/gallery-img8.jpg";

import Fancybox from "./FancyBox";
import Popup from "./PopUp";
import { Link } from "react-router-dom";

const Portfolio = () => {

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePopupOpen = (e) => {
    e.preventDefault();
    setIsPopupVisible(true);
  };

  const handlePopupClose = (e) => {
    e.preventDefault();
    setIsPopupVisible(false);
  };

  // Vimeo Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Youtube Modal
  const [isModalOpenYoutube, setisModalOpenYoutube] = useState(false);

  const handleOpenModalYoutube = () => {
    setisModalOpenYoutube(true);
  };

  const handleCloseModalYoutube = () => {
    setisModalOpenYoutube(false);
  };

  // Soundcloud Modal
  const [isModalOpenSound, setIsModalOpenSound] = useState(false);

  const handleOpenModalSound = () => {
    setIsModalOpenSound(true);
  };

  const handleCloseModalSound = () => {
    setIsModalOpenSound(false);
  };

  useEffect(() => {
    // Function to initialize fancybox for the gallery

    // Event listener to toggle 'full' class on image click
    const handleImageClick = (event) => {
      event.target.classList.toggle("full");
    };

    // Attach click event to gallery images
    const galleryLinks = document.querySelectorAll(".gallery-link img");
    galleryLinks.forEach((link) => {
      link.addEventListener("click", handleImageClick);
    });

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      galleryLinks.forEach((link) => {
        link.removeEventListener("click", handleImageClick);
      });
    };
  }, []);


  return (
    <>
      {/* <!-- ====================================== Section Portfolio ===================================== --> */}
      <section className="portfolio-section" id="portfolio">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Portfolio.
          </h2>
          <div className="line"></div>
        </div>
        <div className="portfolios-group-main">
          <div>
            <div
              className="image-container popup-btn zoom_in"
              onClick={handlePopupOpen}>
              <img src={ContentImg} alt="content-img" />
              <div className="overlay">
                <img src={ContentSvg} alt="vimeo-svg" className="vimeo-icon" />
                <p className="overlay-text">Corporate Branding</p>
              </div>
            </div>
            <p className="Corporate zoom_in">Corporate Branding</p>
            <p className="Corporate-sub zoom_in">CONTENT</p>
            <div className="second-row-portfolio youtube zoom_in">
              <div>
                <div
                  className="image-container"
                  onClick={handleOpenModalYoutube}>
                  <img src={YoutubeVideoImg} alt="youtube-video-img" />
                  <div className="overlay">
                    <img
                      src={YoutubeSvg}
                      alt="youtube-svg"
                      className="vimeo-icon"
                    />
                    <p className="overlay-text">Food App Development</p>
                  </div>
                </div>
                <YouTubeModal isOpen={isModalOpenYoutube} onRequestClose={handleCloseModalYoutube} />
              </div>
              <p className="Corporate">Food App Development</p>
              <p className="Corporate-sub">youtube video</p>
            </div>
          </div>
          <div>
            <div>
              <div className="image-container zoom_in" id="vimeo" onClick={handleOpenModal}>
                <img src={VimeoVideoImg} alt="vimeo-video-img" />
                <div className="overlay">
                  <img src={VimeoSvg} alt="vimeo-svg" className="vimeo-icon" />
                  <p className="overlay-text">Crypto App UI Design</p>
                </div>
              </div>
              <VimeoModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
            </div>
            <p className="Corporate zoom_in">Crypto App UI Design</p>
            <p className="Corporate-sub zoom_in">vimeo video</p>
            <div>
              <div className="second-row-portfolio soundcloud zoom_in" onClick={handleOpenModalSound}>
                <div className="image-container">
                  <img src={SoundCloudImg} alt="sound-cloud-img" />
                  <div className="overlay">
                    <img src={SoundCloudSvg} alt="sound-cloud" className="vimeo-icon" />
                    <p className="overlay-text">Pocket FM Radio</p>
                  </div>
                </div>
                <p className="Corporate">Pocket FM Radio</p>
                <p className="Corporate-sub">sound cloud</p>
              </div>
              < SoundCloudModal sOpen={isModalOpenSound} onRequestClose={handleCloseModalSound}/>
            </div>
          </div>
          <div className="gallery-bank-section">
            <div className="zoom_in">
              <div className="image-container">
                <a href="#popup2">
                  <img src={GalleryImg} alt="gallery-img" />
                  <div className="overlay">
                    <img
                      src={GallerySvg}
                      alt="gallery-svg"
                      className="vimeo-icon"/>
                    <p className="overlay-text">City 3D View</p>
                  </div>
                </a>
              </div>
              <p className="Corporate">City 3D View</p>
              <p className="Corporate-sub">gallery</p>
            </div>
            <div
              className="second-row-portfolio popup-btn zoom_in"
              onClick={handlePopupOpen} >
              <div className="image-container">
                <img src={ContentImg2} alt="content-img2" />
                <div className="overlay">
                  <img             
                    src={ContentSvg}
                    alt="content-svg"
                    className="vimeo-icon" />
                  <p className="overlay-text">Bank App Development</p>
                </div>
              </div>
              <p className="Corporate">Bank App Development</p>
              <p className="Corporate-sub">content</p>
            </div>
          </div>
        </div>
        <div className="wrapper view-all-btn zoom_in">
          <Link className="btn-hover" to="#">
            View All
          </Link>
        </div>
      </section>
      <Popup isVisible={isPopupVisible} onClose={handlePopupClose} />


      {/* <!-- ====================================== Section Portfolio End ===================================== --> */}
      <div id="popup2" class="popup-container popup-style">
        <div class="popup-content popup-content-gallery">
          <a href="#pop" class="close">
            &times;
          </a>

          <main class="main">
            <h2 class="mobile_app">Gallery</h2>

            <div class="container">
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg1}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg1} alt="gallery-img1" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg2}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg2} alt="gallery-img2" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg3}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg3} alt="gallery-img3" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg4}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg4} alt="gallery-img4" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg5}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg5} alt="gallery-img5" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg6}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg6} alt="gallery-img6" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg7}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg7} alt="gallery-img7" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg8}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg8} alt="gallery-img8" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg3}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg3} alt="gallery-img3" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg1}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg1} alt="gallery-img1" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg2}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg2} alt="gallery-img2" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg3}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg3} alt="gallery-img3" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg4}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg4} alt="gallery-img4" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg5}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg5} alt="gallery-img5" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg1}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg1} alt="gallery-img1" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg2}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg2} alt="gallery-img2" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg3}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg3} alt="gallery-img3" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg4}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg4} alt="gallery-img4" />
                  </Link>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <Link
                    to={Galleryimg5}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                  >
                    <img src={Galleryimg5} alt="gallery-img5" />
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
