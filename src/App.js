import React, { useState } from 'react';
import Review from './Review';
import reviews from "./data"
function App() {

  return <main>
    <div>
      <h2 className='title'>Our Reviews</h2>
    <div className='underline'></div>
    </div>
    {reviews.map((review)=>{
      return(
        <Review review={review} key={review.id}/>
      )
    })}
    </main>
  
}

export default App;
