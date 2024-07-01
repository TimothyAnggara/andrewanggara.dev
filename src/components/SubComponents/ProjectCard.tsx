import SkillBox from "./SkillBox"
import { ExternalLink } from "lucide-react"
type ProjectCardProp = {
    project: string,
    description: string,
    picture_path: string,
    skills: string[],
    link: string,
    align: boolean
}

function ProjectCard({project, description, picture_path, skills, link, align}: ProjectCardProp){
    let left;
    if(!align){
        left = "order-last"
    }
    return(
        
        <div className="rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex w-full max-w-6xl flex-col md:flex-row">
            {/* Image part */}
            <div className={`flex items-center justify-center border-gray-100 bg-gray-100 p-8 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-12 md:rounded-l-xl md:border-r ${left}`}>
                <img src={picture_path} className="rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105"/>
            </div>
            {/* Content Part */}
            <div className="flex flex-col gap-6 p-8 md:w-1/2 lg:p-12">
                <p className="text-lg md:text-xl text-gray-900 font-semibold font-inter">{project}</p>
                <p className="text-gray-600 font-inter">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) =>(
                        <SkillBox key={index} skill={skill}/>
                    ))}
                </div>
                <a className="self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500">
                    <ExternalLink />
                </a>
            </div>
        </div>
    )
}

export default ProjectCard