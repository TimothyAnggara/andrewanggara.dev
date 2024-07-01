type RecentBlogProp={
    title: string
    date: string
}

function RecentBlog({title, date} : RecentBlogProp){
    return(
        <div className="flex flex-col">
            <div className="justify-between flex">
                <a className="text-gray-600 font-inter font-semibold text-lg hover:font-bold hover:underline hover:text-black cursor-pointer">{title}</a>
                <p className="font-inter text-gray-600">{date}</p>
            </div>
            <hr className="border-t border-slate-400" />
        </div>
        
        
    )
}

export default RecentBlog