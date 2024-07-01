import { ArrowLeft } from 'lucide-react';
import React, { ReactNode } from 'react';
import { useNavigate } from "react-router-dom"

// Define the interface for the props
interface BlogPostProps {
    children: ReactNode;
    title: string;
}



const BlogPost: React.FC<BlogPostProps> = ({ title, children }) => {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/');
    };
    
    return (
        <div className="mx-auto flex flex-col w-full max-w-5xl gap-6 px-4 md:px-8 md:gap-12 py-16">
            {/* Back to Home Button */}
            <div className='flex justify-between'>
                <button onClick={handleBackToHome} className="font-inter flex gap-4 text-left px-4 py-2 border border-gray-300 rounded-lg text-gray-800 bg-gray-100 hover:border-gray-500 ">
                    <ArrowLeft />
                    Back to Home
                </button>
                <a onClick={handleBackToHome} className="font-inter cursor-pointer text-gray-900 font-bold text-3xl">{"<AA />"}</a>
            </div>
            {/* Content */}
            <div className='flex flex-col w-full gap-6'>
                <div>
                    <span className='font-inter text-gray-900 font-bold text-4xl'>{title}</span>
                </div>
                {children}
            </div>
        </div>
    );
};

export default BlogPost;
