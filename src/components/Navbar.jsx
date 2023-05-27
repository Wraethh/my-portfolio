import styles from "./Navbar.module.css";
import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <>
      {/* <div className={styles.empty}></div> */}
      <div className={styles.background}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}
