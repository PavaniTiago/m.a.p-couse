"use client";

import Image from "next/image";

import { useEffect, lazy } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import bg from "public/assets/bg.webp";
import selo2 from "public/assets/selo.png"
import bgResponsive from "public/assets/bgResponsive.webp";
import img9 from "public/assets/img9.webp";
import img14 from "public/assets/img14.webp";
import img15 from "public/assets/img15.webp";
import img20 from "public/assets/img20.webp";
import img21 from "public/assets/img21.webp";
// import img22 from "public/assets/img22.webp";
import img23 from "public/assets/img23.webp";
import img25 from "public/assets/img25.webp";
import img26 from "public/assets/img26.webp";
import img47 from "public/assets/img47.webp";
import img29 from "public/assets/img29.webp";
import img30 from "public/assets/img30.png";
import img31 from "public/assets/img31.webp";
import img32 from "public/assets/img32.webp";
import img34 from "public/assets/img34.jpg";
import img35 from "public/assets/img35.webp";
import img36 from "public/assets/img36.webp";
// import img37 from "public/assets/img37.webp";
// import img38 from "public/assets/img38.webp";
// import img39 from "public/assets/img39.webp";
import img40 from "public/assets/img40.webp";
import img46 from "public/assets/img46.webp";
import img41 from "public/assets/img41.webp";
import img48 from "public/assets/img48.webp";
import img42 from "public/assets/img42.webp";
import img43 from "public/assets/img43.webp";
import img44 from "public/assets/img44.webp";
import img45 from "public/assets/img45.webp";
import img49 from "public/assets/img49.webp";
import meiosPagamento from "public/assets/meiospagto2-1.png";
import selo from "public/assets/Selo de Garantia de 7 Dias PNG Transparente Sem Fundo.png";

import Modulos from "@/components/Modulos";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Aos from "aos";
import "aos/dist/aos.css";
import { init, track } from "fbq";

const LazyBonus = lazy(() => import("@/components/LazyBonus"));
const LazyDropDown = lazy(() => import("@/components/LazyDropDown"));
const LazyGarantia = lazy(() => import("@/components/LazyGarantia"));
const LazyPrices = lazy(() => import("@/components/LazyPrices"));

