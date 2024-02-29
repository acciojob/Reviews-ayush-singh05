import { useState } from "react";

const Review = ({ name, job, image, text }) => {
  return (
    <div>
      <div style={{ border: "2px solid black" }}>
        <img className="preson-img" src={image} alt="image" width={"100px"} />
        <p id="author-id" className="author">
          Name: {name}
        </p>
        <p className="job">Job: {job}</p>
        <p className="info">Text: {text}</p>
      </div>
      <div></div>
    </div>
  );
};

export default Review;
