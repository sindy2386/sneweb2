import React, { useRef, useState, useEffect } from 'react';
import { landingOne } from '../images/ImgAssets';
import bts1 from '../video/bts1.MP4';
import bts2 from '../video/bts2.mp4';
import bts3 from '../video/bts3.mp4';
import bts4 from '../video/bts4.mp4';
import bts5 from '../video/bts5.mp4';
import bts6 from '../video/bts6.MP4';
import bts7 from '../video/bts7.MP4';
import bts8 from '../video/bts8.mp4';
import Navbar from '../Navbar/Navbar';
import Stars from '../objects/Stars';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BTS = () => {
  const videos = [bts1, bts2, bts3, bts4, bts5, bts6, bts7, bts8];
  const sliderRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const currentVideo = document.querySelector('.slick-active video');
    if (currentVideo) {
      if (isPlaying) {
        currentVideo.play();
        currentVideo.muted = false; // Ensure video is not muted when playing
      } else {
        currentVideo.pause();
        // No need to explicitly mute since pausing stops the sound
      }
    }
  }, [isPlaying]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    beforeChange: (current, next) => {
      if (current !== next) {
        const currentVideo = document.querySelector('.slick-slide[data-index="' + current + '"] video');
        if (currentVideo) {
          currentVideo.pause();
          currentVideo.currentTime = 0; // Optional: Reset the video to the beginning when you leave the slide
        }
      }
    },
    afterChange: (current) => {
      const nextVideo = document.querySelector('.slick-slide[data-index="' + current + '"] video');
      if (nextVideo && isPlaying) {
        nextVideo.play();
        nextVideo.muted = false; // Ensure video is not muted after change
      }
    },
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Play button SVG component
  const PlayIcon = () => (
    <svg viewBox="0 0 24 24" width="56" height="56" fill="red">
      <path d="M8 5v14l11-7z" />
    </svg>
  );

  // Pause button SVG component
  const PauseIcon = () => (
    <svg viewBox="0 0 24 24" width="56" height="56" fill="red">
      <path d="M6 19h4V5H6zm8-14v14h4V5z" />
    </svg>
  );

  return (
    <div className="flex items-center justify-center fixed w-full h-full">
      <img src={landingOne} alt="Background" className="absolute w-full h-full object-cover -z-10" />
      <Navbar />
      <Stars />
      <div className="absolute z-20 top-0 left-0 w-full h-full flex flex-col items-center justify-start bg-black bg-opacity-50 pt-10 sm:pt-32" style={{ clipPath: 'polygon(50% 0%, 100% 30%, 80% 100%, 20% 100%, 0% 30%)' }}>
        <h2 className="font-customThree text-6xl tracking-tight text-white sm:text-8xl shadow-black text-center mb-12">
          Behind The Scenes
        </h2>
        <div className="tv-frame">
          <Slider ref={sliderRef} {...settings}>
            {videos.map((src, index) => (
              <div key={index} className="">
                <video src={src} className="h-[500px] w-full" muted={!isPlaying}></video>
              </div>
            ))}
          </Slider>
        </div>
        <div className="video-controls button-style-5">
          <button onClick={handlePlayPause}>
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BTS;
