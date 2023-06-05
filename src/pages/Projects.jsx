import { useState } from "react";
import Project from "../components/Project";
import styles from "./Projects.module.css";

export default function Projects() {
  const [displayedImg, setDisplayedImg] = useState({
    animalz: "",
    tradin: "",
    color: "",
    gloomy: "",
  });

  const projectData = [
    {
      id: 1,
      title: "Animalz",
      project: "animalz",
      duration: "36 hours",
      description: "",
      stack: [],
      displayedImage: displayedImg.animalz,
      images: [
        { id: 1, src: "" },
        { id: 2, src: "" },
        { id: 3, src: "" },
      ],
    },
    {
      id: 2,
      title: "Tradin' Impact",
      project: "tradin",
      duration: "4 weeks",
      description: "",
      stack: [],
      displayedImage: displayedImg.tradin,
      images: [
        { id: 1, src: "" },
        { id: 2, src: "" },
        { id: 3, src: "" },
      ],
    },
    {
      id: 3,
      title: "Color Flipper",
      duration: "1 day",
      description: "",
      stack: [],
      displayedImage: displayedImg.color,
      images: [
        { id: 1, src: "" },
        { id: 2, src: "" },
        { id: 3, src: "" },
      ],
    },
    {
      id: 4,
      title: "Gloomy",
      duration: "2 weeks",
      description: "",
      stack: [],
      displayedImage: displayedImg.gloomy,
      images: [
        { id: 1, src: "" },
        { id: 2, src: "" },
        { id: 3, src: "" },
      ],
    },
  ];

  const handleClick = (e) => {
    setDisplayedImg({ ...displayedImg, [e.target.className]: e.target.src });
  };

  // const carousel = document.getElementsByClassName("projects");

  // const handleMouseMove = (e) => {
  //   carousel.scrollLeft = e.pageX;
  // };

  return (
    <div className={styles.projects} id="projects">
      {projectData.map((project) => (
        <Project key={project.id} {...project} handleClick={handleClick} />
      ))}
    </div>
  );
}
