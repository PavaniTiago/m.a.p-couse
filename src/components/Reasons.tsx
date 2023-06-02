import React from "react"

interface ReasonsProps {
    icon: string;
    title: string;
    description: string;
}

export default function Reasons({icon, title, description}: ReasonsProps){
    return(
        <div className="flex flex-col items-center justify-center md:w-[25rem] space-y-5">
            <div className="bg-neutral-900 rounded-full w-[2rem] h-[2rem] mb-2 md:mb-12"></div>
            <div className="flex items-center justify-center bg-neutral-900 rounded-full w-[10rem] h-[10rem] md:w-[14rem] md:h-[14rem] shadow-2xl">
                <div className="text-7xl md:text-8xl text-slate-50">{icon}</div>
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 text-center px-6 md:px-0">{title}</h2>
            <p className="text-xl text-neutral-700 text-center font-semibold px-8">{description}</p>
        </div>
    )
}