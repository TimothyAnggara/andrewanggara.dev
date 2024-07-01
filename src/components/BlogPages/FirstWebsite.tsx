import BlogPost from "../SubComponents/BlogPost"

function FirstWebsite(){
    return(
        <BlogPost title="First Website">
            {/* Content */}
            <div className="flex flex-col gap-3">
                <h1 className="font-inter text-gray-700 text-2xl font-semibold">Hey there</h1>
                <p className="font-inter text-base ">
                    My name is Andrew and this is my first actual working website that I can finally be proud 
                    to show off to other people. Although the blog part is looking a bit dead I hope
                    that with time, it'll be more popular with short tid-bits about my life. I don't think
                    anybody is going to read this so this might just be my personal monthly journal I guess.
                </p>
            </div>

            <div className="flex flex-col gap-3">
                <h1 className="font-inter text-gray-700 text-2xl font-semibold">Career</h1>
                <p className="font-inter text-base ">
                    I'm in my third year at Usyd studying CS and stats but career wise, it's been difficult.
                    I've been applying to lots of internships and grad roles but nothing yet. I'm not sure if 
                    its because I'm an international student or maybe I'm just not good enough and the prospects
                    of being able to get PR is looking quite grim. One of my friends said that I need 100 points to 
                    be accepted for a PR here and I don't know if that's even possible. If I wanna stay I guess I need
                    to get sponsored which is already quite difficult. I also applied to Maccas and supposed to have an 
                    interview but they messed up with the days so I guess I won't get the job 
                </p>
            </div>

            <div className="flex flex-col gap-3">
                <h1 className="font-inter text-gray-700 text-2xl font-semibold">Studying</h1>
                <p className="font-inter text-base ">
                    For studying, its semester break right now but I've been working on this website and also been reading a 
                    ML learning book. I returned the book recently so I won't have that to keep me up but I do wanna work on a
                    certification, specifically I wanna get the Azure's <a href="https://learn.microsoft.com/en-us/credentials/certifications/azure-data-scientist/?practice-assessment-type=certification" className="text-blue-500 hover:text-blue-700 hover:underline">machine learning certification. </a>
                     I also wanna work on a ML project but one step at a time. I think I'll do the cert first and then do the ML project
                </p>
            </div>

            <div className="flex flex-col gap-3">
                <h1 className="font-inter text-gray-700 text-2xl font-semibold">Games</h1>
                <p className="font-inter text-base ">
                    The steam summer sale recently came out and oh boy did I buy some games. I got the escapist 2 to play with some
                    friends and wow, its been a blast. I've never played it before and playing it with friends is really
                    fun. I've also recently got Elden Ring as well and man this game is amazing. The gameplay is insane and the lore goes
                    deep. I'm trying to run a paladin build maxxing strength and faith but I'm stuck at the draconic tree sentinel right now
                </p>
            </div>

        </BlogPost>
    )

}

export default FirstWebsite