export default function Home() {
  const pixel = "716507180084377";

  useEffect(() => {
    Aos.init({ duration: 1000 });
    init(pixel);
    track("PageView");
    track("InitiateCheckout");
  }, []);

  return (
    <main className="min-h-screen overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        <div className="relative w-full flex flex-col overflow-hidden">
          <Image
            className="md:w-full md:h-screen object-cover brightness-50 sm:h-[20rem] hidden md:block"
            src={bg}
            alt="foto do studio alessandra pavani"
            decoding="async"
            priority
          />
          <Image
            className="md:w-full md:h-screen object-cover brightness-50 sm:h-[20rem] block md:hidden"
            src={bgResponsive}
            alt="foto do studio alessandra pavani"
            decoding="async"
            priority
          />
        </div>
        <div className="bg-black w-full h-[32rem] md:hidden"></div>
        <div className="absolute top-[18rem] md:top-[8rem] 3xl:top-[10rem] md:mb-[6rem] flex flex-col 3xl:max-w-5xl items-center justify-center">
          <h1 className="text-center text-white text-3xl md:text-6xl 3xl:text-7xl font-semibold bg-gradient-to-r from-orange-300 to-yellow-700/90 bg-clip-text text-transparent">
            Método Alessandra <br /> Pavani
          </h1>
          <h2 className="3xl:text-3xl text-xl md:text-3xl md:font-semibold mt-3 text-white leading-tight sm:px-4 text-center">
            Seja um{" "}
            <span className="bg-gradient-to-r from-orange-300 to-yellow-700/90 bg-clip-text text-transparent">
              profissional referência
            </span>{" "}
            em curvaturas!
            <br /> somos 60% da população Brasileira cabelos cacheados e crespo.
            <br /> venha para esse universo,
            <br /> aumentando o seu{" "}
            <span className="bg-gradient-to-r from-orange-300 to-yellow-700/90 bg-clip-text text-transparent">
              faturamento mensal
            </span>{" "}
            de 3 a 5 mil reais.{" "}
          </h2>
          <p className="mt-4 mb-8 md:text-lg text-gray-300 sm:max-w-md md:max-w-2xl mx-auto sm:px-8 text-center">
            Proporcionando resultado incríveis para suas clientes!
          </p>
          <iframe
            className=" mb-8 rounded-lg md:h-[15rem] md:w-[30rem] 3xl:h-[20rem] 3xl:w-[32rem]"
            src="https://www.youtube.com/embed/z4vxqN-Kw6w"
          ></iframe>
          <a
            href="https://pay.hotmart.com/S83235822U?off=dysrtym2"
            target="blank"
          >
            <button
              id="checkOutButton"
              className="ease-in-out duration-300 hover:bg-neutral-900 hover:text-slate-50 mt-4 md:mt-0 3xl:mt-4 mx-auto md:w-[42rem] flex justify-center px-16 py-3 bg-slate-50 font-semibold text-xl md:text-2xl rounded transition-colors cursor-pointer shadow-lg"
            >
              Comece a faturar com o M.A.P
            </button>
          </a>
        </div>
      </div>
      <div className="bg-gradient-to-b from-black to-[#2d1a10] w-full flex flex-col justify-center h-full pb-20 px-8 md:px-0">
        <h1
          data-aos="fade-left"
          data-aos-duration="650"
          className="text-neutral-200 text-4xl md:text-5xl font-bold leading-[3rem] pt-32 pb-2 md:pb-6 text-center"
        >
          Comece a faturar com as Artes dos{" "}
          <span className="bg-gradient-to-r from-orange-300 to-yellow-700/90 bg-clip-text text-transparent">
            Cachos!
          </span>
        </h1>
        <p
          data-aos="fade-right"
          data-aos-duration="650"
          className="text-2xl md:text-3xl text-neutral-300 pb-14 md:pb-10 text-center"
        >
          Aulas teóricas e práticas com modelos reais,
          <br /> sem boneca, expandindo o seu conhecimento em curvaturas.
        </p>
        <div className="flex w-fit items-center justify-center flex-col md:flex-row px-4 mx-auto gap-6">
          <div
            data-aos="fade-bottom"
            data-aos-duration="1000"
            className="flex flex-wrap max-w-5xl items-center justify-center gap-6"
          >
            <Modulos
              title="materiais para corte e finalização"
              img={img35}
              text="MÓDULO"
            >
              <p className="font-bold">
                - Aula 1.{" "}
                <span className="font-normal">
                  Materiais para começar a trabalhar;
                </span>
              </p>
              <p className="font-bold">
                - Aula 2. <span className="font-normal">Shampoo;</span>
              </p>
              <p className="font-bold">
                - Aula 3.{" "}
                <span className="font-normal">
                  {" "}
                  Máscara, óleos e acidificação;
                </span>
              </p>
              <p className="font-bold">
                - Aula 4. <span className="font-normal">finalizadores;</span>
              </p>
              <p className="font-bold">
                - Aula 5.{" "}
                <span className="font-normal">
                  Aula Extra: Como segurar a tesoura corretamente;
                </span>
              </p>
            </Modulos>

            <Modulos
              title="Linhas e Ângulos e Projeções."
              img={img47}
              text="MÓDULO"
            >
              <p className="font-bold">
                - Aula 1.{" "}
                <span className="font-normal">
                  Apresentação da Transição Capilar;
                </span>
              </p>
              <p className="font-bold">
                - Aula 2.{" "}
                <span className="font-normal">
                  Transição Capialar aula teórica;
                </span>
              </p>
              <p className="font-bold">
                - Aula 3.{" "}
                <span className="font-normal">
                  Entrevista com a Maria Fernanda;
                </span>
              </p>
              <p className="font-bold">
                +{" "}
                <span className="font-normal">
                  Apostila com as técnicas de corte a seco com ângulos e linhas
                  e projeção;
                </span>
              </p>
            </Modulos>

            <Modulos
              title="Big Chop (O grande Corte)"
              img={img25}
              text="MÓDULO"
            >
              <p className="font-bold">
                - Aula 1. <span className="font-normal">Avaliação;</span>
              </p>
              <p className="font-bold">
                - Aula 2.{" "}
                <span className="font-normal">Corte a seco linhas pt-1;</span>
              </p>
              <p className="font-bold">
                - Aula 3.{" "}
                <span className="font-normal">
                  Corte a seco Ângulos e Projeções pt-2;
                </span>
              </p>
              <p className="font-bold">
                - Aula 4.{" "}
                <span className="font-normal">
                  Higiênização e Acidificação;
                </span>
              </p>
              <p className="font-bold">
                - Aula 5.{" "}
                <span className="font-normal">
                  Tratamento e Reposição de lipídios;
                </span>
              </p>
              <p className="font-bold">
                - Aula 6.{" "}
                <span className="font-normal">Finalização Conceitual;</span>
              </p>
              <p className="font-bold">
                - Aula 7. <span className="font-normal">Secagem;</span>
              </p>
              <p className="font-bold">
                - Aula 8. <span className="font-normal">Depoimento;</span>
              </p>
              <p className="font-bold">
                - Aula 9. <span className="font-normal">Antes e Depois;</span>
              </p>
            </Modulos>

            <Modulos
              title="Corte Long Bob Cabelo Ondulado curvatura 3A, 3B e 3C"
              img={img23}
              text="MÓDULO"
            >
              <p className="font-bold">
                - Aula 1.{" "}
                <span className="font-normal">
                  Avaliação curvatura 3-A, 3-B, 3-C;
                </span>
              </p>
              <p className="font-bold">
                - Aula 2.{" "}
                <span className="font-normal">
                  Corte a Seco linhas e ângulos;
                </span>
              </p>
              <p className="font-bold">
                - Aula 3.{" "}
                <span className="font-normal">
                  Higiênização e Acidificação;
                </span>
              </p>
              <p className="font-bold">
                - Aula 4.{" "}
                <span className="font-normal">Tratamento e Nutrição;</span>
              </p>
              <p className="font-bold">
                - Aula 5. <span className="font-normal">Secagem;</span>
              </p>
              <p className="font-bold">
                - Aula 6.{" "}
                <span className="font-normal">
                  Finalização e Ajuste do corte;
                </span>
              </p>
              <p className="font-bold">
                - Aula 7. <span className="font-normal">Antes e Depois;</span>
              </p>
            </Modulos>

            <Modulos
              title="Corte em camadas Altas em cabelo cacheado, curvatura 3B, 4A e 4C"
              img={img21}
              text="MÓDULO"
            >
              <p className="font-bold">
                - Aula 1. <span className="font-normal">Introdução;</span>
              </p>
              <p className="font-bold">
                - Aula 2. <span className="font-normal">Avaliação;</span>
              </p>
              <p className="font-bold">
                - Aula 3. <span className="font-normal">Corte a Seco;</span>
              </p>
              <p className="font-bold">
                - Aula 4.{" "}
                <span className="font-normal">
                  Pré Tratamento com Manteiga;
                </span>
              </p>
              <p className="font-bold">
                - Aula 5.{" "}
                <span className="font-normal">Higienização e Tratamento;</span>
              </p>
              <p className="font-bold">
                - Aula 6.{" "}
                <span className="font-normal">Finalização Conceitual;</span>
              </p>
              <p className="font-bold">
                - Aula 7. <span className="font-normal">Difusor, Secagem;</span>
              </p>
              <p className="font-bold">
                - Aula 8. <span className="font-normal">Ajuste do Corte;</span>
              </p>
            </Modulos>

            <Modulos
              title="corte coração em cabelos afro curvatura 4C, 5A"
              img={img31}
              text="MÓDULO"
            >
              <p className="font-bold">
                - Aula 1. <span className="font-normal">Introdução;</span>
              </p>
              <p className="font-bold">
                - Aula 2. <span className="font-normal">Avaliação;</span>
              </p>
              <p className="font-bold">
                - Aula 3. <span className="font-normal">Corte a Seco;</span>
              </p>
              <p className="font-bold">
                - Aula 4.{" "}
                <span className="font-normal">
                  Avaliação do Pré Tratamento;
                </span>
              </p>
              <p className="font-bold">
                - Aula 5.{" "}
                <span className="font-normal">
                  Aplicação do Pré Tratamento com Óleo essencial 100% natural;
                </span>
              </p>
              <p className="font-bold">
                - Aula 6.{" "}
                <span className="font-normal">Higienização e Tratamento;</span>
              </p>
              <p className="font-bold">
                - Aula 7.{" "}
                <span className="font-normal">Finalização Conceitual;</span>
              </p>
              <p className="font-bold">
                - Aula 8.{" "}
                <span className="font-normal">
                  Ajuste do Corte e Resultado Final;
                </span>
              </p>
            </Modulos>

            <Modulos
              title="corte camadas médias em cabelo cacheado curvatura 4A, 4B e 4C"
              img={img29}
              text="MÓDULO"
            >
              <p className="font-bold">
                - Aula 1. <span className="font-normal">Introdução;</span>
              </p>
              <p className="font-bold">
                - Aula 2. <span className="font-normal">Avaliação;</span>
              </p>
              <p className="font-bold">
                - Aula 3. <span className="font-normal">Corte a Seco;</span>
              </p>
              <p className="font-bold">
                - Aula 4.{" "}
                <span className="font-normal">
                  Pré Tratamento com Manteiga e Tratamento;
                </span>
              </p>
              <p className="font-bold">
                - Aula 5.{" "}
                <span className="font-normal">Finalização Conceitual;</span>
              </p>
              <p className="font-bold">
                - Aula 6. <span className="font-normal">Resultado Final;</span>
              </p>
            </Modulos>

            <Modulos
              title="Corte Pixie Hair Assimétrico na navalha"
              img={img46}
              text="MÓDULO"
            >
              <p className="font-bold">
                - Aula 1. <span className="font-normal">Introdução;</span>
              </p>
              <p className="font-bold">
                - Aula 2. <span className="font-normal">Higienização;</span>
              </p>
              <p className="font-bold">
                - Aula 3.{" "}
                <span className="font-normal">Arte do corte na navalha;</span>
              </p>
              <p className="font-bold">
                - Aula 4.{" "}
                <span className="font-normal">Acabamento da máquina;</span>
              </p>
              <p className="font-bold">
                - Aula 5. <span className="font-normal">Finalização;</span>
              </p>
              <p className="font-bold">
                - Aula 6. <span className="font-normal">Resultado final;</span>
              </p>
            </Modulos>
            <Modulos
              title="Corte molhado em Camadas Conectadas com Franja"
              img={img41}
              text="MÓDULO"
            >
              <p className="font-bold">
                - Aula 1. <span className="font-normal">Introdução;</span>
              </p>
              <p className="font-bold">
                - Aula 2. <span className="font-normal">Higienização;</span>
              </p>
              <p className="font-bold">
                - Aula 3.{" "}
                <span className="font-normal">
                  Controle de PH (Acidificação);
                </span>
              </p>
              <p className="font-bold">
                - Aula 4. <span className="font-normal">Nutrição;</span>
              </p>
              <p className="font-bold">
                - Aula 5. <span className="font-normal">Corte molhado;</span>
              </p>
              <p className="font-bold">
                - Aula 6.{" "}
                <span className="font-normal">Finalização passo a passo;</span>
              </p>
              <p className="font-bold">
                - Aula 7. <span className="font-normal">Difusor 360;</span>
              </p>
              <p className="font-bold">
                - Aula 8.{" "}
                <span className="font-normal">Finalização parte 2;</span>
              </p>
              <p className="font-bold">
                - Aula 9. <span className="font-normal">Sem e com volume;</span>
              </p>
              <p className="font-bold">
                - Aula 10.{" "}
                <span className="font-normal">Brilho + resultado Final;</span>
              </p>
            </Modulos>
            <Modulos
              title="Corte molhado em Zigue- Zague Camadas Conectadas"
              img={img48}
              text="MÓDULO"
            >
              <p className="font-bold">
                - Aula 1.{" "}
                <span className="font-normal">
                  Corte molhado passo a passo;
                </span>
              </p>
            </Modulos>

            <Modulos
              title="Terapia Capilar com a educadora"
              img={img36}
              text="MÓDULO"
              person="@profa_angela_terapeutacapilar"
            >
              <p className="font-bold">
                - Aula 1. <span className="font-normal">Apresentação;</span>
              </p>
              <p className="font-bold">
                - Aula 2.{" "}
                <span className="font-normal">
                  Ciclo de crescimento e tricologia;
                </span>
              </p>
              <p className="font-bold">
                - Aula 3.{" "}
                <span className="font-normal">Alopecias e Tratamentos;</span>
              </p>
              <p className="font-bold">
                - Aula 4.{" "}
                <span className="font-normal">
                  Tipos de Cabelos e Curvaturas;
                </span>
              </p>
            </Modulos>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-300 to-yellow-700/90 w-full h-16 flex items-center justify-center">
        <h2 className="text-2xl font-bold text-slate-100">Colorimetria</h2>
      </div>

      <div className="bg-gradient-to-b from-black to-[#2d1a10] flex w-full py-20 items-center justify-center flex-col md:flex-row px-4 mx-auto gap-6">
        <div
          data-aos="fade-bottom"
          data-aos-duration="1000"
          className="flex flex-wrap max-w-5xl items-center justify-center gap-6"
        >
          <Modulos title="Teoria da Colorimetria" img={img49} text="MÓDULO">
            <p className="font-bold">
              - Aula 1.{" "}
              <span className="font-normal">
                Princípios básicos- Na Colorimetria;
              </span>
            </p>
            <p className="font-bold">
              - Aula 2.{" "}
              <span className="font-normal">
                Fundo de Clareamento/ Números na tabela de cores;
              </span>
            </p>
            <p className="font-bold">
              - Aula 3.{" "}
              <span className="font-normal">
                Cores primárias e secundárias;
              </span>
            </p>
            <p className="font-bold">
              - Aula 4.{" "}
              <span className="font-normal">
                Cores Terciárias e Neutralizações;
              </span>
            </p>
            <p className="font-bold">
              - Aula 5.{" "}
              <span className="font-normal">Retoque de Raiz Colocação;</span>
            </p>
            <p className="font-bold">
              - Aula 6.{" "}
              <span className="font-normal">
                Como avaliar o cabelo da cliente;
              </span>
            </p>
            <p className="font-bold">
              - Aula 7.{" "}
              <span className="font-normal">Cobertura de branco;</span>
            </p>
            <p className="font-bold">
              - Aula 8.{" "}
              <span className="font-normal">
                Retoque de raiz - Preparação da Cliente;
              </span>
            </p>
            <p className="font-bold">
              - Aula 9.{" "}
              <span className="font-normal">
                Como preparar os produtos para aplicar na sua cliente;
              </span>
            </p>
            <p className="font-bold">
              - Aula 10.{" "}
              <span className="font-normal">
                Aplicação das técnicas da colocação passo a passo;
              </span>
            </p>
          </Modulos>

          <Modulos
            title="colorimetria Retoque de Raiz dos brancos"
            img={img42}
            text="MÓDULO"
          >
            <p className="font-bold">
              - Aula 1. <span className="font-normal">Introdução;</span>
            </p>
            <p className="font-bold">
              - Aula 2.{" "}
              <span className="font-normal">
                Como avaliar o cabelo da cliente;
              </span>
            </p>
            <p className="font-bold">
              - Aula 3.{" "}
              <span className="font-normal">Cobertura de branco;</span>
            </p>
            <p className="font-bold">
              - Aula 4.{" "}
              <span className="font-normal">
                Retoque de raiz - Preparação da Cliente;
              </span>
            </p>
            <p className="font-bold">
              - Aula 5.{" "}
              <span className="font-normal">
                Como preparar os produtos para aplicar na sua cliente;
              </span>
            </p>
            <p className="font-bold">
              - Aula 6.{" "}
              <span className="font-normal">
                Aplicação das técnicas da colocação passo a passo;
              </span>
            </p>
          </Modulos>

          <Modulos
              title="Morena iluminada Técnica mechas na água"
              img={img44}
              text="MÓDULO"
            >
              <p className="font-bold">
                - Aula 1.{" "}
                <span className="font-normal">técnica de mechas na água;</span>
              </p>
              <p className="font-bold">
                - Aula 2.{" "}
                <span className="font-normal">preparação no lavatório;</span>
              </p>
              <p className="font-bold">
                - Aula 3.{" "}
                <span className="font-normal">
                  Divisões da técnica mechas na água;
                </span>
              </p>
              <p className="font-bold">
                - Aula 4.{" "}
                <span className="font-normal">
                  materiais para o procedimento;
                </span>
              </p>
              <p className="font-bold">
                - Aula 5.{" "}
                <span className="font-normal">
                  técnica da plaqueta, com os produtos;
                </span>
              </p>
              <p className="font-bold">
                - Aula 6.{" "}
                <span className="font-normal">
                  como tirar no produto no lavatório e mais o controle PH do
                  fio;
                </span>
              </p>
              <p className="font-bold">
                - Aula 7.{" "}
                <span className="font-normal">
                  Como aplicar o Tonalizante certo;
                </span>
              </p>
              <p className="font-bold">
                - Aula 8.{" "}
                <span className="font-normal">
                  aplicação do tratamento das mechas na água;
                </span>
              </p>
              <p className="font-bold">
                - Aula 9.{" "}
                <span className="font-normal">
                  finalização com muito volume;
                </span>
              </p>
              <p className="font-bold">
                - Aula 10.{" "}
                <span className="font-normal">
                  Secagem com difusor e mais o Volumão;
                </span>
              </p>
              <p className="font-bold">
                - Aula 11. <span className="font-normal">Resultado final;</span>
              </p>
            </Modulos>

            <Modulos
              title="Mechas Free Hands mão livre"
              img={img43}
              text="MÓDULO"
            >
              <p className="font-bold">
                - Aula 1.{" "}
                <span className="font-normal">Técnica de mãos livres;</span>
              </p>
              <p className="font-bold">
                - Aula 2.{" "}
                <span className="font-normal">
                  Aplicação da técnica passo a passo;
                </span>
              </p>
              <p className="font-bold">
                - Aula 3.{" "}
                <span className="font-normal">
                  Como lavar o cabelo no lavatório sem manchar as mechas;
                </span>
              </p>
              <p className="font-bold">
                - Aula 4.{" "}
                <span className="font-normal">
                  Tonalização das mechas + tratamento;
                </span>
              </p>
              <p className="font-bold">
                - Aula 5.{" "}
                <span className="font-normal">Finalização Conceitual;</span>
              </p>
              <p className="font-bold">
                - Aula 6.{" "}
                <span className="font-normal">
                  Secagem com difusor, dica de volume;
                </span>
              </p>
              <p className="font-bold">
                - Aula 7. <span className="font-normal">Resultado final;</span>
              </p>
            </Modulos>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-300 to-yellow-700/90 w-full h-16 flex items-center justify-center">
        <h2 className="text-2xl font-bold text-slate-100">
          Além de tudo isso...
        </h2>
      </div>
      <div className="bg-gradient-to-t from-[#130e0b] to-[#2d1a10] w-full">
        <div
          data-aos="fade-top"
          data-aos-duration="650"
          className="flex flex-col justify-center items-center pt-10 pb-16 gap-8"
        >
          <h3 className="text-3xl text-slate-100 uppercase -mb-4 font-bold">
            Bônus
          </h3>
          <div className="px-6 md:px-[28rem] space-y-6 text-xl md:text-3xl md:font-medium text-slate-200 text-center">
            <p>
              <span className="bg-gradient-to-r from-orange-300 to-yellow-700/90 bg-clip-text text-transparent">
                Mentoria Vip{" "}
              </span>
              em uma comunidade exclusiva para os alunos do método, com aulas ao
              vivo toda semana para tirar todas as dúvidas.
            </p>
            <h3 className="text-3xl text-slate-100 uppercase -mb-4 font-bold">
              Prática de Corte:
            </h3>
            <p>
              ondulados, cacheados, crespos e afro e bônus de transição capilar.
              {/* Acesse ao Método por{" "}
              <span className="bg-gradient-to-r from-orange-300 to-yellow-700/90 bg-clip-text text-transparent">
                1 ano{" "}
              </span>
              E ainda recebendo atualizações com
              <span className="bg-gradient-to-r from-orange-300 to-yellow-700/90 bg-clip-text text-transparent">
                {" "}
                módulos novos e técnicas exclusivas{" "}
              </span>
              por um ano. Sem pagar mais nada por isso. */}
            </p>
            <p>
              {/* <span className="bg-gradient-to-r from-orange-300 to-yellow-700/90 bg-clip-text text-transparent">
                Mentoria vip exclusiva{" "}
              </span>
              para os primeiros alunos adquirir o {" "}
              <span className="bg-gradient-to-r from-orange-300 to-yellow-700/90 bg-clip-text text-transparent">
                M.A.P Transformation
              </span> */}
            </p>
          </div>
          <div className="flex md:flex-row flex-col gap-4">
            <LazyBonus
              title="Intrevistando a Cliente"
              img={img26}
              text="BÔNUS"
              person="@alessandrapavani"
            >
              <p className="font-bold">
                - Aula 1.{" "}
                <span className="font-normal">
                  avaliação com a cliente na transição capilar
                </span>
              </p>
              <p className="font-normal">
                - Material exclusivo ficha de anamnese criado pela Alessandra
                Pavani, vendo a necessidade de cada cliente
              </p>
              <p className="font-normal">
                - Com essa informações você monta o protocolo personalizada
              </p>
            </LazyBonus>
            <LazyBonus
              title="Benefícios"
              img={img34}
              text="BÔNUS"
              person="@alessandrapavani"
            >
              <p className="font-normal">
                - Aulas atualizadas dentro de 1 ano;
              </p>
              <p className="font-normal">- Acesso por 1 ano;</p>
              <p className="font-normal">
                - Sem nenhum custo adicional por isso, para aumentar ainda mais
                o seu conhecimento nas técnicas;
              </p>
              <p className="font-normal">
                - Mentoria vip os 5 primeiros alunos;
              </p>
              <p className="font-normal">- Grupo de tira dúvida network;</p>
              <p className="font-normal">
                - R$ 2153,00 de desconto saindo por apenas R$1197 á vista;
              </p>
            </LazyBonus>
            <LazyBonus
              title="Corte a seco anos 70 Black Power"
              img={img40}
              text="BÔNUS"
              person="@studioalessandrapavani"
            >
              <p className="font-bold">
                - Aula 1.{" "}
                <span className="font-normal">
                  Tabela de curvatura 1A ao 5C;
                </span>
              </p>
              <p className="font-bold">
                - Aula 2.{" "}
                <span className="font-normal">Tabela de curvatura 5;</span>
              </p>
              <p className="font-bold">
                - Aula 3.{" "}
                <span className="font-normal">
                  Corte a seco curvatura 4C e 5A;
                </span>
              </p>
              <p className="font-bold">
                - Aula 4. <span className="font-normal">Tira dúvidas;</span>
              </p>
              <p className="font-bold">
                - Aula 5.{" "}
                <span className="font-normal">Higienização e Hidratação;</span>
              </p>
              <p className="font-bold">
                - Aula 6. <span className="font-normal">Ajuste do Corte;</span>
              </p>
              <p className="font-bold">
                - Aula 7. <span className="font-normal">Finalização;</span>
              </p>
              <p className="font-bold">
                - Aula 8. <span className="font-normal">Secagem;</span>
              </p>
              <p className="font-bold">
                - Aula 9.{" "}
                <span className="font-normal">Dica de volume Black Pawer;</span>
              </p>
              <p className="font-bold">
                - Aula 10. <span className="font-normal">Antes e Depois;</span>
              </p>
            </LazyBonus>
          </div>
          <a
            href="https://pay.hotmart.com/S83235822U?off=dysrtym2"
            target="blank"
          >
            <button
              id="checkOutButton"
              className="ease-in-out duration-300 hover:bg-neutral-900 hover:text-slate-50 mt-4 md:mt-0 3xl:mt-4 mx-auto md:w-[42rem] flex justify-center px-16 py-3 bg-slate-50 font-semibold text-xl md:text-2xl rounded transition-colors cursor-pointer shadow-lg"
            >
              Inscreva-se agora
            </button>
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center relative">
        <div className="w-full relative">
          <Image
            className="w-full h-[55rem] object-cover object-top brightness-[0.3]"
            src={img9}
            alt="foto do studio alessandra pavani"
            decoding="async"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="650"
          className="absolute flex flex-col justify-center items-center"
        >
          <div
            data-aos="fade-right"
            data-aos-duration="650"
            className="flex flex-col items-center max-w-5xl px-4 w-fit md:w-full"
          >
            <h1 className="text-center text-neutral-900 text-4xl md:text-6xl font-bold w-full px-12 md:px-0 h-fit py-4 bg-gradient-to-r from-orange-300 to-yellow-700/90">
              Prática de Corte
            </h1>
            <h2 className="text-2xl md:text-3xl mt-6 px-[20rem] text-white leading-tight md:px-4 text-center">
              Com aulas gravadas fica mais fácil de entender, são 6 cortes
              diferentes em modelos. Nada de boneca! Aumentando seu Faturamento
            </h2>
            <p className="text-2xl md:text-3xl mt-6 text-white px-[20rem] leading-tight md:px-8 text-center">
              Cacheado, crespo, afro, long bob, pixie, camadas altas e médias e
              como fazer um bigchop depois da transição capilar.
            </p>
            <p className="text-2xl font-semibold md:text-3xl mt-6 text-white px-[20rem] leading-tight md:px-4 text-center">
              Confira abaixo os cortes que você irá aprender:
            </p>
          </div>
          <div className="flex mt-12">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={5}
              pagination={{ clickable: true }}
              loop={true}
              className="w-[65rem] h-fit 3xl:w-[80rem]"
            >
              <SwiperSlide>
                <Image
                  decoding="async"
                  src={img25}
                  alt="foto de cabelos cacheados"
                  className="rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  decoding="async"
                  src={img14}
                  alt="foto de cabelos cacheados"
                  className="rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  decoding="async"
                  src={img21}
                  alt="foto de cabelos cacheados"
                  className="rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  decoding="async"
                  src={img20}
                  alt="foto de cabelos cacheados"
                  className="rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  decoding="async"
                  src={img15}
                  alt="foto de cabelos cacheados"
                  className="rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  decoding="async"
                  src={img40}
                  alt="foto de cabelos cacheados"
                  className="rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  decoding="async"
                  src={img23}
                  alt="foto de cabelos cacheados"
                  className="rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  decoding="async"
                  src={img32}
                  alt="foto de cabelos cacheados"
                  className="rounded-lg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      
      <div className="w-full bg-gradient-to-b from-yellow-700/90 to-black flex flex-col-reverse md:flex-row items-center justify-center pb-12  md:gap-32 md:py-20">
        <div className="w-full max-w-xl text-xl px-12 flex flex-col gap-3 text-center text-white md:text-start font-medium">
         <p>
          Única Formação com 2 certificados reconhecidos nacional e internacionalmente pela FEPCSSP-Escola de Cabeleireiros da Federação Paulista do Brasil, o único órgão regulamentado em mais de 130 países.
         </p>
         <p>
         Você terá o certificado de formação Especialista em Cachos Alessandra Pavani, com o selo exclusivo no seu certificado!
         </p>
         <p>
         Você poderá atuar fora do Brasil, com o seu certificado do Método Alessandra Pavani.
         </p>
        </div>
        <Image decoding="async" src={selo2} className="w-[32rem]" alt="" />  
      </div>

      <div className="w-full bg-black flex flex-col md:flex-row items-center justify-center gap-x-24 pt-16">
        <div
          data-aos="fade-left"
          data-aos-duration="650"
          className="hidden md:flex h-full align-bottom"
        >
          <Image decoding="async" src={img30} className="w-[24rem]" alt="" />
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="650"
          className="max-w-2xl px-8 md:px-0 mb-12"
        >
          <h1 className="text-3xl text-slate-100 mb-2">
            QUEM É{" "}
            <span className="bg-gradient-to-r from-orange-300 to-yellow-700/90 bg-clip-text text-transparent">
              Alessandra Pavani
            </span>
          </h1>
          <q className="text-slate-100 text-2xl">
            Tudo posso naquele que me fortalece.{" "}
          </q>
          <p className="text-md font-medium text-slate-200 mt-7">
            Eu sou Alessandra Pavani atuo na área da beleza a 14 anos. Me
            especializei em cachos há 6 anos atrás quando passei pela minha
            transição capilar, interna e profissional. Desenvolvi técnicas de
            protocolo de atendimento humanizado e bem estar, técnicas avançadas
            de corte tratamento e finalização para fidelização dos clientes
            novos todos os dias.
          </p>
          <p className="text-md font-medium text-slate-200 mt-3">
            Hoje sou educadora na área dos cachos, ganhadora de dois prêmios em
            São Paulo em cabelos crespos e cacheados 2022, e sendo homenageada
            entre as mulheres Empreendedoras de Sucesso pela Revista Regional em
            2022 e 2023. Criei o M.A.P Transformation para ensinar novos
            profissionais tradicionais a se tornarem referência em sua cidade á
            alcançarem um novo patamar profissional.
          </p>
          <p className="text-md font-roboto font-semibold tracking-wide bg-gradient-to-r from-orange-300 to-yellow-700/90 bg-clip-text text-transparent uppercase md:px-20 text-center mt-6">
            o meu método já formou vários profissonais especialistas em cachos
          </p>
          <a
            href="https://pay.hotmart.com/S83235822U?off=dysrtym2"
            target="blank"
          >
            <button
              id="checkOutButton"
              className="ease-in-out duration-300 hover:bg-neutral-900 hover:text-slate-50 mt-4 md:mt-0 3xl:mt-4 mx-auto md:w-[42rem] flex justify-center px-16 py-3 bg-slate-50 font-semibold text-xl md:text-2xl rounded transition-colors cursor-pointer shadow-lg"
            >
              Inscreva-se agora
            </button>
          </a>
        </div>
      </div>

      <div className="bg-slate-200 w-full flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-center md:justify-start">
          <div className="relative w-full">
            <Image
              decoding="async"
              src={bgResponsive}
              alt=""
              className="brightness-[0.2] h-[48rem] w-full object-cover object-top"
            />
          </div>
          <div className="absolute md:left-[16rem]">
            <LazyPrices
              data-aos="fade-right"
              data-aos-duration="650"
              img={meiosPagamento}
            />
          </div>
        </div>
        <div className="w-full flex items-center flex-col bg-gradient-to-tl to-black from-[#2d1a10]">
          <div
            data-aos="fade-right"
            data-aos-duration="650"
            className="max-w-4xl py-16 "
          >
            <LazyGarantia img={selo} />
          </div>
          <div
            data-aos="fade-top"
            data-aos-duration="650"
            className="flex justify-center w-full py-14"
          >
            <div className="flex flex-col space-y-12 w-[80rem]">
              <h2 className="text-4xl px-[20rem] md:px-0 md:text-5xl font-bold text-yellow-500 w-[60rem] self-center text-center">
                O que os alunos do Método Alessandra Pavani falam do curso
              </h2>
              <div className="grid grid-cols-1 place-items-center md:grid-cols-4 gap-10">
                <iframe
                  className="md:w-[18rem]"
                  src="https://www.youtube.com/embed/l89UeUSaFVM"
                ></iframe>
                <iframe
                  className="md:w-[18rem]"
                  src="https://www.youtube.com/embed/mkWViwiT_2c?si=dKwpKAtMxH7CimKy"
                ></iframe>
                <iframe
                  className="md:w-[18rem]"
                  src="https://www.youtube.com/embed/tIM49R67yQM"
                ></iframe>
                <iframe
                  className="md:w-[18rem]"
                  src="https://www.youtube.com/embed/KhlYWH-Rymc"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-bottom"
          data-aos-duration="650"
          className="max-w-xl mx-auto p-4 mt-6 md:mt-12 mb-2 md:mb-8"
        >
          <h1 className="text-neutral-900 text-center text-3xl md:text-5xl font-bold mb-10 md:mb-12">
            Perguntas Frequentes
          </h1>
          <LazyDropDown
            question="Como vou ter acesso ao curso? "
            answer="O curso é online e permanece disponível na plataforma Hotmart. 
            Os vídeos contendo aulas teóricas e práticas são gravados e poderão ser vistos e revisitados, por um período de um ano, nesta plataforma.
            Ao adquirir o curso, você precisará configurar um acesso, seguindo orientações de um e-mail que chegará no endereço eletrônico cadastrado por você."
          />
          <LazyDropDown
            question="Como funciona o acompanhamento do curso?"
            answer="O aluno terá 6 aulas tira dúvidas, com duração média de uma hora, ao vivo, em complemento às aulas gravadas, de acordo com cronograma específico da turma. 
            Essas aulas tira-dúvidas são restritas aos alunos matriculados e em plataforma a definir, de acordo com o critério de melhor aproveitamento dos objetivos do curso.                        
            O objetivo destas aulas ao vivo será realizar o esclarecimento de dúvidas dos alunos, pelo professor do curso, referentes ao módulo em estudo."
          />
          <LazyDropDown
            question="O curso fornece certificado?"
            answer="Sim! Ao concluir 100% das aulas, você poderá gerar automaticamente o seu certificado de conclusão."
          />
          <LazyDropDown
            question="Consigo assistir do meu smartphone? "
            answer="Sim, você poderá acessar nosso conteúdo via smartphone"
          />
          <LazyDropDown
            question="Quanto tempo vou ter para consumir o material? "
            answer="Você pode ver e rever o curso sempre que desejar, por um período de 24 meses após a compra. 
            Lembrando que no período de um ano, você vai receber atualizações do curso, expandindo ainda mais o seu faturamento, sem nenhum custo por isso."
          />
          <LazyDropDown
            question="Como funcionam as garantia incondicional?"
            answer="Garantia incondicional
            Caso perceba que nosso conteúdo não é para você, você terá um prazo de 7 dias para desistir da compra. 
            Dentro deste período, você poderá solicitar o cancelamento e reembolso diretamente na plataforma. Sem questionamentos."
          />
        </div>
        <div
          className="bg-neutral-900 hover:text-neutral-900 text-slate-100 mx-auto md:w-[42rem] flex justify-center mb-12 px-16 md:px-2 py-3 
        hover:bg-slate-50 font-semibold text-2xl rounded transition-colors cursor-pointer shadow-xl"
        >
          <button
            id="checkOutButton"
            className="transition-all ease-in-out duration-300"
          >
            <a
              href="https://pay.hotmart.com/S83235822U?off=dysrtym2"
              target="blank"
            >
              Inscreva-se Agora
            </a>
          </button>
        </div>
      </div>
    </main>
  );
}
