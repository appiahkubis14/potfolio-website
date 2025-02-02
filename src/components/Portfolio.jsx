// import React, { useState, useEffect } from "react";

// import ContentSvg from "../assets/images/svg/content-svg.svg";
// import ContentImg from "../assets/images/content-img.png";
// import YoutubeVideoImg from "../assets/images/youtube-video-img.png";
// import YoutubeSvg from "../assets/images/svg/youtube-svg.svg";
// import VimeoVideoImg from "../assets/images/vimeo-video-img.png";
// import VimeoSvg from "../assets/images/svg/vimeo-svg.svg";
// import SoundCloudImg from "../assets/images/sound-cloud-img.png";
// import SoundCloudSvg from "../assets/images/svg/sound-cloud.svg";
// import GalleryImg from "../assets/images/gallery-img.png";
// import GallerySvg from "../assets/images/svg/gallery-svg.svg";
// import ContentImg2 from "../assets/images/content-img2.png";
// import YouTubeModal from "./YouTubeVideo";
// import VimeoModal from "./VimeoModal";
// import SoundCloudModal from "./SoundCloudVideo";

// // import $ from "jquery";

// import Galleryimg1 from "../assets/images/gallery/gallery-img1.jpg";
// import Galleryimg2 from "../assets/images/gallery/gallery-img2.jpg";
// import Galleryimg3 from "../assets/images/gallery/gallery-img3.jpg";
// import Galleryimg4 from "../assets/images/gallery/gallery-img4.jpg";
// import Galleryimg5 from "../assets/images/gallery/gallery-img5.jpg";
// import Galleryimg6 from "../assets/images/gallery/gallery-img6.jpg";
// import Galleryimg7 from "../assets/images/gallery/gallery-img7.jpg";
// import Galleryimg8 from "../assets/images/gallery/gallery-img8.jpg";

// import Fancybox from "./FancyBox";
// import Popup from "./PopUp";
// import { Link } from "react-router-dom";

// const Portfolio = () => {

//   const [isPopupVisible, setIsPopupVisible] = useState(false);

//   const handlePopupOpen = (e) => {
//     e.preventDefault();
//     setIsPopupVisible(true);
//   };

//   const handlePopupClose = (e) => {
//     e.preventDefault();
//     setIsPopupVisible(false);
//   };

//   // Vimeo Modal
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   // Youtube Modal
//   const [isModalOpenYoutube, setisModalOpenYoutube] = useState(false);

//   const handleOpenModalYoutube = () => {
//     setisModalOpenYoutube(true);
//   };

//   const handleCloseModalYoutube = () => {
//     setisModalOpenYoutube(false);
//   };

//   // Soundcloud Modal
//   const [isModalOpenSound, setIsModalOpenSound] = useState(false);

//   const handleOpenModalSound = () => {
//     setIsModalOpenSound(true);
//   };

//   const handleCloseModalSound = () => {
//     setIsModalOpenSound(false);
//   };

//   useEffect(() => {
//     // Function to initialize fancybox for the gallery

//     // Event listener to toggle 'full' class on image click
//     const handleImageClick = (event) => {
//       event.target.classList.toggle("full");
//     };

//     // Attach click event to gallery images
//     const galleryLinks = document.querySelectorAll(".gallery-link img");
//     galleryLinks.forEach((link) => {
//       link.addEventListener("click", handleImageClick);
//     });

//     // Cleanup function to remove event listeners when component unmounts
//     return () => {
//       galleryLinks.forEach((link) => {
//         link.removeEventListener("click", handleImageClick);
//       });
//     };
//   }, []);


