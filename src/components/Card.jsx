import styles from "./Card.module.css";

export default function Card({ ...infos }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.cardFront}>
          <h2>{infos.title}</h2>
          <div>
            <img src={infos.img} alt={`${infos.title} logo`} />
          </div>
        </div>
        <div className={styles.cardBack}>
          <div className={styles.content}>
            {infos.content.map((content) => (
              <div key={content.id}>
                <h3>
                  {content.occupation ? content.occupation : content.title}
                </h3>
                <h4>
                  {content.entity && content.location
                    ? `${content.entity} - ${content.location}`
                    : null}
                </h4>
                <h5>{content.duration ? content.duration : null}</h5>
                {content.description ? <p>{content.description}</p> : null}
                {content.skills ? (
                  <ul>
                    {content.skills.map((skill) => (
                      <li key={skill.id ? skill.id : skill}>
                        {skill.language
                          ? `${skill.language} - ${skill.level}`
                          : skill}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <div className={styles.separator}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
