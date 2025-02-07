
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
