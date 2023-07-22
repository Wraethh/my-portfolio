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
import emmaus1 from "../assets/emmausc1.png";
import emmaus2 from "../assets/emmausc2.png";
import emmaus3 from "../assets/emmausc3.png";
import padd1 from "../assets/padd1.png";
import padd2 from "../assets/padd2.png";
import padd3 from "../assets/padd3.png";
import inovin1 from "../assets/inovin1.png";
import inovin2 from "../assets/inovin2.png";
import inovin3 from "../assets/inovin3.png";

export default function Projects() {
  const [displayedImg, setDisplayedImg] = useState({
    gloomy: gloomy1,
    color: color1,
    tradin: tradin1,
    animalz: animalz1,
    emmaus: emmaus1,
    padd: padd1,
    inovin: inovin1,
  });

  const projectData = [
    {
      id: 1,
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
    {
      id: 2,
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
      id: 3,
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
      id: 4,
      title: "Animalz",
      project: "animalz",
      duration: "24 hours",
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
      id: 5,
      title: "Emmaüs Connect",
      project: "emmaus",
      duration: "48 hours",
      description: `This project was made in a two days' time for the second hackathon of my formation.
      I grouped with the same people from the former hackathon to face this new challenge, which was something quite difficult to say the least
      as we had to present a solution to a real client this time : the company Emmaüs Connect. The problematic was that the company wanted
      an easy way for its volunteers to be able to estimate the price of second-hand smartphones depending on its caracteristics and state.
      To answer that need, we developped a calculator based on an algorithm, but we also included a way for the administrator to update the settings
      of that calculator by passing csv files. On top of that we added a login/logout function, a section for the admin to manage the volunteers using the app and 
      an FAQ section. I was in charge of the navigation bar, the database modelisation as well as the algorithm part even though I got some help
      from my teammates on this one. All in all, it was the most challenging project I had to work on so far because of the timing and diversity of things to do,
      but it was also the most rewarding as we managed to get a really nice final product that gave us the victory once again !`,
      stack: ["HTML", "CSS", "React", "Node", "MySQL"],
      link: "",
      github: "https://github.com/Wraethh/hackathon_emmaus_connect",
      displayedImage: displayedImg.emmaus,
      images: [
        { id: 1, src: emmaus1 },
        { id: 2, src: emmaus2 },
        { id: 3, src: emmaus3 },
      ],
    },
    {
      id: 6,
      title: "Inovin",
      project: "inovin",
      duration: "4 weeks",
      description: `The last group project I made for my formation. Again, we were a 3 persons working on this and the goal this time was
      to answer the need of a real client. Said client was a freshly founded business called Inovin, whose founder wants to educate people about
      wine tasting and creation through a workshop. Our group was given the task to develop an application to assist the client during those
      workshop so as to register participants and their data through the tasting and creation process. We also had to create an admin panel for
      our client to be able to manage, created or delete his workshop, the recipes that'd be created during the workshops, as well as the wines 
      he'd be using or the people who'd be taking part. Understanding the initial need and defining the minimum viable product was a bit hard at first
      as we had no real knowledge about wine and we just started to learn how to create and handle databases but with thinking and determination we pulled
      through and managed to get a working application. My part of the work mainly focused around the admin section as I had to set up all the
      data fetching then handle the display, edition, addition and deletion of said data but I also actively lent a hand to my teammates when they needed help
      with their part.`,
      stack: ["HTML", "CSS", "React", "Node", "MySQL"],
      link: "",
      github: "https://github.com/WildCodeSchool/2023-02-JS-FT-Lyon-P3-InnoVin",
      displayedImage: displayedImg.inovin,
      images: [
        { id: 1, src: inovin1 },
        { id: 2, src: inovin2 },
        { id: 3, src: inovin3 },
      ],
    },
    {
      id: 7,
      title: "Le Panier des Dunes",
      project: "padd",
      duration: "3 days",
      description: `This is the last official project I had to realize for my formation. It is as the same time my most polished project so
      far, as well as my most personnal one : I had to work alone for this one as the goal was to test my capacity to make a responsive fullstack
      website on my own to demonstrate all the skills I've gained from this 5-months training. The idea for this was to create a website to help
      my parents with their professionnal activity as farmers to display what vegetables were available at the moment and to get some online visibility.
      I did the most that I could do in three days and made a website including a home/presentation page, an "available vegetables" section, a contact page
      with a map and a form to send mails, and finaly an admin access with a login/logout function, the ability once you're logged in to edit the
      vegetable informations and availability on the cards, to delete these cards or to add new ones. I'm very proud of this project as I was
      fully invested and during those three days of development I really gave it my best !`,
      stack: ["HTML", "CSS", "React", "Node", "MySQL"],
      link: "",
      github: "https://github.com/Wraethh/Checkpoint-4-Le-Panier-des-Dunes",
      displayedImage: displayedImg.padd,
      images: [
        { id: 1, src: padd1 },
        { id: 2, src: padd2 },
        { id: 3, src: padd3 },
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
        {projectData.reverse().map((project) => (
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
