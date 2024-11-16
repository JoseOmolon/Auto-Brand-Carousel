import React, { useEffect, useRef } from 'react';
import 'devicon/devicon.min.css';

const techSkills = [
  { name: 'HTML5', iconClass: 'devicon-html5-plain', color: '#E34F26' },
  { name: 'CSS3', iconClass: 'devicon-css3-plain', color: '#1572B6' },
  { name: 'JavaScript', iconClass: 'devicon-javascript-plain', color: '#F7DF1E' },
  { name: 'React', iconClass: 'devicon-react-original', color: '#61DAFB' },
  { name: 'TailwindCSS', iconClass: 'devicon-tailwindcss-plain', color: '#38B2AC' },
  { name: 'Material-UI', iconClass: 'devicon-materialui-plain', color: '#0081CB' },
  { name: 'Framer Motion', iconClass: 'devicon-framer-plain', color: '#0055FF' },
  { name: 'Node.js', iconClass: 'devicon-nodejs-plain', color: '#339933' },
  { name: 'MongoDB', iconClass: 'devicon-mongodb-plain', color: '#47A248' },
  { name: 'Express.js', iconClass: 'devicon-express-original', color: '#000000' },
  { name: 'Git', iconClass: 'devicon-git-plain', color: '#F05032' },
  { name: 'GitHub', iconClass: 'devicon-github-original', color: '#181717' },
  { name: 'VSCode', iconClass: 'devicon-vscode-plain', color: '#007ACC' },
  { name: 'Netlify', iconClass: 'devicon-netlify-plain', color: '#00C7B7' },
  { name: 'Vercel', iconClass: 'devicon-vercel-plain', color: '#000000' },
  { name: 'Heroku', iconClass: 'devicon-heroku-plain', color: '#430098' },
];

const SkillsCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const scrollSpeed = 1;
    const carousel = carouselRef.current;

    const animateScroll = () => {
      if (carousel) {
        carousel.scrollLeft += scrollSpeed;
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
          carousel.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(animateScroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={carouselRef}
      className="flex overflow-x-auto space-x-6 py-8 px-4 md:px-12"
      style={{ perspective: '1000px' }}
    >
      {techSkills.map((skill, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-32 h-40 bg-opacity-90 rounded-xl shadow-lg transform transition-transform hover:scale-110"
          style={{
            backgroundColor: skill.color,
            boxShadow: `0 6px 10px rgba(0, 0, 0, 0.3), 0 4px 6px rgba(0, 0, 0, 0.2)`,
            transform: `rotateY(15deg) translateZ(0px)`,
          }}
        >
          <div className="flex flex-col items-center justify-center h-full p-4 text-white">
            <i className={`${skill.iconClass} text-6xl mb-2`} style={{ filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.4))' }}></i>
            <p className="text-sm font-semibold text-center">{skill.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsCarousel;
