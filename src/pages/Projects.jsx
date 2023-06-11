import PropTypes from "prop-types";
import { useState } from "react";
import Project from "../components/Project";
import styles from "./Projects.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import animalz1 from "../assets/animalz1.jpg";
import animalz2 from "../assets/animalz2.jpg";
import animalz3 from "../assets/animalz3.jpg";
import tradin1 from "../assets/tradin1.jpg";
import tradin2 from "../assets/tradin2.jpg";
import tradin3 from "../assets/tradin3.jpg";
import color1 from "../assets/color1.jpg";
import color2 from "../assets/color2.jpg";
import color3 from "../assets/color3.jpg";
import gloomy1 from "../assets/gloomy1.jpg";
import gloomy2 from "../assets/gloomy2.jpg";
import gloomy3 from "../assets/gloomy3.jpg";

export default function Projects() {
  const [displayedImg, setDisplayedImg] = useState({
    animalz: animalz1,
    tradin: tradin1,
    color: color1,
    gloomy: gloomy1,
  });

  const projectData = [
    {
      id: 1,
      title: "Animalz",
      project: "animalz",
      duration: "36 hours",
      description: `Animalz is a project developped by four persons (including me) for a hackathon which took place towards the half of our formation. 
        We had to create a proof of concept to answer a need around the theme of holidays. 
        We decided to make an app where people could find travel buddies using a similar system as Fruitz but with animals, hence the name.
        I did a bit of everything, but my part mainly focused around getting the calendar module working, calling the Pexel API to display images 
        in addition of organizing pieces of information on the profile page using our custom json-server database alongside the random users API.`,
      stack: ["HTML", "CSS", "React", "Node", "API REST"],
      link: "",
      github: "https://github.com/Wraethh/Hackathon_JS_05_2023",
      displayedImage: displayedImg.animalz,
      images: [
        { id: 1, src: animalz1 },
        { id: 2, src: animalz2 },
        { id: 3, src: animalz3 },
      ],
    },
    {
      id: 2,
      title: "Tradin' Impact",
      project: "tradin",
      duration: "4 weeks",
      description: `The second project I've done during my formation. Once again it was a group project of 3 and the only constraint 
        was to build something around an API of our choice using React.
        We agreed on developping a trading game in which you could primarly buy or sell items, but also collect and fight !
        It was our first time dealing with API and React so we struggled at first but in the end we learned how to make it work.
        This project really made me progress since on top of API and React, we had to use quite a bit of algorithms for each of our
        featured mini-games.`,
      stack: ["HTML", "CSS", "React", "Node", "API REST"],
      link: "https://tradin-impact.netlify.app/",
      github: "https://github.com/Wraethh/2023-02-JS-FT-Lyon-P2-TradinImpact",
      displayedImage: displayedImg.tradin,
      images: [
        { id: 1, src: tradin1 },
        { id: 2, src: tradin2 },
        { id: 3, src: tradin3 },
      ],
    },
    {
      id: 3,
      title: "Color Flipper",
      project: "color",
      duration: "1 day",
      description: `This was just a personal side project at first, but I found myself really getting into it and wanting to improve it
        with my newfound javascript skills. Once the random hexadecimal color generator was done, I incorporated a function to determine if a color
        was rather dark or light so that I could change the text color accordingly with accessibility in mind. I also developed a history
        function to have access to the last 5 colors generated.
        It was quite a fun project to work on to train my javascript functions and DOM manipulations skills !`,
      stack: ["HTML", "CSS", "Javascript"],
      link: "https://wraethh.github.io/color_flipper/",
      github: "https://github.com/Wraethh/color_flipper",
      displayedImage: displayedImg.color,
      images: [
        { id: 1, src: color1 },
        { id: 2, src: color2 },
        { id: 3, src: color3 },
      ],
    },
    {
      id: 4,
      title: "Gloomy",
      project: "gloomy",
      duration: "2 weeks",
      description: `This is the very first project I've done in my burgeoning developer career. We were a team of 3 people diving 
        into the then unknown depths of javascript with our HTML and CSS skills. We had no real constraint apart from developing a
        functional javascript application, so we decided to build a small calculator but with a twist : try and activate its dark mode
        and you will suffer its bad mood ! In light mode, Gloomy is a perfeclty normal calculator, but in the dark mode version, 
        the roles are switched and you are the one having to solve calculations through different mini-games.`,
      stack: ["HTML", "CSS", "Javascript"],
      link: "https://wildcodeschool.github.io/2023-02-JS-FT-Lyon-P1-WildUnited/index.html",
      github: "https://github.com/Wraethh/2023-02-JS-FT-Lyon-P1-WildUnited",
      displayedImage: displayedImg.gloomy,
      images: [
        { id: 1, src: gloomy1 },
        { id: 2, src: gloomy2 },
        { id: 3, src: gloomy3 },
      ],
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomRightArrow = ({ onClick }) => {
    return <button className={styles.rightArrow} onClick={() => onClick()} />;
  };

  const CustomLeftArrow = ({ onClick }) => {
    return <button className={styles.leftArrow} onClick={() => onClick()} />;
  };

  const CustomDot = ({ onClick, active }) => {
    return (
      <button
        className={active ? styles.activeDots : styles.inactiveDots}
        onClick={() => onClick()}
      />
    );
  };

  const handleClick = (e) => {
    setDisplayedImg({ ...displayedImg, [e.target.className]: e.target.src });
  };

  return (
    <div className={styles.projects} id="projects">
      <Carousel
        responsive={responsive}
        draggable={false}
        showDots={true}
        renderDotsOutside={false}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        customDot={<CustomDot />}
      >
        {projectData.map((project) => (
          <Project key={project.id} {...project} handleClick={handleClick} />
        ))}
      </Carousel>
    </div>
  );
}

Projects.propTypes = {
  onClick: PropTypes.func,
  active: PropTypes.bool,
};
