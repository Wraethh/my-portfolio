import styles from "./Navbar.module.css";
import logo from "../assets/logo.svg";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  return (
    <div className={styles.background}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            <Link to="#about" smooth>
              About
            </Link>
          </li>
          <li>
            <Link to="#projects" smooth>
              Projects
            </Link>
          </li>
          <li>
            <Link to="#contact" smooth>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
