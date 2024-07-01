import { useEffect, useState } from "react";
function Header(){
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';  // Update this path if your resume file is in a different location
        link.download = 'Andrew_Anggara_Resume.pdf';  // Set the filename for the downloaded file
        link.click();
    };

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSmoothScroll = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        }
    };

    return(
        <header className={`sticky top-0 z-30 w-full border-b border-transparent ${isScrolled ? 'max-md:border-gray-100 bg-gray/50 backdrop-blur-xl md:border-gray-300' : `bg-gray max-md:border-gray-100`}`}>
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-12 ">
                <a target="_self" href="/">
                    <span className="font-inter text-gray-900 font-bold text-3xl">{"<AA />"}</span>
                </a>
                <div className="items-center gap-6 flex">
                    <ul className="flex list-none items-center gap-6">
                        <li>
                            <a target="_self" className="font-inter text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600" href="#Blog" onClick={handleSmoothScroll}>Blog</a>
                        </li>
                        <li>
                            <a target="_self" className="font-inter text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600" href="#Work" onClick={handleSmoothScroll}>Work</a>
                        </li>
                        <li>
                            <a target="_self" className="font-inter text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600" href="#Project" onClick={handleSmoothScroll}>Projects</a>
                        </li>
                        <li>
                            <a target="_self" className="font-inter text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600" href="#Contact" onClick={handleSmoothScroll}>Contact</a>
                        </li>
                    </ul>
                    <div className="h-6 w-0.5 bg-gray-100" />
                    <button onClick={handleDownloadCV} className="font-inter inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800">
                        Download CV
                    </button>
                </div>
            </div>
        </header>
        
    )
}

export default Header