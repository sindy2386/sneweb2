import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Navbar/Navbar';
import { libraryRecord } from '../video/VideoAssets';
import { SongOne, SongTwo, SongThree } from '../audio/audioAssets'; // Originals
import { flyButterfly, strawberryCough, tension } from '../images/ImgAssets'; // Original images
import { MixOne, MixTwo, MixThree, MixFour, MixFive, MixSix, MixSeven, MixEight} from '../audio/audioAssets'; // Mixes
import { home, twentyFive, nenjil, echo, feelsLikeHome, DWMD, explode, July13} from '../images/ImgAssets'; // Mixes images
import { ProductionOne, ProductionTwo, ProductionThree, ProductionFour, ProductionFive, ProductionSix, ProductionSeven, ProductionEight, } from '../audio/audioAssets'; // Productions
import { uhSavage, she, ntmy, lml, summer, womanLikeMe, SSLT, you,  } from '../images/ImgAssets';
import Carousel from 'react-bootstrap/Carousel';
import { FiPlayCircle, FiPauseCircle } from 'react-icons/fi';

const library = [
  { name: 'Fly', src: SongOne, image: flyButterfly },
  { name: 'Strawberry Cough', src: SongTwo, image: strawberryCough },
  { name: 'Tension', src: SongThree, image: tension },
  { name: 'Home', src: MixOne, image: home },
  { name: 'Twenty Five', src: MixTwo, image: twentyFive },
  { name: 'Nenjil', src: MixThree, image: nenjil },
  { name: 'Echo', src: MixFour, image: echo },
  { name: 'Feels Like Home', src: MixFive, image: feelsLikeHome },
  { name: 'Dance with Me Darling', src: MixSix, image: DWMD },
  { name: 'Explode', src: MixSeven, image: explode },
  { name: 'July', src: MixEight, image: July13 },
  { name: 'Ungodly Hour/Savage', src: ProductionOne, image: uhSavage },
  { name: 'SHE', src: ProductionTwo, image: she },
  { name: 'Nice To Meet Ya', src: ProductionThree, image: ntmy },
  { name: 'Let Me Loose', src: ProductionFour, image: lml },
  { name: 'Summer That Was', src: ProductionFive, image: summer },
  { name: 'Woman Like Me', src: ProductionSix, image: womanLikeMe },
  { name: 'Say So/Like That', src: ProductionSeven, image: SSLT },
  { name: 'You', src: ProductionEight, image: you },
];

const Library = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(new Audio(library[0].src));

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;

    audio.src = library[currentSongIndex].src;
    setDuration(audio.duration);

    const onPlay = () => {
      setIsPlaying(true);
      setDuration(audio.duration);
    };

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);

    audio.addEventListener('play', onPlay);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', () => setDuration(audio.duration));

    if (isPlaying) {
      audio.play().catch(error => console.log("Playback was prevented on source change.", error));
    }

    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('timeupdate', onTimeUpdate);
    };
  }, [currentSongIndex]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSelect = (selectedIndex, e) => {
    setCurrentSongIndex(selectedIndex);
  };

  const handleTimeSliderChange = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="flex flex-col h-screen relative overflow-hidden">
      
      <video className="flex-grow object-cover w-full h-full z-0" autoPlay loop muted>
        <source src={libraryRecord} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex justify-center items-center">
      <Navbar />
        <div className="w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/ z-20">
          <Carousel activeIndex={currentSongIndex} onSelect={handleSelect}>
            {library.map((song, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={song.image}
                  alt={`Slide ${index}`}
                />
                <Carousel.Caption>
                <h3 className='font-customThree text-4xl text-rose-800 mb-4' 
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.8)', // More subtle background
                      padding: '0.1em 0.3em', // Reduced padding
                      borderRadius: '4px', 
                      display: 'inline-block' // Ensures background doesn’t extend beyond text
                    }}>
                  {song.name}
                </h3>
                  <p className='font-customFour text-base my-2'>
                    <span style={{ background: 'black', padding: '0.5rem' }}>Click the play button to listen.</span>
                  </p>
                  <button onClick={togglePlayPause} className="btn btn-primary my-2">
                    {isPlaying && currentSongIndex === index ? <FiPauseCircle size={24} /> : <FiPlayCircle size={24} />}
                  </button>
                  <div>
                    <input
                      type="range"
                      value={currentTime}
                      step="1"
                      min="0"
                      max={duration}
                      onChange={handleTimeSliderChange}
                      className="w-full"
                    />
                  </div>
                </Carousel.Caption>

              </Carousel.Item>
            ))}
          </Carousel>
          <audio ref={audioRef} preload="auto" />
        </div>
      </div>
    </div>
  );
};

export default Library;
