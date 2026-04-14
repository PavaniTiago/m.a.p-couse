import Image from "next/image";
import React from "react";

export default function Prices({ img }: { img: any }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-4 max-w-xl text-neutral-100 overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-semibold uppercase text-white md:w-full w-[20rem] py-3 md:py-5 rounded-2xl text-center bg-primary">
        A oportunidade
      </h2>
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-xl md:text-2xl uppercase font-bold px-6 md:px-8 text-center mb-2">
          Hoje você terá a <span className="text-primary">OPORTUNIDADE</span> de
          adquirir o curso completo de{" "}
          <del className="text-primary">R$1099,00</del> por{" "}
          <span className="text-primary">R$889,00</span> à vista
        </h2>
        <div className="mt-4 mb-4 space-y-2">
          <p className="text-2xl md:text-4xl font-bold text-primary text-center">
            <span className="text-neutral-100">
              Parcelado dentro <br />
              da HOTMART
            </span>
          </p>
        </div>
        <Image
          decoding="async"
          src={img}
          className="mt-1 brightness-50 w-[22rem] md:w-[45rem]"
          alt="meios de pagamentos"
        />
        <a href="https://pay.hotmart.com/S83235822U">
          <button className="hover:bg-primary/80 mt-4 md:mt-0 3xl:mt-4 mx-auto md:w-[30rem] w-[20rem] flex justify-center py-3 bg-primary font-semibold text-xl md:text-2xl rounded-[4rem] transition-colors cursor-pointer shadow-lg text-white">
            Compre Agora
          </button>
        </a>
      </div>
    </div>
  );
}
