import './index.css'
import Header from "./components/Sections/Header"

import Hero from './components/Sections/Hero'
import Blog from './components/Sections/Blog'
import Experience from './components/Sections/Experience'
import Project from './components/Sections/Project'
import Contact from './components/Sections/Contact'
import FirstWebsite from './components/BlogPages/FirstWebsite'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    // <div className="">
    //   <Header />
    //   <Hero />
    //   <Blog />
    //   <Experience />
    //   <Project />
    //   <Contact />
    //   <FirstWebsite />
    // </div>
    <div>
      <Outlet />
    </div>
  )
}

export default App
