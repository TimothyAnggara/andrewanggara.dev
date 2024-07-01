import { Link } from "react-router-dom";
import RecentBlog from "../SubComponents/RecentBlog";

function Blog(){
    const tempData = [
        {title: "First Website", date: "June 2024", link: "first_website"},
    ];

    return(
        <section className="w-full py-12 md:py-16 2xl:py-20 bg-gray-50" id="Blog">
            <div className="mx-auto flex flex-col w-full max-w-7xl gap-6 px-4 md:px-8 md:gap-12" >
                {/* That small header thing */}
                <div className="flex flex-col items-center gap-4">
                    <div className="self-center">
                        <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                            <span className="font-inter text-gray-600">Blog</span>
                        </div>
                    </div>
                    <p className="font-inter text-gray-600">Kinda like a journal more than anything</p>
                </div>
                {/* content */}
                <div className="mx-auto max-w-3xl w-full flex flex-col gap-6">
                    <div className="justify-between flex items-center">
                        <p className="text-gray-900 font-semibold text-lg md:text-3xl font-inter">Recent Posts</p>
                        {/* <button className="font-inter px-4 py-2 border border-gray-300 rounded-lg text-gray-800 bg-gray-100 hover:border-gray-500">View All</button> */}
                    </div>
                    <div className="flex flex-col gap-2">
                        {tempData.map((data, index) =>(
                            <Link to={data.link}>
                                <RecentBlog key={index} title={data.title} date={data.date}/>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog