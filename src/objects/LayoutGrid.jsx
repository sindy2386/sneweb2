import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import { timelineImageOne, protoolsLogo, logicLogo, melodyneLogo, finaleLogo,
         timelineImageTwo, 
         timelineImageThree,
         timelineImageFour,
         timelineImageFive,
         timelineImageSix,
         timelineImageSeven,
         timelineImageEight,
         timelineImageNine,
         timelineImageTen,} 
    from '../images/ImgAssets';

// SkeletonOne Component - Post Graduation
const SkeletonOne = () => (
    <div className='flex flex-col items-center'>
        <div className="font-customFour text-2xl my-4 max-w-lg text-neutral-200 leading-relaxed spacing text-shadow">
            Post-graduation, my journey as a freelance <span className='neon-glow'>audio engineer</span> began. 
            This role has allowed me to both sharpen my technical skills in audio editing, recording, mixing, mastering,
            and continue to curate collaboration amongst a diverse set of clients.
        </div>  
        <div className="font-customFour text-2xl my-4 max-w-lg text-neutral-200 leading-relaxed spacing text-shadow">
            My time at The Record Co. (TRC), transitioning from a studio support team member to a 
            <span className='neon-glow'> customer success manager </span>
            has also given me a stronger foundation in leadership and operational management,
            enhancing my ability to lead teams and manage complex projects. 
        </div> 
    </div>
);

// SkeletonTwo Component - Starting my Journey
const SkeletonTwo = () => (
    <div className='flex flex-col items-center'>
      {/* <h2 className="font-customFour text-7xl leading-tight text-shadow">Starting my Journey</h2> */}
      <p className="font-customFour text-xl my-4 max-w-lg text-neutral-200 leading-relaxed spacing text-shadow">                      
          Music and Technology have always been my twin passions. 
          I honed my musical skills at the Berklee College of Music, 
          specializing in 
          <span className='neon-glow'> Music Production/Engineering and Film Scoring.</span>
      </p>
      <p className="font-customFour text-xl my-4 max-w-lg text-neutral-200 leading-relaxed spacing text-shadow">
          I learned to utilize industry standard softwares and equipment
          for production, recording, editing, mixing & mastering audio
      </p>
      <p className="font-customFour text-xl my-4 max-w-lg text-neutral-200 leading-relaxed spacing text-shadow">
          My principal instrument was piano, as I’m classically trained, but I also delved deeply into vocal performance.
      </p>
    </div>
);

// SkeletonThree Component - Vocal Performance
const SkeletonThree = () => (
    <div className='flex flex-col items-center'>
      <div className="font-customFour text-lg my-4 max-w-lg text-neutral-200 leading-relaxed spacing text-shadow">
          As a vocalist, I had the opportunity to work with a very renowned ensemble in college, 
          <span className='neon-glow'> The Berklee Indian Ensemble.</span>
      </div>  
      <div className="font-customFour text-lg my-4 max-w-lg text-neutral-200 leading-relaxed spacing text-shadow">
          This ensemble gave me the chance to perform with and study the music of many renowned guest artists, 
          such as Shreya Goshal, A.R. Rahman, Shankar Mahadevan, Zakir Hussain, Shadow and Light and countless others, 
          applying many Hindustani and Carnatic influences into my own music. 
      </div>  
      <div className="font-customFour text-lg my-4 max-w-lg text-neutral-200 leading-relaxed spacing text-shadow">
          Under the direction of Annette Philip, an outstanding educator and musician, 
          I worked towards developing my abilities in vocal performance and 
          received a scholarship through this ensemble for my dedication towards the group. 
          We also received a <span className='neon-glow'>grammy nomination</span> for best global music album!
      </div> 
  </div>
);

