import PropTypes from "prop-types";
import styles from "./ProjectPics.module.css";

export default function ProjetPics({ handleClick, ...project }) {
  return (
    <div className={styles.projectPics}>
      <div>
        <img
          src={project.displayedImage}
          alt={`displayed image of ${project.title} project`}
        />
      </div>
      <div>
        {project.images.map((image) => (
          <img
            key={image.id}
            role="button"
            src={image.src}
            onClick={handleClick}
            alt={`preview picture ${image.id} of ${project.title} project`}
            className={project.project}
          />
        ))}
      </div>
    </div>
  );
}

ProjetPics.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
