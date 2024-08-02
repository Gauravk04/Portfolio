"use client";
import Image from "next/image";

import "./education.css"; // Ensure this file contains the necessary styles

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="row text-center mb-4">
          {" "}
          {/* Adjusted mb value */}
          <div className="col-xl-12">
            <div className="section-heading">
              <h2 className="section-title text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-4">
                Qualifications
              </h2>
              <p className="section-subtitle text-xl text-white">
                Academic and Professional
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-pricing">
              <h3>Class X ( ICSE )</h3>
              <h4>St. Joseph's School</h4>
              <p>PCMB-CS</p>
              <ul>
                <li>
                  <i className="fa-solid fa-location-pin"></i> Gorakhpur, U.P.
                </li>
                <li>
                  <i className="fa-solid fa-percent"></i> Aggregate: 85.4%
                </li>
                <li>
                  <img src="/ten.png" alt="ais_img" />
                </li>
              </ul>
              <a>
                Completed <i className="fa-solid fa-check"></i>
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-pricing">
              <h3>Class XII ( CBSE )</h3>
              <h4>Sanskriti Public School</h4>
              <p>PCM-CS</p>
              <ul>
                <li>
                  <i className="fa-solid fa-location-pin"></i> Gorakhpur, U.P.
                </li>
                <li>
                  <i className="fa-solid fa-percent"></i> Aggregate: 86.6%
                </li>
                <li>
                  <img src="/12.png" alt="ais_img" />
                </li>
              </ul>
              <a>
                Completed <i className="fa-solid fa-check"></i>
              </a>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-pricing">
              <h3>B.Tech CSE</h3>
              <h4>
                Lovely Professional <br />
                University
              </h4>
              <p>CSE</p>
              <ul>
                <li>
                  <i className="fa-solid fa-location-pin"></i> Phagwara, Punjab.
                </li>
                <li>CGPA: 8.24</li>
                <li>
                  <img src="/lpu.png" alt="ais_img" />
                </li>
              </ul>
              <a>
                Expected (2025) <i className="fa-solid fa-business-time"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
