import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Article from '@mui/icons-material/Article';
import avatar from '../assets/images/avatar.jpg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/troydutton" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/troydutton/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://drive.google.com/file/d/1RxmeBxGNjLX551qefuM3bIq-LfHGxWzT/view?usp=sharing" target="_blank" rel="noreferrer"><Article/></a>
          </div>
          <h1>Troy Dutton</h1>
          <p>Student | Software Engineer | AI Researcher</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/troydutton" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/troydutton/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://drive.google.com/file/d/1aIeOv2HabcNdOkk9T0bygqJLd1I9VZgp/view?usp=sharing" target="_blank" rel="noreferrer"><Article/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;