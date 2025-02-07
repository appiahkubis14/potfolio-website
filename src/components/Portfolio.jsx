
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
  { img: pythonImg, name: "Python" },
  { img: tensorflowImg, name: "TensorFlow" },
  { img: sklearnImg, name: "Scikit-Learn" },
  { img: tableauImg, name: "Tableau" },
  { img: openCVImg, name: "OpenCV" },
  { img: djangoImg, name: "Django" },
  { img: flutterImg, name: "Flutter" },
  { img: reactImg, name: "React" },
  { img: qgisImg, name: "QGIS" },
  { img: arcgisImg, name: "ArcGIS Pro" },
  { img: autocadImg, name: "AutoCAD" },
  { img: drone2mapImg, name: "Drone2Map" },
  { img: metashapeImg, name: "Metashape" },
  { img: gitImg, name: "Git" },
  { img: jupyterImg, name: "Jupyter" },
  { img: pycharmImg, name: "PyCharm" },
  { img: vscodeImg, name: "VSCode" },
  { img: latexImg, name: "LaTeX" },
  { img: officeImg, name: "Office" },
  { img: libreOfficeImg, name: "LibreOffice" },
  { img: gimpImg, name: "GIMP" },
  { img: aws, name: "AWS" },
  { img: colabImg, name: "Google Colab" },
  { img: postgresqlImg, name: "PostgreSQL" },
  { img: mysqlImg, name: "MySQL" },
  { img: sqliteImg, name: "SQLite" },
  { img: firebaseImg, name: "Firebase" },
  { img: html, name: "HTML" },
  { img: css, name: "CSS" },
  { img: javascript, name: "JavaScript" },
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
