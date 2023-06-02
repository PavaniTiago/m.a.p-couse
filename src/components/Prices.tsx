import Image from 'next/image'
import React from 'react'

export default function Prices({img}: {img: any}) {
    return (
        <div className='flex flex-col items-center justify-center gap-4 px-2 max-w-xl text-neutral-100'>
            <h2 className='text-3xl md:text-5xl font-semibold uppercase text-neutral-900 md:w-full w-[20rem] py-2.5 md:py-4 rounded-2xl text-center bg-gradient-to-r from-orange-300 to-yellow-700/90'>A oportunidade</h2>
            <div className='flex flex-col justify-center items-center gap-2'>
                <h2 className='text-2xl md:text-3xl uppercase font-bold px-8 md:px-12 text-center'>Hoje você terá a <span className='text-orange-300'>OPORTUNIDADE</span> de adquirir o curso completo de <del className='text-orange-300'>3350,00</del> POR:</h2>
                <h2 className='text-3xl md:text-5xl font-bold'>R$1197,00</h2>
                <p className='text-3xl md:text-6xl font-bold text-orange-300'><span className='text-neutral-100'>Parcela de</span> 12x</p>
                <p className='text-md font-semibold'>*Pelo cartão de crédito</p>
                <Image decoding="async" src={img} className='mt-1 brightness-50 w-[22rem] md:w-[45rem]' alt=''/>
                <a href="https://pay.hotmart.com/S83235822U"><button className='hover:from-orange-200 hover:to-yellow-700 mt-4 md:mt-0 3xl:mt-4 mx-auto md:w-[30rem] w-[20rem] flex justify-center py-3 bg-gradient-to-r from-orange-300 to-yellow-700/90 font-semibold text-xl md:text-2xl rounded-[4rem] transition-colors cursor-pointer shadow-lg'>Inscreva-se agora</button></a>
            </div>
        </div>
    )
}