//   return (
//     <>
//       {/* <!-- ====================================== Section Portfolio ===================================== --> */}
//       <section className="portfolio-section" id="portfolio">
//         <div className="heading-container">
//           <h2 className="section-heading-text coding-skill-text fade_up">
//             Portfolio.
//           </h2>
//           <div className="line"></div>
//         </div>
//         <div className="portfolios-group-main">
//           <div>
//             <div
//               className="image-container popup-btn zoom_in"
//               onClick={handlePopupOpen}>
//               <img src={ContentImg} alt="content-img" />
//               <div className="overlay">
//                 <img src={ContentSvg} alt="vimeo-svg" className="vimeo-icon" />
//                 <p className="overlay-text">Corporate Branding</p>
//               </div>
//             </div>
//             <p className="Corporate zoom_in">Corporate Branding</p>
//             <p className="Corporate-sub zoom_in">CONTENT</p>
//             <div className="second-row-portfolio youtube zoom_in">
//               <div>
//                 <div
//                   className="image-container"
//                   onClick={handleOpenModalYoutube}>
//                   <img src={YoutubeVideoImg} alt="youtube-video-img" />
//                   <div className="overlay">
//                     <img
//                       src={YoutubeSvg}
//                       alt="youtube-svg"
//                       className="vimeo-icon"
//                     />
//                     <p className="overlay-text">Food App Development</p>
//                   </div>
//                 </div>
//                 <YouTubeModal isOpen={isModalOpenYoutube} onRequestClose={handleCloseModalYoutube} />
//               </div>
//               <p className="Corporate">Food App Development</p>
//               <p className="Corporate-sub">youtube video</p>
//             </div>
//           </div>
//           <div>
//             <div>
//               <div className="image-container zoom_in" id="vimeo" onClick={handleOpenModal}>
//                 <img src={VimeoVideoImg} alt="vimeo-video-img" />
//                 <div className="overlay">
//                   <img src={VimeoSvg} alt="vimeo-svg" className="vimeo-icon" />
//                   <p className="overlay-text">Crypto App UI Design</p>
//                 </div>
//               </div>
//               <VimeoModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
//             </div>
//             <p className="Corporate zoom_in">Crypto App UI Design</p>
//             <p className="Corporate-sub zoom_in">vimeo video</p>
//             <div>
//               <div className="second-row-portfolio soundcloud zoom_in" onClick={handleOpenModalSound}>
//                 <div className="image-container">
//                   <img src={SoundCloudImg} alt="sound-cloud-img" />
//                   <div className="overlay">
//                     <img src={SoundCloudSvg} alt="sound-cloud" className="vimeo-icon" />
//                     <p className="overlay-text">Pocket FM Radio</p>
//                   </div>
//                 </div>
//                 <p className="Corporate">Pocket FM Radio</p>
//                 <p className="Corporate-sub">sound cloud</p>
//               </div>
//               < SoundCloudModal sOpen={isModalOpenSound} onRequestClose={handleCloseModalSound}/>
//             </div>
//           </div>
//           <div className="gallery-bank-section">
//             <div className="zoom_in">
//               <div className="image-container">
//                 <a href="#popup2">
//                   <img src={GalleryImg} alt="gallery-img" />
//                   <div className="overlay">
//                     <img
//                       src={GallerySvg}
//                       alt="gallery-svg"
//                       className="vimeo-icon"/>
//                     <p className="overlay-text">City 3D View</p>
//                   </div>
//                 </a>
//               </div>
//               <p className="Corporate">City 3D View</p>
//               <p className="Corporate-sub">gallery</p>
//             </div>
//             <div
//               className="second-row-portfolio popup-btn zoom_in"
//               onClick={handlePopupOpen} >
//               <div className="image-container">
//                 <img src={ContentImg2} alt="content-img2" />
//                 <div className="overlay">
//                   <img             
//                     src={ContentSvg}
//                     alt="content-svg"
//                     className="vimeo-icon" />
//                   <p className="overlay-text">Bank App Development</p>
//                 </div>
//               </div>
//               <p className="Corporate">Bank App Development</p>
//               <p className="Corporate-sub">content</p>
//             </div>
//           </div>
//         </div>
//         <div className="wrapper view-all-btn zoom_in">
//           <Link className="btn-hover" to="#">
//             View All
//           </Link>
//         </div>
//       </section>
//       <Popup isVisible={isPopupVisible} onClose={handlePopupClose} />


//       {/* <!-- ====================================== Section Portfolio End ===================================== --> */}
//       <div id="popup2" className="popup-container popup-style">
//         <div className="popup-content popup-content-gallery">
//           <a href="#pop" className="close">
//             &times;
//           </a>

//           <main className="main">
//             <h2 className="mobile_app">Gallery</h2>

