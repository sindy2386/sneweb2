// 2-21-24 Vertical Rose Gradient Page w/ Pixverse Videos

import React, { useState, useEffect } from 'react';
import flowerGalaxy from '../video/flowerGalaxy.mp4';
import libraryRecord from '../video/libraryRecord.mp4'
import Navbar from '../Navbar/Navbar';
import { aboutMe } from '../images/ImgAssets';

// Modal Component
const Modal = ({ isOpen, setIsOpen, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl w-full p-6">
          <div className="overflow-y-auto max-h-[80vh]">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">My Journey</h3>
            {children}
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-red-700 to-red-100">
      <div className="w-full bg-gradient-b from-white to-rose-500">
        <Navbar />
        <div className="px-4 py-12 md:px-12">
          <div className="max-w-4xl mx-auto bg-transparent rounded-lg">
            <div className="p-4 md:p-8 font-customTwo text-white">
              <h2 className="text-8xl text-center font-customTwo">About Me</h2>
                <img src={aboutMe} alt="About Me" className="mx-auto mb-8 rounded-full w-64 h-64 object-cover" />
                  <div className='text-2xl font-customTwo'>
                    <p>Hello! I’m Snehal Pandey and I’m so thrilled to have you here on my website :) I’d love to share a bit about myself and my journey so far.</p>
                    {/* Incorporating the flowerGalaxy video */}
                    <div className="my-8">
                      <video autoPlay loop muted className="w-full h-auto max-h-96">
                        <source src={flowerGalaxy} type="video/mp4" />
                        Your browser does not support this video.
                      </video>
                    </div>
                    <br></br>
                    <p>Music and Technology have always been my twin passions. I honed my musical skills at the Berklee College of Music, specializing in Music Production/Engineering and Film Scoring.</p>
                    <br></br>
                    <p> I learned to utilize industry standard softwares including Pro Tools, Logic Pro X, Melodyne, Soundtoys, Fabfilter, etc. My principal instrument was piano, as I’m classically trained, but I also delved deeply into vocal performance.</p>
                    {/* Incorporating the libraryRecord video */}
                    <div className="my-8">
                      <video autoPlay loop muted className="w-full h-auto max-h-96">
                        <source src={libraryRecord} type="video/mp4" />
                        Your browser does not support this video.
                      </video>
                    </div>
                    <br></br>
                    <p>Post-graduation, my journey as a freelance audio engineer began. This role sharpened my skills in audio editing, recording, mixing, mastering, and more. My time at The Record Co (TRC), transitioning from a studio support team member to a customer success manager, has given me a stronger foundation in leadership and operational management, enhancing my ability to lead teams and manage complex projects.</p>
                    <br></br>
                    <p>In the last six months, my focus has shifted towards Eternity Solutions, allowing this fusion to find a new canvas. I’ve been able to expand my technical skills in areas like MERN, Javascript/HTML, TailwindCSS, and more! But what truly excited me about Eternity Solutions is the chance to blend my creative and technological sides. Here, I see a world where technology isn't just a tool, but a partner in creating experiences that resonate and inspire. It’s not just about coding or music; it’s about using these skills to craft transformative experiences! (fun fact - I coded this website! :D)</p>
                    <br></br>
                    <p>I believe in leading with a collaborative spirit, and I approach every project with empathy, creativity, organization, and a keen eye for detail. My goal is always to inspire and lead, fostering a team-oriented environment!</p>
                  </div>
                <button className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={() => setIsModalOpen(true)}>Read More About My Journey</button>
            </div>
          </div>
        </div>
        {/* Modal For Detailed Bio */}
        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          <p className='mb-8 font-customTwo'>As a vocalist, I had the opportunity to work with a very renowned ensemble in college, the Berklee Indian Ensemble. This ensemble gave me the chance to perform with and study music from many renowned guest artists, such as Shreya Goshal, A.R. Rahman, Shankar Mahadevan, Zakir Hussain, and countless others, applying many hindustani and Carnatic influences into her own music. Under the direction of Annette Philip, an outstanding educator and musician, I worked towards developing my abilities in vocal performance and received a scholarship through this ensemble for my dedication towards the group.</p>
          <p className='mb-8 font-customTwo'>I was also the Music Director and Vocal Arranger of Berklee’s All-Female acapella group, Treble Threat, in which I won the outstanding arrangement award through the Annual “International Championship of Collegiate Acapella” Competition, for the arrangement of the entire set! I would lead the team through creating the group arrangements for our performances/competitions and mixing all audio recordings for streaming service & video releases.</p>
          <p className='mb-8 font-customTwo'>My college years were not just about learning - they were about creating, leading, and innovating! From orchestrating compositions for video/film to mastering the art of audio engineering, each step has been a move towards a deeper understanding of how technology can amplify creativity.</p>
          <p className='mb-8 font-customTwo'>Alongside my passion for creativity and technology, I bring a deep commitment to organization and structure in everything I do. At The Record Co (TRC), I've heavily utilized tools like Asana to manage projects, track operations, and ensure every task is aligned with our goals. This approach has not only streamlined our processes but also enhanced our team's efficiency and effectiveness.</p>
          <p className='mb-8 font-customTwo'>For Eternity Solutions, I've implemented a similar strategy, creating a structured Trello board to streamline our workflow. This system helps us maintain clear timelines, organize meeting notes, and ensure that every task, big or small, is accounted for and progresses smoothly. I strongly believe that great achievements are not just born out of creativity and innovation but also out of meticulous planning and organization!</p>
        </Modal>
      </div>
    </div>
  );
};

export default About;
