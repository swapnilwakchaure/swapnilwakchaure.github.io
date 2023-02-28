import styled from "styled-components";
import "./About.css";

const About = () => {
    return (
        <AboutWrapper id="about">
            <AboutHeader>About Me</AboutHeader>
            <div className="about-section">
                <div className="about-section-image">
                    <img src="https://avatars.githubusercontent.com/u/55839053?v=4" alt="swapnil-image" />
                </div>
                <div className="about-section-introduction">
                    <p>
                        Hello, I am <span className="about-section-my-name">Swapnil Wakchaure</span> aspiring a Full Stack Web Developer and doing military style coding at Masai School.
                        I have done various groups as well as individual projects in my coding journey.
                        Looking forward to giving a significant contribution to an organization throught a dedicated effort.
                    </p>
                    {/* <a href="/resume.pdf" target="_blank">
                        <button>Resume</button>
                    </a> */}
                </div>
            </div>
        </AboutWrapper>
    )
}

export default About;


const AboutHeader = styled.h1`
  margin: 50px auto auto auto;
  padding: 10px 0px 0px 0px;
`

const AboutWrapper = styled.div`
  background-color: #C1C8E4;
`