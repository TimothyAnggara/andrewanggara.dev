import ExperienceCard from "../SubComponents/ExperienceCard"

function Experience(){
    const experiences = [
        { 
            logo_path: '/assets/company_logos/intersystem.svg', 
            role: 'Software Engineer Intern', 
            start: 'Dec 2023', 
            end: 'Feb 2024',
            responsibilities: [
                "Used Agile Methodologies and led the development of AI-driven features that led to increase in data processing efficiency with LLM and prompt engineering",
                "Automated medical documentation processing with NLP and RAG workflows reducing manual entry errors and saving clinicians time",
                "Engineered a full-stack application using React and Flask with a user-friendly interface for clinician",
            ],
            align: true
        },
        {
            logo_path: '/assets/company_logos/kfc.png', 
            role: 'Back of House', 
            start: 'Sept 2022', 
            end: 'March 2023',
            responsibilities: [
                "Collaborated effectively with team members to ensure timely and accurate order fulfillment",
                "Trained new team members, enhancing communication and instructional skills",
                "Maintained high standards of quality and consistency through attention to detail and adherence to guidelines"
            ],
            align: false
        }
    ]

    return(
        <section className="w-full py-12 md:py-16 2xl:py-20" id="Work">
            <div className="mx-auto flex flex-col w-full max-w-7xl gap-6 px-4 md:px-8 md:gap-12">
                <div className="flex flex-col items-center gap-4">
                    <div className="self-center">
                        <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                            <span className="font-inter text-gray-600">Work Experience</span>
                        </div>
                    </div>
                    <p className="font-inter text-gray-600">A quick summary of my recent work experiences</p>
                </div>
                {/* Cards of work experience here */}
                {experiences.map((experience, index) => (
                    <ExperienceCard key={index} logo_path={experience.logo_path} role={experience.role} start={experience.start} end = {experience.end} responsibilities={experience.responsibilities} align={experience.align}/>
                ))}
            </div>
        </section>
    )
}

export default Experience