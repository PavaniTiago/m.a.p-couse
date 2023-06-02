import Image from "next/image";
import { useState } from "react";
import { HiChevronRight } from "react-icons/hi";

interface ModulosProps {
    title: string;
    img: any;
    children: React.ReactNode;
    text: string;
}

export default function Modulos({ title, img, children, text }: ModulosProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-black flex flex-col overflow-hidden rounded-2xl shadow-xl">
            <div className="relative flex justify-center items-center">
                <Image decoding="async" src={img} alt="foto de alessandra pavani" className="h-[22rem] w-[17.5rem] brightness-75"/>
                <div className="from-black via-transparent to-transparent bg-gradient-to-t bottom-0 left-0 right-0 w-full h-[40rem]  absolute"></div>
            <div className="absolute mt-32">
                <h2 className="text-2xl text-center text-slate-100 tracking-widest mb-2">{text}</h2>
                <p className="text-3xl tracking-tight px-1 text-center uppercase font-extrabold font-inter bg-gradient-to-r from-orange-300 to-yellow-700/90 bg-clip-text text-transparent">{title}</p>
            </div>
            </div>
            <div className="py-4 md:py-6 pl-4 w-full">
                <div className="flex items-center">
                    <HiChevronRight
                    className={`h-6 w-6 text-neutral-200 mb-2 mr-2 transform ${isOpen ? "rotate-90" : ""}`}
                    />
                    <button className="font-semibold text-neutral-200 pb-2.5" onClick={() => setIsOpen(!isOpen)}><h2>SAIBA MAIS</h2></button>
                </div>
                {isOpen && 
                    <div className="relative py-2 space-y-2 z-10 mt-2 w-64 rounded text-slate-100">
                    {children}
                  </div>
                }
            </div>
        </div>
    )
}