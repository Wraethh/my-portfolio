import PropTypes from "prop-types";
import styles from "./Project.module.css";
import ProjectInfos from "./ProjectInfos";
import ProjetPics from "./ProjetPics";

export default function Project({ handleClick, ...project }) {
  return (
    <div className={styles.project}>
      <ProjetPics {...project} handleClick={handleClick} />
      <ProjectInfos {...project} />
    </div>
  );
}

Project.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
