import './assets/css/App.css';
import data from './assets/data/projects.json';
import ProjectCard from './components/ProjectCard';
import LogoCard from './components/LogoCard';
import { useRef, useEffect } from 'react';

// GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


function App() {
  gsap.registerPlugin(useGSAP, ScrollTrigger)

  const containerRef = useRef(null)
  const sunRef = useRef(null)
  const spinAnimationRef = useRef(null)

  useGSAP(() => {
    const sections = gsap.utils.toArray('.container section')
    const container = containerRef.current

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => `+=${container.offsetWidth}`
      }
    });
  });

  useEffect(() => {
    const sun = sunRef.current

    const handleMouseEnter = () => {
      spinAnimationRef.current = gsap.to(sun, {
        rotation: '+=360',
        ease: 'none',
        duration: 3,
        repeat: -1
      });
    };

    const handleMouseLeave = () => {
      if (spinAnimationRef.current) {
        spinAnimationRef.current.kill()
      }
    };

    sun.addEventListener('mouseenter', handleMouseEnter);
    sun.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      sun.removeEventListener('mouseenter', handleMouseEnter);
      sun.removeEventListener('mouseleave', handleMouseLeave)
    };

  }, [])


  return (
    <main>
      <header>
        <div className='name-header'>
          <h2>Vanessa Kasminoff</h2>
        </div>
        <img className='theme-toggle sun' 
        src='/images/sun.svg' 
        alt='sun icon' 
        ref={sunRef}
        />
        <nav>
          <ul>
            <li><a href='#'>Projects</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
        </nav>
      </header>

      <div className='main-content'>

        <h1>Hi! Thanks for stopping by.</h1>
      
        <div className='logo-group'>
          <div className='logo-card-container'>
            <LogoCard logoImg='/images/HTML5.png'/>
            <LogoCard logoImg='/images/CSS3.png'/>
            <LogoCard logoImg='/images/JavaScript.png'/>
            <LogoCard logoImg='/images/React.png'/>
          </div>
        </div>

      </div>

      <div className='bottom-text'>
        <p>Software developer, gamer, and tea enthusiast</p>
      </div>

      <div className='wrapper'>
      <h2 className='projects-title'>Check out my projects</h2>
        <div className='container scrollx' ref={containerRef}>
          {data.map((project, index) => (
            <ProjectCard 
              key={index} 
              name={project.name} 
              image={project.image} 
              description={project.description} />
          ))}
        </div>
      </div>

      <div className='content'>
        <h2>This is more content after the scroll.</h2>
      </div>

    </main>
  )
}

export default App
