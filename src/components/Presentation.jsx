import styles from "./Presentation.module.css";
import profilepic from "../assets/profile-pic.png";
import { useState } from "react";

export default function Presentation() {
  const [openedModal, setOpenedModale] = useState(true);
  const [startAnim, setStartAnim] = useState(false);

  const handleClick = () => {
    setStartAnim(true);
    setTimeout(() => {
      setOpenedModale(false);
    }, 1900);
  };

  if (openedModal === false) return;

  return (
    <div className={styles.presentation}>
      <div className={styles.pictureFrame}>
        <div
          className={
            startAnim === false
              ? styles.frame
              : `${styles.frame} ${styles.sinkAnim}`
          }
        >
          <img src={profilepic} alt="" />
        </div>
      </div>
      <div
        className={
          startAnim === false ? styles.bar : `${styles.bar} ${styles.openAnim}`
        }
      ></div>
      <h1>Hi ! My name is Guillaume</h1>
      <p>
        I&apos;m a web developer and I like creative coding as much as databases
      </p>
      <button type="button" onClick={() => handleClick()}>
        See More
      </button>
    </div>
  );
}
