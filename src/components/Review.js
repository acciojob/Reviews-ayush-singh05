import { useState } from "react";

const Review = ({ name, job, image, text }) => {
  return (
    <div>
      <div style={{ border: "2px solid black" }}>
        <img className="preson-img" src={image} alt="image" width={"100px"} />
        <p id="author-id" className="author">
          {name}
        </p>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
      </div>
      <div></div>
    </div>
  );
};

export default Review;
