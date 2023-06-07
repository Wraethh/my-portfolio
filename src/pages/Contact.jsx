import Form from "../components/Form";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact} id="contact">
      <div>
        <Form />
      </div>
    </div>
  );
}
