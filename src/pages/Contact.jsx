import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h2>Interested in a collaboration ?</h2>
      <h3>Or you just want to send some kind words</h3>
      <p>
        You can leave a message and I&apos;ll get back to you as soon as I can
      </p>
      <form action="submit" className={styles.form}>
        <label htmlFor="firstname">Firstname</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          autoComplete="on"
          placeholder="Johnny"
        />
        <label htmlFor="lastname">Lastname</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          autoComplete="on"
          placeholder="Silverhand"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="on"
          placeholder="johnny.silverhand@arasaka.com"
        />
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          name="subject"
          id="subject"
          autoComplete="off"
          placeholder="New mission"
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          autoComplete="off"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
