type ExperienceCardProp = {
    logo_path: string;
    role: string;
    start: string;
    end: string;
    responsibilities: string[];
    align: boolean;
};

function ExperienceCard({logo_path, role, start, end, responsibilities} : ExperienceCardProp){
    return(
        <div className="rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
            {/* Place for image */}
            <div className="max-md:order-1 md:w-1/4">
                <img className="max-w-[120px]" src={logo_path}/>
            </div>
            {/* Place for role / description */}
            <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4">
                <span className="text-gray-900 font-semibold text-lg md:text-xl font-inter">{role}</span>
                <ul className="flex list-disc flex-col gap-2 md:gap-1">
                    {responsibilities.map((responsibility) => (
                        <li className="font-inter text-gray-600">{responsibility}</li>
                    ))}
                </ul>
            </div>
            {/* Place to time */}
            <div className="max-md:order-2 md:w-1/4">
                <p className="font-inter text-gray-700 block">{start} - {end} </p>
            </div>
        </div>
    )
}

export default ExperienceCard