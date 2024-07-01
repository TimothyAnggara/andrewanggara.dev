
import Blog from "../Sections/Blog"
import Contact from "../Sections/Contact"
import Experience from "../Sections/Experience"
import Header from "../Sections/Header"
import Hero from "../Sections/Hero"
import Project from "../Sections/Project"

function Home(){
    return(
        <div>
            <Header />
            <Hero />
            <Blog />
            <Experience />
            <Project />
            <Contact />
        </div>
    )
}

export default Home