// SkeletonFive Component - The Downfall
const SkeletonFive = () => (
  <div className='flex flex-col items-center'>
    <div className='font-customFour text-xl my-4 max-w-lg text-neutral-200 leading-relaxed spacing text-shadow'>
      Diving into the heart of <span className='neon-glow'>alternative rock</span>, I got to blend my love for 
      music directing, vocal arranging, and producing with an awesome group of musicians in our band, 
      "The Downfall"
    </div> 
    <div className='font-customFour text-xl my-4 max-w-lg text-neutral-200 leading-relaxed spacing text-shadow'> 
      As a music director, I helped shape the band's sound and performances through vocal arranging, building up big, layered vocal harmonies. 
      On top of that, I <span className='neon-glow'>oversaw the production process</span> from recording to mixing, making sure our releases captured the vision we had.
    </div>
    <div className='font-customFour text-xl my-4 max-w-lg text-neutral-200 leading-relaxed spacing text-shadow'> 
      During our years together, we put out quite a few singles and EPs. Each release was the product of intense rehearsing, gigging, and long studio sessions. 
      It took real dedication from all of us to make that body of work happen.
    </div>   
    <div className='font-customFour text-xl my-4 max-w-lg text-neutral-200 leading-relaxed spacing text-shadow'> 
      This experience helped me grow tremendously as a professional. It highlighted my diverse roles and <span className='neon-glow'>commitment to turning our musical ambitions into reality</span> through hard work. 
      Being part of such a tight-knit, hardworking band was incredibly fulfilling creatively.
    </div>               
  </div>
);

// SkeletonSix Component - Studio 1
const SkeletonSix = () => (
    <div className='flex flex-col items-center'>
      <div className='font-customThree text-4xl leading-relaxed'>
        Berklee's Studio One - My Home Away From Home back in College!
      </div>
    </div>
  );

// SkeletonSeven Component
const SkeletonSeven = () => (
    <div className='flex flex-col items-center'>
        <div className='font-customFour text-lg my-4 max-w-lg text-neutral-200 leading-relaxed spacing text-shadow'>
          This is my mom and dad! They mean everything to me. Their unwavering support has allowed me to grow, dream, and become the person I am today. 
          Their belief in me has been the driving force behind every accomplishment and milestone in my life.
        </div>
        <div className='font-customFour text-lg my-4 max-w-lg text-neutral-200 leading-relaxed spacing text-shadow'>
          From the moment I took my first steps to walking across the stage at graduation, my parents were there - 
          encouraging me, supporting me, and instilling in me the values of hard work, perseverance, and kindness. 
          Their sacrifices are immeasurable, and the life lessons they have imparted have shaped my character and outlook on the world.
        </div>
        <div className='font-customFour text-lg my-4 max-w-lg text-neutral-200 leading-relaxed spacing text-shadow'>
          Words can hardly express the depth of my gratitude and admiration for these two incredible people. 
          They are the heroes of my life story, and I would not be half the person I am without their support resonating in my heart. 
          My parents will forever be the compass that guides me through life's journey and I love them with every fiber of my being.
        </div>
    </div>
  );

// SkeletonEight Component - Treble Threat
const SkeletonEight = () => (
    <div className='flex flex-col items-center'>
        <div className='font-customFour text-base my-4 max-w-lg text-neutral-200 leading-relaxed spacing text-shadow'>
          As the Music Director and Vocal Arranger of Berklee's all-female a cappella group Treble Threat, 
          I had the honor of leading a supremely talented ensemble of vocalists. 
          One of the highlights was winning the <span className='neon-glow'> Outstanding Arrangement Award </span> at the 
          International Championship of Collegiate A Cappella (ICCA) Competition 
          for crafting intricate vocal arrangements that infused Indian musical influences like Bollywood rhythms and melodies. 
          Blending these unique elements with traditional a cappella style allowed me to explore creative boundaries and showcase the group's artistry.
        </div>
        <div className='font-customFour text-base my-4 max-w-lg text-neutral-200 leading-relaxed spacing text-shadow'>
          My role involved guiding Treble Threat through intense rehearsals, 
          fostering a <span className='neon-glow'>collaborative environment</span>, and helping each singer reach their potential. 
          I meticulously arranged every vocal line and harmony to highlight individual strengths while forming a cohesive whole. 
          Additionally, I oversaw the mixing and production of our audio and video releases, ensuring our hard work was captured professionally.
        </div>
        <div className='font-customFour text-base my-4 max-w-lg text-neutral-200 leading-relaxed spacing text-shadow'>
          Treble Threat taught me invaluable lessons in leadership, collaboration, and the power of pursuing passions wholeheartedly. 
          The connections formed with my fellow singers and the unforgettable memories created on stage will 
          forever remain cherished highlights of my artistic career.
        </div>
    </div>
  );

