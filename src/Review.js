import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = ({ review }) => {
  const { id, name, job, image, text } = review;
  return (
    <section className="container">
      <div className="review">
        <div className="img-container">
          <div className="quote-icon">
            <FaQuoteRight />
          </div>
          <img src={image} alt={name} className="person-img" />
        </div>
        <div className="author"> {name}</div>
        <div className="job">{job}</div>
        <div className="info">{text}</div>
        <div >
          <FaChevronLeft className="prev-btn"/>
          <FaChevronRight className="next-btn"/>
        </div>
        <button className="random-btn">Surprise Me</button>
      </div>
    </section>
  );
};

export default Review;
