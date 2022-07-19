import React, { useState } from "react";
import Review from "./Review";
// import reviews from "./data";
function App() {
  return (
    <main>
      <div>
        <h2 className="title">Our Reviews</h2>
        <div className="underline"></div>
      </div>
      <Review />
    </main>
  );
}

export default App;
