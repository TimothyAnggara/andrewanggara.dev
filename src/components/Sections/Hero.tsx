import headshot from "/temp.jpg"
import github from "/icons/github.svg"
import instagram from "/icons/instagram.svg"
import linkedin from "/icons/linkedin.svg"

function Hero(){
    const handleIconClick = (website:string) => {
        window.location.href = website; 
      };
    return(
        <section className="w-full py-16 md:py-20 2xl:py-24" id="hero">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-12">
                <div className="flex flex-col gap-12 md:flex-row">
                    {/* Image */}
                    <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
                        <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
                            <img className="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]" src={headshot}/>
                            <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"/>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="flex max-w-2xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
                        <div className="flex flex-col gap-2">
                            <span className="font-inter text-4xl font-semibold text-gray-900 lg:text-5xl lg:leading-[72px]">
                                Hi, I'm Andrew 👋
                            </span>
                            <p className="text-normal text-base font-inter text-gray-600">
                                A passionate software engineer currently studying Computer Science and Statistics 
                                at the University of Sydney.  I have a strong interest in full-stack engineering
                                and machine learning, aiming to leverage my skills to create innovative solutions 
                                and impactful projects.
                            </p>
                        </div>
                        {/* Status Icons */}
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="stroke-gray-600">
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <p className="font-inter text-gray-500">Sydney, Australia</p>
                            </div>
                            <div className="flex gap-2">
                                <div className="flex h-6 w-6 items-center justify-center">
                                    <span className="relative flex h-3 w-3">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                                    </span>
                                </div>
                                    <p className="text-gray-500">Available for new job opportunities</p>
                            </div>
                            <div className="flex gap-2">
                                <div className="flex h-6 w-6 items-center justify-center">
                                    <span className="relative flex h-3 w-3">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                                    </span>
                                </div>
                                    <p className="text-gray-500">Available for new projects</p>
                             </div>
                        </div>
                        <div className="flex gap-1">
                            <button onClick={() => handleIconClick("https://github.com/TimothyAnggara")} className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-6 [&_svg]:h-6">
                                <img width = "24" height="24" src={github}/>
                            </button>
                            <button onClick={() => handleIconClick("https://www.linkedin.com/in/andrew-anggara-889b92214/")} className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-6 [&_svg]:h-6" >
                                <img width = "24" height="24" src={linkedin}/>
                            </button>
                            <button onClick={() => handleIconClick("https://www.instagram.com/andrew.anggara_/")} className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-6 [&_svg]:h-6">
                                <img width = "24" height="24" src={instagram}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero