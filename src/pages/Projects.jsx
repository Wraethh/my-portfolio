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
      description: "",
      stack: ["HTML", "CSS", "React", "Node", "API REST"],
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
      description: "",
      stack: ["HTML", "CSS", "React", "Node", "API REST"],
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
      description: "",
      stack: ["HTML", "CSS", "Javascript"],
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
      description: "",
      stack: ["HTML", "CSS", "Javascript"],
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
