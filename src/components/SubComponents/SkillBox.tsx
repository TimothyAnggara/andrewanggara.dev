type SkillBoxProp = {
    skill : string
}
function SkillBox({skill} : SkillBoxProp){
    return(
        <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
            <span className="text-gray-600 font-inter font-medium">{skill}</span>
        </div>
    )
}

export default SkillBox