import styles from "./Card.module.css";

export default function Card({ ...infos }) {
  //   const isScrollable = () => {
  //     return content.scrollHeight > content.clientHeight;
  // It's not enough because the element's `overflow-y` style can be set as `hidden`
  // In those cases, the scrollbar isn't shown
  // const overflowYStyle = window.getComputedStyle(ele).overflowY;
  // const isOverflowHidden = overflowYStyle.indexOf("hidden") !== -1;
  // return hasScrollableContent && !isOverflowHidden;
  //   };

  // const content = document.getElementsByClassName("content");
  // content.scrollTop = 100;
  // content.scrollLeft = 150;

  // let pos = { top: 0, left: 0, x: 0, y: 0 };

  // const mouseDownHandler = function (e) {
  //   // Change the cursor and prevent user from selecting the text
  //   content.style.cursor = "grabbing";
  //   content.style.userSelect = "none";

  //   pos = {
  //     // The current scroll
  //     left: content.scrollLeft,
  //     top: content.scrollTop,
  //     // Get the current mouse position
  //     x: e.clientX,
  //     y: e.clientY,
  //   };

  //   const mouseMoveHandler = function (e) {
  //     // How far the mouse has been moved
  //     const dx = e.clientX - pos.x;
  //     const dy = e.clientY - pos.y;

  //     // Scroll the element
  //     content.scrollTop = pos.top - dy;
  //     content.scrollLeft = pos.left - dx;
  //   };

  //   const mouseUpHandler = function () {
  //     document.removeEventListener("mousemove", mouseMoveHandler);
  //     document.removeEventListener("mouseup", mouseUpHandler);

  //     content.style.cursor = "grab";
  //     content.style.removeProperty("user-select");
  //   };

  //   document.addEventListener("mousemove", mouseMoveHandler);
  //   document.addEventListener("mouseup", mouseUpHandler);
  // };

  // const parent = document.getElementsByClassName("content");

  // let startY;
  // let scrollTop;
  // let isDown;

  // function mouseDownHandler(e) {
  //   isDown = true;
  //   startY = e.pageY - parent.offsetTop;
  //   scrollTop = parent.scrollTop;
  // }
  // function mouseUpHandler() {
  //   isDown = false;
  // }
  // function mouseMoveHandler(e) {
  //   if (isDown) {
  //     e.preventDefault();
  //     //Move verticaly
  //     const y = e.pageY - parent.offsetTop;
  //     const walkY = y - startY;
  //     parent.scrollTop = scrollTop - walkY;
  //   }
  // }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.cardFront}>
          <h2>{infos.title}</h2>
          <img src={infos.img} alt="" />
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
