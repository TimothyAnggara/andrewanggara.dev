import github from "../../assets/icons/github.svg"
import instagram from "../../assets/icons/instagram.svg"
import linkedin from "../../assets/icons/linkedin.svg"
import { Mail, Copy, Phone } from "lucide-react"

function Contact(){
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
    };

    const handleIconClick = (website:string) => {
        window.location.href = website; 
      };

    return(
        <section className="w-full py-16 md:py-20 2xl:py-24 " id="Contact">
            <div className="mx-auto flex flex-col w-full max-w-7xl gap-6 px-4 md:px-8 md:gap-12">
                {/* Subheading part */}
                <div className="flex flex-col items-center gap-4">
                    <div className="self-center">
                        <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                            <span className="font-inter text-gray-600">Get in Touch</span>
                        </div>
                    </div>
                    <p className="font-inter text-gray-500 text-lg md:text-xl max-w-xl text-center">
                        Feel free to reach out to me if you're looking for a 
                        developer, a league duo, or just to connect
                    </p>
                </div>
                {/* Contact / Icons */}
                <div className="flex flex-col items-center gap-6 md:gap-12">
                    {/* Email and Phone Number */}
                    <div className="flex flex-col items-center md:gap-4">
                        <div className="flex items-center gap-4 md:gap-5">
                            <Mail className="h-6 w-6 md:h-8 md:w-8" color="gray"/>
                            <p className=" font-inter text-lg md:text-3xl font-semibold tracking-[-0.02em]">timothyanggara@gmail.com</p>
                            <button onClick={() => copyToClipboard("timothyanggara@gmail.com")} className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-8 [&_svg]:h-8">
                                <Copy />
                            </button>
                        </div>
                        <div className="flex items-center gap-4 md:gap-5">
                            <Phone className="h-6 w-6 md:h-8 md:w-8" color="gray"/>
                            <p className=" font-inter text-lg md:text-3xl font-semibold tracking-[-0.02em]">+61 450705259</p>
                            <button onClick={() => copyToClipboard("+61450705259")} className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-8 [&_svg]:h-8">
                                <Copy />
                            </button>
                        </div>
                    </div>
                    {/* Icons */}
                    <div className="flex flex-col items-center gap-2">
                        <p className="font-inter text-gray-600">
                            You can also find me here!
                        </p>
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

export default Contact