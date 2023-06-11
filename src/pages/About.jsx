import Card from "../components/Card";
import styles from "./About.module.css";
import experiences from "../assets/experiences.png";
import education from "../assets/education.png";
import skills from "../assets/skills.png";

export default function About() {
  const infos = [
    {
      id: 1,
      title: "Experiences",
      img: experiences,
      content: [
        {
          id: 1,
          occupation: "Agricultural worker",
          entity: "Le Panier des Dunes",
          location: "Plouhinec",
          type: "Fixed-term contract",
          duration: "From August 2020 to october 2022",
          description:
            "My main tasks were to tend to the plants and collect vegetables, but I was also preparing commands and selling said vegetables at the market",
        },
        {
          id: 2,
          occupation: "Waiter & Bartender",
          entity: "Bistro Régent",
          location: "Bordeaux",
          type: "Fixed-term then open-ended contract",
          duration: "From August 2017 to october 2018",
          description:
            "I started as a waiter and soon enough I gained new responsibilities such as bartending and even becoming head waiter",
        },
        {
          id: 3,
          occupation: "Webmarketing assistant",
          entity: "Tuto.school",
          location: "Paris",
          type: "Internship",
          duration: "From March to April 2017",
          description:
            "I was in charge of performing competitive benchmarks, prototyping emails and flyers, and do some content redaction for the landing page",
        },
        {
          id: 4,
          occupation: "Community Manager",
          entity: "Kino Session",
          location: "Bordeaux",
          type: "Volunteer work",
          duration: "From May 2016 to March 2017",
          description:
            "I had to manage the association networks (especially Instagram), plus I was taking part in the events organization",
        },
      ],
    },
    {
      id: 2,
      title: "Education",
      img: education,
      content: [
        {
          id: 1,
          occupation: "Web Developer Training",
          entity: "Wild Code School",
          location: "Lyon",
          duration: "From February 2023 to July 2023",
          description: "Creating responsive apps with Javascript & React",
        },
        {
          id: 2,
          occupation: "Game Art Bachelor ",
          entity: "Institut Artline",
          location: "Remote",
          duration: "From October 2018 to June 2020",
          description: "3D Modeling, texturing, game engine integration",
        },
        {
          id: 3,
          occupation: "English/Japanese LEA degree",
          entity: "Université Montaigne",
          location: "Bordeaux",
          duration: "From September 2014 to June 2017",
          description: "written & spoken languages, marketing, law, culture",
        },
      ],
    },
    {
      id: 3,
      title: "Skills",
      img: skills,
      content: [
        {
          id: 1,
          title: "Hard skills",
          skills: [
            "Javascript",
            "React",
            "Node.js",
            "HTML",
            "CSS",
            "MySQL",
            "Express",
            "Github",
            "Agile Methodes",
          ],
        },
        {
          id: 2,
          title: "Soft skills",
          skills: [
            "Adaptability",
            "Open-minded",
            "Eager to learn",
            "Creativity",
          ],
        },
        {
          id: 3,
          title: "Languages",
          skills: [
            {
              id: 1,
              language: "French",
              level: "native",
            },
            {
              id: 2,
              language: "English",
              level: "advanced",
            },
            {
              id: 3,
              language: "Japanese",
              level: "basic",
            },
            {
              id: 4,
              language: "German",
              level: "basic",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className={styles.about} id="about">
      <Card {...infos[0]} />
      <Card {...infos[1]} />
      <Card {...infos[2]} />
    </div>
  );
}
