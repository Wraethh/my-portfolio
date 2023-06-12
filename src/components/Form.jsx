import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { useContext, useRef } from "react";
import GlobalContext from "../contexts/GlobalContext";
import styles from "./Form.module.css";

export default function Form() {
  const { startAnim, setStartAnim } = useContext(GlobalContext);
  const form = useRef();

  const handleClick = () => {
    setStartAnim(true);
    setTimeout(() => {
      setStartAnim(false);
    }, 500);
    if (formik.errors.fullName) {
      toast.error(`${formik.errors.fullName}`, {
        className: styles.toastNotif,
        position: toast.POSITION.BOTTOM_RIGHT,
        icon: () => (
          <div className={styles.iconError}>
            <span>!</span>
          </div>
        ),
      });
    }
    if (formik.errors.email) {
      toast.error(`${formik.errors.email}`, {
        className: styles.toastNotif,
        position: toast.POSITION.BOTTOM_RIGHT,
        icon: () => (
          <div className={styles.iconError}>
            <span>!</span>
          </div>
        ),
      });
    }
    if (formik.errors.subject) {
      toast.error(`${formik.errors.subject}`, {
        className: styles.toastNotif,
        position: toast.POSITION.BOTTOM_RIGHT,
        icon: () => (
          <div className={styles.iconError}>
            <span>!</span>
          </div>
        ),
      });
    }
    if (formik.errors.message) {
      toast.error(`${formik.errors.message}`, {
        className: styles.toastNotif,
        position: toast.POSITION.BOTTOM_RIGHT,
        icon: () => (
          <div className={styles.iconError}>
            <span>!</span>
          </div>
        ),
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(40, "Full name must be 40 characters or less")
        .required("Full name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      subject: Yup.string()
        .max(30, "Subject must be 30 characters or less")
        .required("Subject is required"),
      message: Yup.string()
        .max(1000, "Message must be 1000 characters or less")
        .required("Message is required"),
    }),
    // Send email and toast success
    onSubmit: () => {
      emailjs
        .sendForm(
          "contact_service",
          "contact_form",
          form.current,
          "LHHKiG-xspn5WqYka"
        )
        .then(
          () => {
            toast.success("Message sent, thank you !", {
              className: styles.toastNotif,
              position: toast.POSITION.BOTTOM_RIGHT,
              icon: () => (
                <div className={styles.iconSuccess}>
                  <span>✔</span>
                </div>
              ),
            });
          },
          (error) => {
            toast.error(`${error.text}`, {
              className: styles.toastNotif,
              position: toast.POSITION.BOTTOM_RIGHT,
              icon: () => (
                <div className={styles.iconError}>
                  <span>!</span>
                </div>
              ),
            });
          }
        );
    },
  });

  return (
    <>
      <form ref={form} className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.infos}>
          <h2>Interested in a collaboration ?</h2>
          <h3>Or you just want to send some kind words</h3>
          <p>
            You can leave a message and I&apos;ll get back to you as soon as I
            can
          </p>
        </div>
        <div className={styles.input1}>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            placeholder="Johnny Silverhand"
            {...formik.getFieldProps("fullName")}
          />
        </div>
        <div className={styles.input2}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="johnny.svh@arasaka.com"
            {...formik.getFieldProps("email")}
          />
        </div>
        <div className={styles.input3}>
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            type="text"
            placeholder="New mission"
            {...formik.getFieldProps("subject")}
          />
        </div>
        <div className={styles.textArea}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            cols="30"
            rows="10"
            {...formik.getFieldProps("message")}
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
          <div className={startAnim === false ? styles.buttonBase : null}></div>
        </div>
        <ToastContainer limit={4} />
      </form>
    </>
  );
}
