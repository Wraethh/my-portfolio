import styles from "./Contact.module.css";
import FormInput from "../components/FormInput";
import { useContext, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";

export default function Contact() {
  const { startAnim, setStartAnim } = useContext(GlobalContext);

  const [values, setValues] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const inputs = [
    {
      id: 1,
      type: "text",
      name: "fullname",
      autoComplete: "on",
      placeholder: "Johnny Silverhand",
      label: "Fullname",
    },
    {
      id: 2,
      type: "email",
      name: "email",
      autoComplete: "on",
      placeholder: "johnny.silverhand@arasaka.com",
      label: "Email",
    },
    {
      id: 3,
      type: "text",
      name: "subject",
      autoComplete: "off",
      placeholder: "New mission",
      label: "Subject",
    },
    {
      id: 4,
      type: "text",
      name: "message",
      autoComplete: "off",
      placeholder: "",
      label: "Message",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    setStartAnim(true);
    setTimeout(() => {
      setStartAnim(false);
    }, 500);
  };

  return (
    <div className={styles.contact} id="contact">
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.leftPart}>
          <h2>Interested in a collaboration ?</h2>
          <h3>Or you just want to send some kind words</h3>
          <p>
            You can leave a message and I&apos;ll get back to you as soon as I
            can
          </p>
          <FormInput
            {...inputs[0]}
            value={values[inputs[0].name]}
            handleChange={handleChange}
          />
          <FormInput
            {...inputs[1]}
            value={values[inputs[1].name]}
            handleChange={handleChange}
          />
        </div>
        <div className={styles.rightPart}>
          <FormInput
            {...inputs[2]}
            value={values[inputs[2].name]}
            handleChange={handleChange}
          />
          <div className={styles.textArea}>
            <label htmlFor={inputs[3].id}>{inputs[3].label}</label>
            <textarea
              {...inputs[3]}
              onChange={(e) => handleChange(e)}
              value={values[inputs[3].name]}
            />
          </div>
          <div
            className={
              startAnim === false
                ? styles.button
                : `${styles.button} ${styles.buttonAnim}`
            }
          >
            <button type="submit" onClick={() => handleClick()}>
              Submit
            </button>
            <div
              className={startAnim === false ? styles.buttonBase : null}
            ></div>
          </div>
        </div>
      </form>
    </div>
  );
}
