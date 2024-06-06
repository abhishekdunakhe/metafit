import React from "react";
import Slider from "react-slick";

function VariableWidth() {
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div style={{ width: 300 }}>
          <p>300</p>
        </div>
        <div style={{ width: 200 }}>
          <p>200</p>
        </div>
        <div style={{ width: 100 }}>
          <p>100</p>
        </div>
        <div style={{ width: 300 }}>
          <p>300</p>
        </div>
        <div style={{ width: 200 }}>
          <p>200</p>
        </div>
        <div style={{ width: 100 }}>
          <p>100</p>
        </div>
      </Slider>
    </div>
  );
}

export default VariableWidth;

