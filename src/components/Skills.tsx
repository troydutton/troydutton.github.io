import React from 'react';
import 'devicon/devicon.min.css';
import '../assets/styles/Skills.scss';

const techToDevicon: { [key: string]: string } = {
  javascript: 'devicon-javascript-plain colored',
  react: 'devicon-react-original colored',
  nodejs: 'devicon-nodejs-plain-wordmark colored',
  python: 'devicon-python-plain colored',
  docker: 'devicon-docker-plain',
  github: 'devicon-github-original',
  aws: 'devicon-amazonwebservices-original',
  anaconda: 'devicon-anaconda-original colored',
  bash: 'devicon-bash-plain colored',
  c: 'devicon-c-plain colored',
  cplusplus: 'devicon-cplusplus-plain colored',
  flask: 'devicon-flask-original colored',
  git: 'devicon-git-plain colored',
  pytorch: 'devicon-pytorch-plain colored',
  tensorflow: 'devicon-tensorflow-original colored',
  mongodb: 'devicon-mongodb-plain colored',
  postgresql: 'devicon-postgresql-plain colored',
  linux: 'devicon-linux-plain colored',
  java: 'devicon-java-plain colored',
  html: 'devicon-html5-plain colored',
  css: 'devicon-css3-plain colored',
};

function Skills() {
  // Hardcoded skills array
  const skills = ['JavaScript', 'React', 'NodeJS', 'Python', 'Bash', 'C', 'Cplusplus', 'Flask', 'Git', 'PyTorch', 'TensorFlow', 'MongoDB', 'Linux', 'Java', 'HTML', 'CSS'];

  return (
    <div className="skills-section" id="skills">
      <h2 className="display-4 pb-5 text-center">Skills</h2>
      <div className="skills-container">
        {skills.map((skill) => {
          const deviconClass = techToDevicon[skill.toLowerCase()];
          if (!deviconClass) {
            console.warn(`Devicon class not found for ${skill}`);
            return null; // Skip if the skill is not mapped
          }
          return (
            <i
              key={skill}
              className={`${deviconClass} skill-icon`}
              title={skill}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Skills;