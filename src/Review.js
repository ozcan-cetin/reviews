import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import reviews from "./data";

const Review = () => {
  const [review, setReview] = useState(people)
  const [person, setPerson] = useState(0)

  const changePerson = () => {
    let number = Math.floor(Math.random() * review.length);
    if(person === number){
      number < review.length-1 ? number += 1 : number = 0;
    }
    setPerson(number)
  }

  // }
    // console.log(review);
  const { id, name, job, image, text } = review[`${person}`];
  return (
      <div className="review">
        <div className="img-container">
          <div className="quote-icon">
            <FaQuoteRight />
          </div>
          <img src={image} alt={name} className="person-img" />
        </div>
        <h4 className="author"> {name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div >
          <FaChevronLeft className="prev-btn" onClick={()=>setPerson(person !== 0 ? person - 1 : review.length-1)}/>
          <FaChevronRight className="next-btn" onClick={()=>setPerson(person !== review.length-1 ? person + 1 : 0)}/>
        </div>
        <button className="random-btn" onClick={()=>changePerson()}>Surprise Me</button>
      </div>
  );
};

export default Review;
