import React from "react";
import mock06 from '../assets/images/mock06.png';
import fashionatlas from '../assets/images/fashionatlas.png';
import recommender from '../assets/images/recommender.png';
import chess from '../assets/images/chess.png';
import minecraft from '../assets/images/minecraft.png';
import rationallama from '../assets/images/rationallama.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/UT-ECE364D-D12/CERS" target="_blank" rel="noreferrer"><img src={recommender} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/UT-ECE364D-D12/CERS" target="_blank" rel="noreferrer"><h2>Conversational Recommender System</h2></a>
                <p>Developing a system which provides contextually informed recommendations by incorporating Large Language Models into traditional recommender systems.</p>
            </div>
            <div className="project">
                <a href="https://github.com/troydutton/fashion-atlas" target="_blank" rel="noreferrer"><img src={fashionatlas} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/troydutton/fashion-atlas" target="_blank" rel="noreferrer"><h2>Fashion Atlas</h2></a>
                <p>Created a clothing recommendation app that uses object detection and image encoding to suggest similar styles of clothing.</p>
            </div>
            <div className="project">
                <a href="https://medium.com/@jaspertan_49883/rationallama-fine-tuning-an-llm-for-logical-reasoning-and-why-its-hard-c590ff4081fc" target="_blank" rel="noreferrer"><img src={rationallama} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://medium.com/@jaspertan_49883/rationallama-fine-tuning-an-llm-for-logical-reasoning-and-why-its-hard-c590ff4081fc" target="_blank" rel="noreferrer"><h2>RationaLlama</h2></a>
                <p>Fine-tuned Llama-2 to solve logical reasoning tasks, outperforming ChatGPT 3.5 Turbo.</p>
            </div>
            <div className="project">
                <a href="https://github.com/troydutton/Chess" target="_blank" rel="noreferrer"><img src={chess} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/troydutton/Chess" target="_blank" rel="noreferrer"><h2>Chess Engine</h2></a>
                <p>Developed a neural-network based chess engine featuring a Monte-Carlo Tree Search algorithim inspired by DeepMind's AlphaZero paper.</p>
            </div>
            <div className="project">
                <a href="https://github.com/CashelF/rl-minecraft-pvp" target="_blank" rel="noreferrer"><img src={minecraft} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/CashelF/rl-minecraft-pvp" target="_blank" rel="noreferrer"><h2>Minecraft PVE</h2></a>
                <p>Leveraged reinforcement learning algorithms to train an agent to defeat hostile creatures within the Minecraft environment.</p>
            </div>
            <div className="project">
                <a href="https://github.com/troydutton/Asli" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/troydutton/Asli" target="_blank" rel="noreferrer"><h2>ASL Identifer</h2></a>
                <p>Designed a real-time American Sign Language classifier which accurately matches hand gestures to their respective letters.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;