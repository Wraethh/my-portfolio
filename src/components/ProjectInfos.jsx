import styles from "./ProjectInfos.module.css";

export default function ProjectInfos({ ...project }) {
  return (
    <div className={styles.projectInfos}>
      <h1>{project.title}</h1>
      <h3>Developped in {project.duration}</h3>
      <p>{project.description}</p>
      <ul>
        {project.stack.map((stack, index) => (
          <li key={index}>{stack}</li>
        ))}
      </ul>
    </div>
  );
}
