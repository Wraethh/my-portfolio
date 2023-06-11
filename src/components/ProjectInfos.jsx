import styles from "./ProjectInfos.module.css";
import { Link } from "react-router-dom";
import githubLogo from "../assets/github-logo.svg";
import websiteImg from "../assets/website.svg";

export default function ProjectInfos({ ...project }) {
  return (
    <div className={styles.projectInfos}>
      <h1>{project.title}</h1>
      <h3>Developped in {project.duration}</h3>
      <p>{project.description}</p>
      <h3>Stack :</h3>
      <ul>
        {project.stack.map((stack, index) => (
          <li key={index}>{stack}</li>
        ))}
      </ul>
      <div className={styles.links}>
        <div className={styles.github}>
          <Link to={project.github}>
            <img src={githubLogo} alt="github logo" />
          </Link>
        </div>
        {project.link ? (
          <div className={styles.website}>
            <Link to={project.link}>
              <img src={websiteImg} alt="website image" />
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
