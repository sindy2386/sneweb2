// 2-27-24 react-slick carousel with one image


import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TimelineItem = ({ data }) => (
  <div className="timeline-item font-customTwo">
    <div className="timeline-date">{data.date}</div>
    <div className="timeline-content">
      <h3 className="neon-glow">{data.title}</h3>
      <p className="text-14xl">{data.description}</p>
      <div className="image-background" style={{ backgroundImage: `url(${data.imageOne})` ,border: '2px solid #fff', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <div className="overlay-text">Your Text Here</div>
      </div>
    </div>
  </div>
);

const Timeline = ({ timelineData }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="timeline-carousel">
      <Slider ref={sliderRef} {...settings}>
        {timelineData.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </Slider>
      <div className="timeline-navigation">
        <button onClick={goToPrev}></button>
        <button onClick={goToNext}></button>
      </div>
    </div>
  );
};

export default Timeline;
