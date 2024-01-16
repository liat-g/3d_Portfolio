import React from 'react';
import { Link } from 'react-router-dom';

const InfoBox = ({text, link, btnText}) => ( //we only need to change the button text and linkes
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center"> {text} </p>
        <Link to={link} className="neo-brutalism-white neo-btn"> 
            {btnText}
        </Link>
    </div>
)
const renderContent = { //trick to make resuable contents
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5"> Hi, I am <span className="font-semibold">Liat </span>
        <br/>
        A Web Developer from NY 
        </h1>
    ),
    2: (
        <InfoBox text="I work as a engineer and technician, picked up fine art fabrication skils along the way"
            link="/about"
             btnText="Learn More"
        />
    ),
    3: (
        <InfoBox text=" In my gap, I studied digital design and fine art at SUNY New Paltz. Before that, I worked as a front-end engineer at American Express, where I enjoyed solving problems for users and engineering creative solutions for product and business owners."
            link="/projects"
            btnText="My Portfolio"
        />
    ),
    4: (
        <InfoBox text="Need a hand with your project?"
            link="/contact"
            btnText="Say Hi"
        />
    ),
}



const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo