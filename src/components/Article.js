import React from "react";
function Article({ title, date = "January 1, 1970", preview, minutes }) {
    let emoji = "";
  
    if (minutes < 30) {
      const cups = Math.ceil(minutes / 5);
      emoji = " ".repeat(cups);
    } else {
      const bentos = Math.ceil(minutes / 10);
      emoji = " ".repeat(bentos);
    }
  
    return (
      <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>
          {emoji} {minutes} min read
        </p>
        <p>{preview}</p>
      </article>
    );
  }
  export default Article;