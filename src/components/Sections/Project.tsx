import ProjectCard from "../SubComponents/ProjectCard";

function Project(){
    const projects = [
        {
            project: "AndrewAnggara.dev",
            description: "A website to showcase my experiences, projects, and also to act as a journal with regular blog posts. It also includes a portfolio section highlighting my skills and achievements",
            picture_path: "/project_pictures/AA.png",
            skills: [
                "React", "TailwindCSS", "React Router DOM"
            ],
            link: "https://github.com/TimothyAnggara/plswork",
            align: true
        },
        {
            project: "BudgetSmart",
            description: "A platform targeted at students to help with budgeting their university lives and being able to look at their spending through a dashboard",
            picture_path: "/project_pictures/kap.png",
            skills: [
                "Node.js", "React", "SQL"
            ],
            link: "https://github.com/TimothyAnggara/BudgetSmart",
            align: false
        },
        {
            project: "Adult Income Classifier",
            description: "Created a random forest classifier with R to identify whether a person will have a income of greater than $50,000 with an accuracy of 80%",
            picture_path: "/project_pictures/AdultIncome.png",
            skills: [
                "R", "Machine Learning", "Random Forest"
            ],
            link: "https://github.com/TimothyAnggara/Adult-Income-ML",
            align: true
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