import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { landingOne, 
        timelineImageOne, protoolsLogo, logicLogo, melodyneLogo, finaleLogo, 
        timelineImageTwo,
        timelineImageThree,
        timelineImageFour, timelineImageFive, timelineImageSix, mernstackLogo
         } from '../images/ImgAssets';
import Stars from './Stars';

const Timeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const slideTo = (index) => {
    const safeIndex = Math.max(0, Math.min(index, 7)); // 8 slides, index range is 0-7
    setCurrentIndex(safeIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleWheel = (event) => {
      if (!carouselRef.current) return;
      const delta = Math.sign(event.deltaY);
      slideTo(currentIndex + delta);
    };

    const element = carouselRef.current;
    if (element) {
      element.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (element) {
        element.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentIndex]);

  return (
    <div id='TimelineBigDiv' ref={carouselRef} className="relative bg-black h-screen overflow-hidden">

      {/* Slides Timeline */}
      <motion.div
        className="flex cursor-grab "
        drag="x"
        dragConstraints={{ right: 0, left: -(viewportWidth * (4)) }} // Adjust based on the number of slides -1
        dragElastic={0.05}
        animate={{ x: -currentIndex * viewportWidth }}
      >
        {/* Slide 1 - Starting my Journey */}
        <motion.div 
          className="min-w-full h-screen flex justify-center items-center bg-cover bg-center font-customTwo" 
          style={{ backgroundImage: `url(${landingOne})` }}
          >
            <Stars />
            <div className="text-6xl text-white font-bold">
              <motion.div className="min-w-full h-screen p-4 m-2 rounded-lg bg-black bg-opacity-40 text-black"> 
                <h2 className="text-7xl pt-8 neon-glow font-customTwo text-center">Starting my Journey</h2>
                <div className='flex text-3xl mx-12 mt-12'>
                  <div className='Slide 1 Column 1'>
                    <div className='text-white w-[750px]'>
                      Music and Technology have always been my twin passions. 
                      I honed my musical skills at the Berklee College of Music, 
                      specializing in Music Production/Engineering and Film Scoring. 
                    </div>  
                    <div className='text-white w-[750px] mt-16'>
                      I learned to utilize<span className='neon-glow-subtext'> industry standard softwares and equipment </span> 
                      for production, recording, editing, mixing & mastering audio
                    </div> 
                    <div id='pro tools/logic logos' className='flex'>
                      {/* Protools Logo */}
                      <div className='w-56 h-56 mt-24'>
                        <img src={protoolsLogo} /> 
                      </div> 
                      {/* Logic Logo */}
                      <div className='w-36 h-36 mt-24'>
                        <img src={logicLogo} /> 
                      </div>                        
                      {/* Melodyne Logo */}
                      <div className='w-48 h-48 mt-[72px] ml-10'>
                        <img src={melodyneLogo} />
                      </div>
                      {/* Finale Logo */}
                      <div className='w-36 h-36 mt-[95px] ml-10'>
                        <img src={finaleLogo} />
                      </div>
                    </div>
                  </div>
                  <div className='Slide 1 Column 2'>
                    <div>
                      <img className='ml-60 rounded-lg' src={timelineImageOne} 
                      style={{ border: '2px solid #fff', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}
                      />
                    </div>
                    <div className='mt-10 ml-32 text-white'>
                      My principal instrument was piano, as I’m classically trained, but I also delved deeply into vocal performance.
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
        </motion.div>
                
        {/* Slide 2 - Vocal Performance */}
        <motion.div 
          className="min-w-full h-screen flex justify-center items-center bg-cover bg-center font-customTwo" 
          style={{ backgroundImage: `url(${landingOne})` }}
          >
            <Stars />
            <div className="text-6xl text-white font-bold">
              <motion.div className="min-w-full h-screen p-4 m-2 rounded-lg bg-black bg-opacity-40 text-black"> 
                <h2 className="text-7xl pt-8 neon-glow font-customTwo text-center">Vocal Performance</h2>
                <div className='flex text-3xl mx-12'>
                  <div className='Slide 2 Column 1'>
                    <img className='mt-10 mr-20 rounded-lg' src={timelineImageTwo} 
                    style={{ border: '2px solid #fff', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}
                    />
                  </div>
                  <div className='Slide 2 Column 2 mt-4 mx-16'>
                    <div className='mt-5 text-white w-[750px]'>
                      As a vocalist, I had the opportunity to work with a very renowned ensemble in college, the 
                      <span className='neon-glow-subtext'> Berklee Indian Ensemble. </span> 
                    </div>  
                    <div className='mt-8 text-white w-[750px]'>
                      This ensemble gave me the chance to perform with and study the music of many renowned guest artists, 
                      such as Shreya Goshal, A.R. Rahman, Shankar Mahadevan, Zakir Hussain, Shadow and Light and countless others, 
                      applying many hindustani and Carnatic influences into my own music. 
                    </div>  
                    <div className='mt-8 text-white w-[750px]'>
                      Under the direction of Annette Philip, an outstanding educator and musician, 
                      I worked towards developing my abilities in vocal performance and 
                      received a scholarship through this ensemble for my dedication towards the group. 
                    </div> 
                  </div>
                </div>
              </motion.div>
            </div>
        </motion.div>

        {/* Slide 3 - Music Directing */}
        <motion.div 
          className="min-w-full h-screen flex justify-center items-center bg-cover bg-center font-customTwo" 
          style={{ backgroundImage: `url(${landingOne})` }}
          >
            <Stars />
            <div className="text-6xl text-white font-bold">
              <motion.div className="min-w-full h-screen p-4 m-2 rounded-lg bg-black bg-opacity-40 text-black"> 
                <h2 className="text-7xl pt-8 neon-glow font-customTwo text-center">Music Directing</h2>
                <div className='flex text-3xl'>
                  <div className='Slide 4 Column 1 mx-14'>
                    <div className='mt-10 text-white w-[750px]'>
                    I was also the Music Director and Vocal Arranger of Berklee’s All-Female acapella group, Treble Threat, 
                    in which I won the 
                    <span className='neon-glow-subtext'> outstanding arrangement award </span>
                    through the Annual ICCA (International Championship of Collegiate Acapella) Competition, 
                    for the arrangement of the entire set!
                    </div>  
                    <div className='text-white flex mt-2'>
                      <img className='w-[150px] h-[400px]' src={timelineImageFour} />
                      <div className='mt-20 ml-10'>
                      I would lead the team through creating the group arrangements for our performances/competitions 
                      and mixing all audio recordings for streaming service & video releases.
                      </div>
                    </div>  
                  </div>
                  <div className='Slide 4 Column 2 mx-10'>
                    <div className='mt-10 mr-16 text-white w-[900px]'>
                    Diving into the heart of <span className='neon-glow-subtext'> alternative rock</span>, I got to blend my love for 
                    music directing, vocal arranging, and producing with an awesome group of musicians in our band, 
                    "The Downfall"
                    </div> 
                    <div className='mt-10 flex'>
                      <img className='rounded-lg' src={timelineImageFive} 
                      style={{ border: '2px solid #fff', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', width: '200px', height: '200px'  }}
                      />
                      <div className='mt-10 text-white mx-20 '> <span className='font-black text-fuchsia-500 bg-pink-200'>Together, we released multiple singles and EP's</span> through our efforts in rehearsals, gigs, and studio sessions!</div>                
                    </div>
                    <div className='mt-10 text-white'>
                    <img className='rounded-lg' src={timelineImageSix} 
                      style={{ border: '2px solid #fff', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', width: '1000px', height: '200px'  }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
        </motion.div>

        {/* Slide 4 - Post-Graduation */}
        <motion.div 
          className="min-w-full h-screen flex justify-center items-center bg-cover bg-center font-customTwo" 
          style={{ backgroundImage: `url(${landingOne})` }}
          >
            <Stars />
            <div className="text-6xl text-white font-bold">
              <motion.div className="min-w-full h-screen p-4 m-2 rounded-lg bg-black bg-opacity-40 text-black"> 
                <h2 className="text-7xl pt-8 neon-glow font-customTwo text-center">Post-Graduation</h2>
                <div className='flex text-3xl mx-12'>
                  <div className='Slide 4 Column 1 mx-14'>
                    <div className='mt-10 text-white'>
                      My college years were not just about learning - they were about
                      <span className='neon-glow-subtext'> creating, leading, and innovating! </span>
                      From orchestrating compositions for video/film to mastering the art of audio engineering, 
                      each step has been a move towards a deeper understanding of how <span className='font-black text-fuchsia-500 bg-pink-200'>technology can amplify creativity.</span>
                    </div>  
                    <div className=' text-white mt-24'>
                      Post-graduation, my journey as a 
                      <span className='neon-glow-subtext'> freelance audio engineer </span>
                      began. 
                      This role has allowed me to both sharpen my technical skills in <span className='font-black text-fuchsia-500 bg-pink-200'>audio editing, recording, mixing, mastering,</span> and continue to curate collaboration amongst a diverse set of clients.
                    </div>  
                  </div>
                  <div className='Slide 4 Column 2 mx-8'>
                    <div className='mt-10 text-white'>
                      My time at The Record Co. (TRC), transitioning from a studio support team member to a 
                      <span className='neon-glow-subtext'> customer success manager</span>, 
                      has also given me a stronger foundation in <span className='font-black text-fuchsia-500 bg-pink-200'>leadership and operational management,</span> enhancing my ability to lead teams and manage complex projects. 
                    </div> 
                    <div className='mt-10 ml-24'>
                      <img className='rounded-lg' src={timelineImageThree} 
                      style={{ border: '2px solid #fff', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', width: '500px', height: '350px'  }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
        </motion.div>

        {/* Slide 5 - Web Development */}
        <motion.div 
          className="min-w-full h-screen flex justify-center items-center bg-cover bg-center font-customTwo" 
          style={{ backgroundImage: `url(${landingOne})` }}
          >
            <Stars />
            <div className="text-6xl text-white font-bold">
              <motion.div className="min-w-full h-screen p-4 m-2 rounded-lg bg-black bg-opacity-40 text-black"> 
                <h2 className="text-7xl pt-8 neon-glow font-customTwo text-center">Web Development</h2>
                <div className='flex text-3xl mx-12 mt-12'>
                  <div className='Slide 1 Column 1'>
                    <div className='text-white w-[750px] ml-14'>
                      In the last six months, my focus has shifted towards <span className='neon-glow-subtext'> web development </span>for Eternity Solutions, 
                      a tech services organization, allowing this fusion to find a new canvas. 
                    </div>  
                    <div className='text-white w-[750px] mt-16 ml-14'>
                      I’ve been able to expand my technical skills in areas such as 
                      the <span className='font-black text-fuchsia-500 bg-pink-200'> MERN stack, AI prompting, Javascript/HTML, TailwindCSS,</span> and more! 
                    </div> 
                    <div id='pro tools/logic logos' className='flex'>
                      {/* Web Dev Logo */}
                      <div className='mt-14'>
                        <img src={mernstackLogo} /> 
                      </div> 
                    </div>
                  </div>
                  <div className='Slide 1 Column 2'>
                    <div className='mt-10 ml-32 mx-8 text-white leading-loose'>
                      What truly excited me about Eternity Solutions however is the chance to blend my creative and technological sides. 
                      Here, I see a world where technology isn't just a tool, but a partner in 
                      <span className='font-black text-fuchsia-500 bg-pink-200'> creating experiences that <span className='neon-glow-subtext'>resonate</span> and <span className='neon-glow-subtext'>inspire.</span> </span>
                      It’s not just about coding or music; it’s about using these skills to craft transformative experiences! 
                        <span className='neon-glow-subtext'> *fun fact - I coded this website! :D*</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
        </motion.div>

        {/* Slide 6 - Project Management */}
        <motion.div 
          className="min-w-full h-screen flex justify-center items-center bg-cover bg-center font-customTwo" 
          style={{ backgroundImage: `url(${landingOne})` }}
          >
            <Stars />
            <div className="text-6xl text-white font-bold">
              <motion.div className="min-w-full h-screen p-4 m-2 rounded-lg bg-black bg-opacity-40 text-black"> 
                <h2 className="text-7xl pt-8 neon-glow font-customTwo text-center">Project Management</h2>
                <div className='flex text-3xl mx-12 mt-12'>
                  <div className='Slide 1 Column 1 mt-14 leading-snug'>
                    <div className='text-white w-[750px] ml-14'>
                      Alongside my passion for creativity and technology, I bring a <span className='font-black text-fuchsia-500 bg-pink-200'>deep commitment to organization and structure</span> in everything I do. 
                    </div>  
                    <div className='text-white w-[750px] mt-24 ml-14'>
                      At The Record Co (TRC), I've heavily utilized tools like Asana to manage projects, track operations, and ensure every task is aligned with our goals. 
                      This approach has not only streamlined our processes but also enhanced our team's efficiency and effectiveness.
                    </div> 
                  </div>
                  <div className='Slide 1 Column 2'>
                    <div className='mt-10 ml-32 mx-8 text-white leading-loose'>
                      For Eternity Solutions, I've implemented a similar strategy, creating a structured Trello board to streamline our workflow. 
                      This system helps us maintain clear timelines, organize meeting notes, and ensure that every task, big or small, is accounted for and progresses smoothly. 
                      I strongly believe that great achievements are not just born out of creativity and innovation but also out of meticulous planning and organization!
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
        </motion.div>

        {/* Slide 7 */}
        <motion.div 
          className="min-w-full h-screen flex justify-center items-center bg-cover bg-center font-customTwo" 
          style={{ backgroundImage: `url(${landingOne})` }}>
            <div className="text-6xl text-white font-bold">
              <motion.div className="min-w-full h-screen p-4 m-2 rounded-lg bg-black bg-opacity-40 text-black"> 
                <h2 className="text-4xl pt-8 neon-glow font-customTwo text-center">Starting my Journey</h2>
                <div className='pt-10 mx-25 pl-12 text-2xl text-white tracking-wide'>
                  Music and Technology have always been my twin passions. 
                  I honed my musical skills at the Berklee College of Music, 
                  specializing in Music Production/Engineering and Film Scoring. 
                </div>
                <div className='mt-10 mx-25 ml-12 text-2xl text-white tracking-wide'>
                  I learned to utilize industry standard softwares including Pro Tools, Logic Pro X, Melodyne, Soundtoys, Fabfilter, etc. My principal instrument was piano, as I’m classically trained, but I also delved deeply into vocal performance.
                </div>
                <div>
                  <img className='ml-40 mt-10 rounded-lg' src={timelineImageOne} style={{ border: '2px solid #fff', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}/>
                </div>
              </motion.div>
            </div>
        </motion.div>

        {/* Slide 8 */}
        <motion.div 
          className="min-w-full h-screen flex justify-center items-center bg-cover bg-center font-customTwo" 
          style={{ backgroundImage: `url(${landingOne})` }}>
            <div className="text-6xl text-white font-bold">
              <motion.div className="min-w-full h-screen p-4 m-2 rounded-lg bg-black bg-opacity-40 text-black"> 
                <h2 className="text-4xl pt-8 neon-glow font-customTwo text-center">Starting my Journey</h2>
                <div className='pt-10 mx-25 pl-12 text-2xl text-white tracking-wide'>
                  Music and Technology have always been my twin passions. 
                  I honed my musical skills at the Berklee College of Music, 
                  specializing in Music Production/Engineering and Film Scoring. 
                </div>
                <div className='mt-10 mx-25 ml-12 text-2xl text-white tracking-wide'>
                  I learned to utilize industry standard softwares including Pro Tools, Logic Pro X, Melodyne, Soundtoys, Fabfilter, etc. My principal instrument was piano, as I’m classically trained, but I also delved deeply into vocal performance.
                </div>
                <div>
                  <img className='ml-40 mt-10 rounded-lg' src={timelineImageOne} style={{ border: '2px solid #fff', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}/>
                </div>
              </motion.div>
            </div>
        </motion.div>
      </motion.div>
      
      {/* Progress Bar */}
      {/* <div className="absolute top-0 left-0 w-full h-4 bg-gray-300">
        <div className="h-4 bg-cyan-500" style={{ width: `${progressBarWidth}%` }}></div>
      </div> */}
    </div>
  );
};

export default Timeline;