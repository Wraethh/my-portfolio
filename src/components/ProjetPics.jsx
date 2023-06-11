import PropTypes from "prop-types";
import styles from "./ProjectPics.module.css";
import { useState } from "react";

export default function ProjetPics({ handleClick, ...project }) {
  const [big, setBig] = useState(false);

  const handleClickImg = (e) => {
    handleClick(e);
    setBig(true);
  };

  const handleClickBigImg = () => {
    setBig(false);
  };

  return (
    <div className={styles.projectPics}>
      <div
        className={
          !big
            ? styles.displayedImage
            : `${styles.displayedImage} ${styles.displayBig}`
        }
      >
        <img
          src={project.displayedImage}
          alt={`displayed image of ${project.title} project`}
          id={project.project}
          onClick={handleClickBigImg}
        />
      </div>
      <div>
        {project.images.map((image) => (
          <img
            key={image.id}
            role="button"
            src={image.src}
            onClick={(e) => handleClickImg(e)}
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
