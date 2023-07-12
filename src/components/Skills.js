// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png"

// export const Skills = () => {
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };

//   return (
//     <section className="skill" id="skills">
//         <div className="container">
//             <div className="row">
//                 <div className="col-12">
//                     <div className="skill-bx wow zoomIn">
//                         <h2>Skills</h2>
//                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
//                         <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
//                             <div className="item">
//                                 <img src={meter1} alt="Image" />
//                                 <h5>Web Development</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter2} alt="Image" />
//                                 <h5>Brand Identity</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter3} alt="Image" />
//                                 <h5>Logo Design</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter1} alt="Image" />
//                                 <h5>Web Development</h5>
//                             </div>
//                         </Carousel>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <img className="background-image-left" src={colorSharp} alt="Image" />
//     </section>
//   )
// }

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Skills = () => {
  const skills = [
    { title: "Proficient in programming language: Java", progress: 60 },
    { title: "Skilled in web development using HTML, CSS, and JavaScript", progress: 70 },
    { title: "Familiarity with project management methodologies, including Agile and Scrum", progress: 95 },
    { title: "Proficiency in using version control systems like Git", progress: 90 },
    { title: "Automation Testing using Appium and Selenium", progress: 85 },
  ];

  const renderSkills = () => {
    return skills.map((skill, index) => (
      <div className="item" key={index}>
        <div className="skill-item">
          <h5>{skill.title}</h5>
          <div className="progress" title={`${skill.progress}%`}>
            <div
              className="progress-value"
              style={{
                width: `${skill.progress}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col size={12}>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p id="skill-text">With a comprehensive skill set that combines both soft and technical abilities, I am poised to thrive in diverse roles and make impactful contributions to projects and teams. My skill portfolio encompasses a wide range of competencies, including effective soft skills management, strong leadership acumen, outstanding presentation and communication prowess, and a natural aptitude for analytical thinking. Moreover, my creative talents in painting and music harmoniously complement my robust interpersonal and organizational capabilities.
<br></br><br></br>In addition to my soft skills and creative talents, I possess a diverse array of technical skills, including:-</p>
              <div className="skill-slider">{renderSkills()}</div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