//             <div className="container">
//               <div className="card">
//                 <div className="card-image">
//                   <Link
//                     to={Galleryimg1}
//                     data-fancybox="gallery"
//                     data-caption="Caption Images 1"
//                   >
//                     <img src={Galleryimg1} alt="gallery-img1" />
//                   </Link>
//                 </div>
//               </div>
//               <div className="card">
//                 <div className="card-image">
//                   <Link
//                     to={Galleryimg2}
//                     data-fancybox="gallery"
//                     data-caption="Caption Images 1"
//                   >
//                     <img src={Galleryimg2} alt="gallery-img2" />
//                   </Link>
//                 </div>
//               </div>
//               <div className="card">
//                 <div className="card-image">
//                   <Link
//                     to={Galleryimg3}
//                     data-fancybox="gallery"
//                     data-caption="Caption Images 1"
//                   >
//                     <img src={Galleryimg3} alt="gallery-img3" />
//                   </Link>
//                 </div>
//               </div>
//               <div className="card">
//                 <div className="card-image">
//                   <Link
//                     to={Galleryimg4}
//                     data-fancybox="gallery"
//                     data-caption="Caption Images 1"
//                   >
//                     <img src={Galleryimg4} alt="gallery-img4" />
//                   </Link>
//                 </div>
//               </div>
//               <div className="card">
//                 <div className="card-image">
//                   <Link
//                     to={Galleryimg5}
//                     data-fancybox="gallery"
//                     data-caption="Caption Images 1"
//                   >
//                     <img src={Galleryimg5} alt="gallery-img5" />
//                   </Link>
//                 </div>
//               </div>
//               <div className="card">
//                 <div className="card-image">
//                   <Link
//                     to={Galleryimg6}
//                     data-fancybox="gallery"
//                     data-caption="Caption Images 1"
//                   >
//                     <img src={Galleryimg6} alt="gallery-img6" />
//                   </Link>
//                 </div>
//               </div>
//               <div className="card">
//                 <div className="card-image">
//                   <Link
//                     to={Galleryimg7}
//                     data-fancybox="gallery"
//                     data-caption="Caption Images 1"
//                   >
//                     <img src={Galleryimg7} alt="gallery-img7" />
//                   </Link>
//                 </div>
//               </div>
//               <div className="card">
//                 <div className="card-image">
//                   <Link
//                     to={Galleryimg8}
//                     data-fancybox="gallery"
//                     data-caption="Caption Images 1"
//                   >
//                     <img src={Galleryimg8} alt="gallery-img8" />
//                   </Link>
//                 </div>
//               </div>
//               <div className="card">
//                 <div className="card-image">
//                   <Link
//                     to={Galleryimg3}
//                     data-fancybox="gallery"
//                     data-caption="Caption Images 1"
//                   >
//                     <img src={Galleryimg3} alt="gallery-img3" />
//                   </Link>
//                 </div>
//               </div>
//               <div className="card">
//                 <div className="card-image">
//                   <Link
//                     to={Galleryimg1}
//                     data-fancybox="gallery"
//                     data-caption="Caption Images 1"
//                   >
//                     <img src={Galleryimg1} alt="gallery-img1" />
//                   </Link>
//                 </div>
//               </div>
//               <div className="card">
//                 <div className="card-image">
//                   <Link
//                     to={Galleryimg2}
//                     data-fancybox="gallery"
//                     data-caption="Caption Images 1"
//                   >
//                     <img src={Galleryimg2} alt="gallery-img2" />
//                   </Link>
//                 </div>
//               </div>
//               <div className="card">
//                 <div className="card-image">
//                   <Link
//                     to={Galleryimg3}
//                     data-fancybox="gallery"
//                     data-caption="Caption Images 1"
//                   >
//                     <img src={Galleryimg3} alt="gallery-img3" />
//                   </Link>
//                 </div>
//               </div>
//               <div className="card">
//                 <div className="card-image">
//                   <Link
//                     to={Galleryimg4}
//                     data-fancybox="gallery"
//                     data-caption="Caption Images 1"
//                   >
//                     <img src={Galleryimg4} alt="gallery-img4" />
//                   </Link>
//                 </div>
//               </div>
//               <div className="card">
//                 <div className="card-image">
//                   <Link
//                     to={Galleryimg5}
//                     data-fancybox="gallery"
//                     data-caption="Caption Images 1"
//                   >
//                     <img src={Galleryimg5} alt="gallery-img5" />
//                   </Link>
//                 </div>
//               </div>
//               <div className="card">
//                 <div className="card-image">
//                   <Link
//                     to={Galleryimg1}
//                     data-fancybox="gallery"
//                     data-caption="Caption Images 1"
//                   >
//                     <img src={Galleryimg1} alt="gallery-img1" />
//                   </Link>
//                 </div>
//               </div>
//               <div className="card">
//                 <div className="card-image">
//                   <Link
//                     to={Galleryimg2}
//                     data-fancybox="gallery"
//                     data-caption="Caption Images 1"
//                   >
//                     <img src={Galleryimg2} alt="gallery-img2" />
//                   </Link>
//                 </div>
//               </div>
//               <div className="card">
//                 <div className="card-image">
//                   <Link
//                     to={Galleryimg3}
//                     data-fancybox="gallery"
//                     data-caption="Caption Images 1"
//                   >
//                     <img src={Galleryimg3} alt="gallery-img3" />
//                   </Link>
//                 </div>
//               </div>
//               <div className="card">
//                 <div className="card-image">
//                   <Link
//                     to={Galleryimg4}
//                     data-fancybox="gallery"
//                     data-caption="Caption Images 1"
//                   >
//                     <img src={Galleryimg4} alt="gallery-img4" />
//                   </Link>
//                 </div>
//               </div>
//               <div className="card">
//                 <div className="card-image">
//                   <Link
//                     to={Galleryimg5}
//                     data-fancybox="gallery"
//                     data-caption="Caption Images 1"
//                   >
//                     <img src={Galleryimg5} alt="gallery-img5" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Portfolio;
import React, { useEffect, useState, useRef } from "react";
import "../components/technicalSkills.css";

