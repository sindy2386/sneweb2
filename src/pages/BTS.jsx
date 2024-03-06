import React from 'react';
import { SP2 } from '../images/ImgAssets';
import bts1 from '../video/bts1.MP4';
import bts2 from '../video/bts2.mp4';
import bts3 from '../video/bts3.mp4';
import bts4 from '../video/bts4.mp4';
import bts5 from '../video/bts5.mp4';
import bts6 from '../video/bts6.MP4';
import bts7 from '../video/bts7.MP4';
import bts8 from '../video/bts8.mp4';
import Navbar from '../Navbar/Navbar';

const BTS = () => {
  // Define an array for video sources
  const videos = [bts1, bts2, bts3, bts4, bts5, bts6, bts7, bts8];

  return (
    <div className='min-h-screen'>
      <video autoPlay loop muted style={{
        position: "absolute",
        width: "100%",
        left: "50%",
        top: "50%",
        height: "100%",
        objectFit: "cover",
        transform: "translate(-50%, -50%)",
        zIndex: "-1"
      }}>
        <source src={SP2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-full">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 m-4">
          {videos.map((videoSrc, index) => (
            <div key={index} className="relative h-128" style={{ maxHeight: '500px' }}> {/* Adjust size here */}
              <video
                className="w-full h-full rounded-lg cursor-pointer object-cover"
                controls
                onClick={(e) => e.currentTarget.play()}
              >
                <source src={videoSrc} type={`video/${videoSrc.split('.').pop()}`} />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BTS;
