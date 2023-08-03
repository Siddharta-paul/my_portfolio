import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/grafiika_comp.png";
import projImg2 from "../assets/img/scrapper-comp.jpg";
import projImg3 from "../assets/img/automate_comp.jpg";
import projImg4 from "../assets/img/portfolio_comp.png";
import projImg5 from "../assets/img/inprogress_comp.jpg";
import projImg6 from "../assets/img/coming Soon_comp.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Grafiika - A Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://grafiika.netlify.app/", 
    },
    {
      title: "Web Scrapper",
      description: "Scrape Data from Website",
      imgUrl: projImg2,
      link: "https://github.com/Siddharta-paul/web_scrapper"
    },
    {
      title: "Automation Testing",
      description: "Test Scripts using Selenium",
      imgUrl: projImg3,
      link: "https://github.com/Siddharta-paul/gobillion-app-automation.git", 
    },
    {
      title: "My Portfolio",
      description: "Personal Portfolio",
      imgUrl: projImg4,
      link: "#",
    },
    {
      title: "In progress",
      description: "Development in progress",
      imgUrl: projImg5,
    },
    {
      title: "Coming Soon",
      description: "Coming Soon",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 id="about_me">About me &darr;</h2>
                <p></p>
               <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Achievements</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <div className="table-responsive">
                      <table className="experience-table">
                  <thead>
                    <tr>
                      <th>Position</th>
                      <th>Company</th>
                      <th>Duration</th>
                      <th>Responsibilities</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Training & Placement Coordinator</td>
                      <td>National Institute Of Technology, Silchar</td>
                      <td>May 2023 - Present</td>
                      <td>
                        <ul>
                          <li>Responsible for the placement of the entire batch and internship for junior batch.</li>
                          <li>Manage college and company relations.</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>QA Lead</td>
                      <td>GOBILLION</td>
                      <td>July 2021 - Present</td>
                      <td>
                        <ul>
                          <li>Led the QA team to work proficiently under strict deadlines.</li>
                          <li>Led the team to develop both manual and automated efficient test cases.</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Co-Founder</td>
                      <td>GRAFIIKA</td>
                      <td>December 2021 - May 2022</td>
                      <td>
                        <ul>
                          <li>Started a service-based startup.</li>
                          <li>Provided social media creatives so that industries get the desired presence in social media.</li>
                          <li>Provided Social Media Marketing to new startups.</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Management Head</td>
                      <td>Google Developers Students Club NIT Silchar</td>
                      <td>August 2022 - Present</td>
                      <td>
                        <ul>
                          <li>Led budding developers to share their knowledge through GDSC.</li>
                          <li>Managed different tech events as the Management Head.</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
                </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="third">
                      <div className="table-responsive">
                        <table className="achievements-table">
                          <thead>
                            <tr>
                              <th>Achievement</th>
                              <th>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Won TATA CRUCIBLE HACKATHON-2020 from Eastern Region</td>
                              <td>Designed Squatting Toilets that curb water wastage in public toilets. The model compete against the existing models and was the best proposed model in various factors</td>
                            </tr>
                            <tr>
                              <td>Won Inter-School Railway Science Exhibition</td>
                              <td>Made Automated Indoor Lighting system with Arduino Uno and wifi connectivity. The model was both energy saving and cost effective.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