// SkeletonNine Component - Varsity Tennis
const SkeletonNine = () => (
    <div className='flex flex-col items-center'>
      <div className='font-customFour text-lg my-4 max-w-lg text-neutral-200 leading-relaxed spacing text-shadow'>
        fun fact - I love to play tennis! 
        From an early age, I had a passion for the sport and practiced relentlessly to improve my skills. 
        All that hard work paid off when I made the middle school team and played first doubles.
      </div>
      <div className='font-customFour text-lg my-4 max-w-lg text-neutral-200 leading-relaxed spacing text-shadow'>
        In high school, I was determined to take my game to the next level.
        As a freshman, I earned a spot on the varsity roster playing fourth singles. 
        By my senior year, I had worked my way up to our team's first singles position.
      </div>
      <div className='font-customFour text-lg my-4 max-w-lg text-neutral-200 leading-relaxed spacing text-shadow'>
        My drive to continually elevate my game led me to seek out advanced training opportunities beyond just my high school team practices. 
        I invested in regular private lessons, intense group sessions and camps at the Kim Grant Tennis Academy, 
        where I was able to train alongside other highly motivated players. 
        Their methods sharpened every aspect of my game, from footwork and stroke production to mental conditioning.
      </div>
      <div className='font-customFour text-lg my-4 max-w-lg text-neutral-200 leading-relaxed spacing text-shadow'>
        Off the court, I was privileged to serve as a co-captain alongside two of my closest friends. 
        In that leadership role, I took pride in mentoring younger players, fostering team unity, 
        and helping create an environment of hard work and sportsmanship. 
        Those experiences taught me so much about collaboration, communication, and accountability.
      </div>
    </div>
  );

// SkeletonTen Component - Choir
const SkeletonTen = () => (
    <div className='flex flex-col items-center'>
      <div className='font-customFour text-base my-4 max-w-lg text-neutral-200 leading-relaxed spacing text-shadow'>
        In high school, I was deeply involved in the choral program, participating in multiple ensembles 
        including the top advanced mixed choir, Chamber Choir (pictured). 
        As a section leader, conductor and arranger for these groups, 
        I took an active role in preparing and performing a wide variety of repertoire.
      </div>
      <div className='font-customFour text-base my-4 max-w-lg text-neutral-200 leading-relaxed spacing text-shadow'>
        My dedication to choral music was recognized through my selection for the regional and all-state honor choirs all four years of high school. 
        These experiences fostered my musical growth and allowed me to work alongside other talented vocalists from across the state.
      </div>
      <div className='font-customFour text-base my-4 max-w-lg text-neutral-200 leading-relaxed spacing text-shadow'>
        Beyond simply performing, I enjoyed the creative process of arranging vocal pieces for my school's choirs and a cappella groups. 
        Translating written music into fully realized harmonies was both challenging and immensely rewarding.
        My choir experience My choir experience taught me invaluable lessons about leadership and collaboration!
      </div>
    </div>
  );

// SkeletonEleven Component - Piano
const SkeletonEleven = () => (
  <div className='flex flex-col items-center'>
    <div className='font-customFour text-base my-4 max-w-lg text-neutral-200 leading-relaxed spacing text-shadow'>
      It all started with my first educator in music, Ms. Nina.
      Ms. Nina was my classical piano teacher, and she made a lasting impact on me as a musician and person. 
      Right from the start, she taught me that music wasn't just about playing the right notes - it was a way to express deep emotions through sound.
    </div>
    <div className='font-customFour text-base my-4 max-w-lg text-neutral-200 leading-relaxed spacing text-shadow'>
      Ms. Nina pushed me hard to practice diligently, but she also showed incredible kindness and patience. 
      Under her guidance, I learned how to truly connect with the music both physically and mentally. 
      She helped unlock my creative energy and showed me how to convey joy, sadness, passion and every nuance of feeling through my playing.
    </div>
    <div className='font-customFour text-base my-4 max-w-lg text-neutral-200 leading-relaxed spacing text-shadow'>
      Those lessons with Ms. Nina went far beyond just music technique. 
      She shaped my self-discipline, artistic expression, and sensitivity. 
      I gained an understanding of using music to tap into the full range of human experience and emotion.
      She was the catalyst for my ongoing journey as a musician and creative soul.
    </div>
  </div>
)

