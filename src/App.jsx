import './assets/css/App.css'

function App() {
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
    </main>
  )
}

export default App
