import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [review, setReview] = useState(people)
  const [person, setPerson] = useState(0)

  const changePerson = () => {
    const number = Math.floor(Math.random() * (review.length-1));
    if(person !== number){
      setPerson(number)
    }
  }

  // }
    // console.log(review);
  const { id, name, job, image, text } = review[`${person}`];
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
          <FaChevronLeft className="prev-btn" onClick={()=>setPerson(person !== 0 ? person - 1 : review.length-1)}/>
          <FaChevronRight className="next-btn" onClick={()=>setPerson(person !== review.length-1 ? person + 1 : 0)}/>
        </div>
        <button className="random-btn" onClick={()=>changePerson()}>Surprise Me</button>
      </div>
    </section>
  );
};

export default Review;
