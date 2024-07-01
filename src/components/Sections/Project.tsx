import ProjectCard from "../SubComponents/ProjectCard";

function Project(){
    const projects = [
        {
            project: "AndrewAnggara.dev",
            description: "A website to showcase my experiences, projects, and also to act as a journal with regular blog posts. It also includes a portfolio section highlighting my skills and achievements",
            picture_path: "/project_pictures/AA.png",
            skills: [
                "React", "TailwindCSS"
            ],
            link: "https://AndrewAnggara.dev",
            align: true
        },
        {
            project: "BudgetSmart",
            description: "A platform targeted at students to help with budgeting their university lives and being able to look at their spending through a dashboard",
            picture_path: "/project_pictures/kap.png",
            skills: [
                "Python", "Flask", "React"
            ],
            link: "https://github.com/AndrewAnggara/BudgetSmart",
            align: false
        }
        // Add more projects as needed
    ];

    return(
        <section className="w-full py-12 md:py-16 2xl:py-20 bg-gray-50" id="Project">
            <div className="mx-auto flex flex-col w-full max-w-7xl gap-6 px-4 md:px-8 md:gap-12">
                <div className="flex flex-col items-center gap-4">
                    <div className="self-center">
                        <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                            <span className="font-inter text-gray-600">Projects</span>
                        </div>
                    </div>
                    <p className="font-inter text-gray-600">Some noteworthy proejcts that I've worked on</p>
                </div> 
                {projects.map((project, index) =>(
                    <ProjectCard key={index} {...project}/>
                ))}
            </div>
        </section>
    )
}

export default Project