import pythonImg from "../assets/images/python.png";
import tensorflowImg from "../assets/images/4.png";
import sklearnImg from "../assets/images/sklearn.png";
import tableauImg from "../assets/images/tableau.jpg";
import openCVImg from "../assets/images/OpenCVImg.png";
import djangoImg from "../assets/images/DjangoImg.png";
import flutterImg from "../assets/images/flutter.png";
import reactImg from "../assets/images/react.png";
import qgisImg from "../assets/images/QGISImg.jpeg";
import arcgisImg from "../assets/images/arcgis.png";
import autocadImg from "../assets/images/autocad.png";
import drone2mapImg from "../assets/images/drone2map.png";
import metashapeImg from "../assets/images/metashape.jpeg";
import gitImg from "../assets/images/GitImg.webp";
import jupyterImg from "../assets/images/jupyter.webp";
import pycharmImg from "../assets/images/pycharm.png";
import vscodeImg from "../assets/images/vscode.png";
import latexImg from "../assets/images/latex.png";
import officeImg from "../assets/images/office.png";
import libreOfficeImg from "../assets/images/libreoffice.jpg";
import gimpImg from "../assets/images/gimp.png";
import aws from "../assets/images/aws.png";
import colabImg from "../assets/images/colab.png";
import postgresqlImg from "../assets/images/postgresql.png";
import mysqlImg from "../assets/images/mysql.avif";
import sqliteImg from "../assets/images/sqlite.png";
import firebaseImg from "../assets/images/firebase.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.svg";
import javascript from "../assets/images/js.png";

const skills = [
  { img: pythonImg, name: "Software Development : Python" },
  { img: tensorflowImg, name: "Artificial Intelligence : TensorFlow" },
  { img: sklearnImg, name: "Machine Learning : Scikit-Learn" },
  { img: tableauImg, name: "Data Analysis : Tableau" },
  { img: openCVImg, name: "Computer Vision : OpenCV" },
  { img: djangoImg, name: "Software Development : Django" },
  { img: flutterImg, name: "Software Development : Flutter" },
  { img: reactImg, name: "Software Development : React" },
  { img: qgisImg, name: "GIS Analysis : QGIS" },
  { img: arcgisImg, name: "GIS Analysis : ArcGIS Pro" },
  { img: autocadImg, name: "Mapping : AutoCAD" },
  { img: drone2mapImg, name: "Drone Image Processing : Drone2Map" },
  { img: metashapeImg, name: "Drone Image Processing : Metashape" },
  { img: gitImg, name: "Version Control : Git" },
  { img: jupyterImg, name: "Data Analysis : Jupyter" },
  { img: pycharmImg, name: "PyCharm" },
  { img: vscodeImg, name: "VSCode" },
  { img: latexImg, name: "LaTeX" },
  { img: officeImg, name: "MicroSoft Office" },
  { img: libreOfficeImg, name: "LibreOffice" },
  { img: gimpImg, name: "GIMP" },
  { img: aws, name: "Web Hosting : AWS" },
  { img: colabImg, name: "Google Colab" },
  { img: postgresqlImg, name: "Database Management : PostgreSQL" },
  { img: mysqlImg, name: "Database Management : MySQL" },
  { img: sqliteImg, name: "Daabase Management : SQLite" },
  { img: firebaseImg, name: "Backend : Firebase" },
  { img: html, name: "Front-end : HTML" },
  { img: css, name: "Front-end : CSS" },
  { img: javascript, name: "Back-end and Front-end: JavaScript" },
];

const TechnicalSkills = () => {
  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    skillRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="technical-skill-section" id="portfolio">
      <div className="heading-container">
        <h2 className="section-heading-text technical-skill-text fade_up">
          Technical Skills
        </h2>
        <div className="line"></div>
      </div>
      <div className="technical-skill-sub-section">
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={(el) => (skillRefs.current[index] = el)}
            className="technical-skills-img-main"
          >
            <div className="technical-skills-img-container">
              <div className="technical-skills-img front">
                <img src={skill.img} alt={`skill-${index}`} />
              </div>
              <div className="technical-skills-img back">
                <p>{skill.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