// Cards array
const cards = [
    {
      content: <SkeletonOne />,
      thumbnail: timelineImageThree,
    },
    {
      content: <SkeletonTwo />,
      thumbnail: timelineImageOne,
    },
    {
      content: <SkeletonThree />,
      thumbnail: timelineImageTwo,
    },
    {
      content: <SkeletonFive />,
      thumbnail: timelineImageFive,
    },
    {
      content: <SkeletonSix />,
      thumbnail: timelineImageSix,
    },
    {
      content: <SkeletonSeven />,
      thumbnail: timelineImageFour,
    },
    {
      content: <SkeletonEight />,
      thumbnail: timelineImageSeven,
    },
    {
      content: <SkeletonNine />,
      thumbnail: timelineImageEight,
    },
    {
      content: <SkeletonTen />,
      thumbnail: timelineImageNine,
    },
    {
      content: <SkeletonEleven />,
      thumbnail: timelineImageTen,
    },
];
  
const LayoutGrid = ({ cards, onCardClick }) => {
    return (
        <div className="jigsaw-layout items-center">
            {cards.map((card, index) => (
                <div key={index} className={`jigsaw-item jigsaw-item-${index + 1}`} onClick={() => onCardClick(card, index)}> 
                    <motion.img layoutId={`card-image-${index}`} src={card.thumbnail} alt="" className="w-full h-auto transform transition duration-500 hover:scale-105 cursor-pointer" />
                </div>
            ))}
        </div>
    );
};


function Modal({ isOpen, onClose, children, backgroundImage, cardIndex }) {
    if (!isOpen) return null;
  
       // Adjusted modal overlay style for a more transparent background during the transition
       const modalOverlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent', // Changed to transparent
        backdropFilter: 'lg', // Removed blur
      };
  
      const imageContainerStyle = {
        position: 'relative',
        maxWidth: '800px', 
        maxHeight: '1000vh',
        overflow: 'hidden',
      };
  
      const imageStyle = {
        width: '100%', 
        height: '100%',
        objectFit: 'cover',
      };
  
      const textStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white', 
        padding: '20px',
        background: 'rgba(0, 0, 0, 0.8)', // Consider adjusting this as well for the transition
        textAlign: 'center', 
      };
  
      // You might want to adjust this initial style to better match the starting state of the image in the grid
      const imageTransition = {
        initial: { opacity: 0 }, // Consider starting with the image's natural size/position or adjust opacity
        animate: { opacity: 1, transition: { duration: 1 } },
      };
  
      return (
          <div style={modalOverlayStyle} onClick={onClose}>
            <div style={imageContainerStyle} onClick={(e) => e.stopPropagation()}>
              {isOpen && (
                <motion.img
                  layoutId={`card-image-${cardIndex}`}
                  src={backgroundImage}
                  alt=""
                  style={imageStyle}
                  initial="initial"
                  animate="animate"
                  variants={imageTransition}
                />
              )}
              <div style={textStyle}>
                {children}
              </div>
            </div>
          </div>
        );
  }

export function LayoutGridDemo() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleCardClick = (card, index) => { // Update this function
        setSelectedCard(card);
        setSelectedIndex(index); // Set the index of the selected card
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCard(null);
        setSelectedIndex(null); // Reset the selected index
    };
    
    return (
        <div className="h-screen pt-10 w-full">
          <LayoutGrid cards={cards} onCardClick={handleCardClick} />
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                backgroundImage={selectedCard ? selectedCard.thumbnail : null}
                cardIndex={selectedIndex} // Pass selectedIndex as cardIndex
            >
                {selectedCard ? selectedCard.content : null}
            </Modal>
        </div>
      );
    }

export default LayoutGridDemo;