import React, { Component } from "react";
import Slider from "react-slick";

function Card({ data }) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    arrows: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container container-fluid mx-auto my-9 font-mont overflow-hidden">
      <h2 className="heading pb-9 text-center px-8">
       {data.heading}
      </h2>
      <Slider {...settings} initialSlide={2}>
        {data.cards.map((item, index) => {
          return (
            <div className="px-3" key={index}>
              <div className="card">
                <img
                  src={item.image}
                  className="w-full rounded-t-lg h-auto"
                  alt="image not found"
                />
                <div className="absolute right-2 top-2 px-2 py-1 rounded-md text-white bg-secondary text-[8px]">
                  <p>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span>
                      <i className="fas fa-star text-black"></i>
                    </span>
                  </p>
                  <p className="text-[14px] font-semibold">
                    &nbsp;{item.rating}
                  </p>
                </div>
                <div className="card-info1 current-div">
                  <p className="card-tittle">{item.title}</p>
                  <p className="card-subtittle">{item.location}</p>
                  <div className="card-div-btn">
                    <i className="font-semibold">
                      <i className="fas fa-check-circle me-2"></i>
                      {item.assured}
                    </i>
                    <button className="card-btn1">{item.link.title}</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* <div className="px-3">
          <div className="card">
            <img src={img_1} className="w-full rounded-t-lg" height="247px" alt="image not found"/>
            <div className="absolute right-2 top-2 px-2 py-1 rounded-md text-white bg-secondary text-[8px]">
                <p><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><span><i className="fas fa-star text-black"></i></span></p>
                <p className="text-[14px] font-semibold">&nbsp;4.0</p>
            </div>
            <div className="card-info1 current-div">
              <p className="card-tittle">Fitness Camp. Pune</p>        
              <p className="card-subtittle">Westport , Baner Pune</p>        
              <div className="card-div-btn">
                <i className="font-semibold"><i className="fas fa-check-circle me-2"></i>Metafit Assured</i>
                <button className="card-btn1">Explore</button>
              </div>
            </div>
          </div>
        </div> 

        <div className="px-3">
          <div className="card">
            <img src={img_1} className="w-full rounded-t-lg" height="247px" alt="image not found"/>
            <div className="absolute right-2 top-2 px-2 py-1 rounded-md text-white bg-secondary text-[8px]">
                <p><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><span><i className="fas fa-star text-black"></i></span></p>
                <p className="text-[14px] font-semibold">&nbsp;4.0</p>
            </div>
            <div className="card-info1 current-div">
              <p className="card-tittle">Fitness Camp. Pune</p>        
              <p className="card-subtittle">Westport , Baner Pune</p>        
              <div className="card-div-btn">
                <i className="font-semibold"><i className="fas fa-check-circle me-2"></i>Metafit Assured</i>
                <button className="card-btn1">Explore</button>
              </div>
            </div>
          </div>
        </div> 

        <div className="px-3">
          <div className="card">
            <img src={img_1} className="w-full rounded-t-lg" height="247px" alt="image not found"/>
            <div className="absolute right-2 top-2 px-2 py-1 rounded-md text-white bg-secondary text-[8px]">
                <p><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><span><i className="fas fa-star text-black"></i></span></p>
                <p className="text-[14px] font-semibold">&nbsp;4.0</p>
            </div>
            <div className="card-info1 current-div">
              <p className="card-tittle">Fitness Camp. Pune</p>        
              <p className="card-subtittle">Westport , Baner Pune</p>        
              <div className="card-div-btn">
                <i className="font-semibold"><i className="fas fa-check-circle me-2"></i>Metafit Assured</i>
                <button className="card-btn1">Explore</button>
              </div>
            </div>
          </div>
        </div> 
       
        <div className="px-3">
          <div className="card">
            <img src={img_1} className="w-full rounded-t-lg" height="247px" alt="image not found"/>
            <div className="absolute right-2 top-2 px-2 py-1 rounded-md text-white bg-secondary text-[8px]">
                <p><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><span><i className="fas fa-star text-black"></i></span></p>
                <p className="text-[14px] font-semibold">&nbsp;4.0</p>
            </div>
            <div className="card-info1 current-div">
              <p className="card-tittle">Fitness Camp. Pune</p>        
              <p className="card-subtittle">Westport , Baner Pune</p>        
              <div className="card-div-btn">
                <i className="font-semibold"><i className="fas fa-check-circle me-2"></i>Metafit Assured</i>
                <button className="card-btn1">Explore</button>
              </div>
            </div>
          </div>
        </div>  */}
      </Slider>
      <p className="text-center  mt-4 ">
        <a href={data.action.href} className="font-bold underline md:text-2xl text-sm pt-6 ">
          {data.action.title}
        </a>
      </p>
    </div>
  );
}

export default Card;
