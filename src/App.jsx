import './assets/css/App.css'
import data from './assets/data/projects.json'
import ProjectCard from './components/ProjectCard'

function App() {

  // const projectNames = data.map(project => project.name)
  // const projectImg = data.map(project => project.image)
  // const projectDesc = data.map(project => project.description)

  return (
    <main>
      <header>
        <div className='name-header'>
          <h2>Vanessa Kasminoff</h2>
        </div>
        <img className='theme-toggle' src='/images/sun.svg' alt='sun icon'/>
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
      </div>

      <div className='bottom-text'>
        <p>Software developer, gamer, and matcha lover</p>
      </div>

      <div className='wrapper'>
        <h2 className='projects-title'>Check out my projects</h2>
        <div className='container scrollx'>
          {data.map((project, index) => (
            <ProjectCard 
              key={index} 
              name={project.name} 
              image={project.image} 
              description={project.description} />
          ))}
        </div>
      </div>

    </main>
  )
}

export default App
