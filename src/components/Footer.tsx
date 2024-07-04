import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Article from '@mui/icons-material/Article';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/troydutton" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/troydutton/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://drive.google.com/file/d/1U5UcZ-s5frRiwt9-r2NJQBc76sCFD_ej/view?usp=sharing" target="_blank" rel="noreferrer"><Article/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a> with 💜</p>
    </footer>
  );
}

export default Footer;