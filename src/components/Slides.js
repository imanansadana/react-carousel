import React, { useState } from "react";

function Slides({ slides }) {
  const [currentSlide, setcurrentSlide] = useState(0);
  const nextSlide = () => {
    var next = 1 + currentSlide;
    setcurrentSlide(next);
  };
  const prevSlide = () => {
    var prev = currentSlide - 1;
    setcurrentSlide(prev);
  };
  const reset = () => {
    setcurrentSlide(0);
  };
  return (
    <div>
      <div id="navigation" className="text-center">
        {console.log(currentSlide)}
        <button
          onClick={reset}
          disabled={currentSlide === 0 ? true : false}
          data-testid="button-restart"
          className="small outlined"
        >
          Restart
        </button>
        <button
          disabled={currentSlide === 0 ? true : false}
          onClick={prevSlide}
          data-testid="button-prev"
          className="small"
        >
          Prev
        </button>
        <button
          disabled={currentSlide === slides.length - 1 ? true : false}
          onClick={nextSlide}
          data-testid="button-next"
          className="small"
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[currentSlide].title}</h1>
        <p data-testid="text">{slides[currentSlide].text}</p>
      </div>
    </div>
  );
}

export default Slides;
