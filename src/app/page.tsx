"use client";

import Image from "next/image";

import { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import bg from "/src/assets/bg.webp";
import bgResponsive from "/src/assets/bgResponsive.webp";
import img9 from "/src/assets/img9.webp";
import img14 from "/src/assets/img14.webp";
import img15 from "/src/assets/img15.webp";
import img20 from "/src/assets/img20.webp";
import img21 from "/src/assets/img21.webp";
import img22 from "/src/assets/img22.webp";
import img23 from "/src/assets/img23.webp";
import img25 from "/src/assets/img25.webp";
import img26 from "/src/assets/img26.webp";
import img28 from "/src/assets/img28.webp";
import img29 from "/src/assets/img29.webp";
import img30 from "/src/assets/img30.png";
import img31 from "/src/assets/img31.webp";
import img32 from "/src/assets/img32.webp";
import meiosPagamento from "/src/assets/meiospagto2-1.png";
import selo from "/src/assets/Selo de Garantia de 7 Dias PNG Transparente Sem Fundo.png";
import Bonus from "@/components/Bonus";
import FaqDropdown from "@/components/FaqDropdown";
import Garantia from "@/components/Garantia";
import Modulos from "@/components/Modulos";
import Prices from "@/components/Prices";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <main className="min-h-screen overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        <div className="relative w-full flex flex-col">
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
        <div
          data-aos="fade-left"
          data-aos-duration="650"
          className="absolute top-[18rem] md:top-[12rem] 3xl:top-[10rem] md:mb-[6rem] flex flex-col 3xl:max-w-5xl items-center justify-center"
        >
          <h1 className="text-center text-white text-3xl md:text-6xl 3xl:text-7xl font-semibold bg-gradient-to-r from-orange-300 to-yellow-700/90 bg-clip-text text-transparent">
            Método Alessandra Pavani
          </h1>
          <h2 className="3xl:text-3xl text-xl md:text-3xl md:font-semibold mt-3 text-white leading-tight sm:px-4 text-center">
            Seja um{" "}
            <span className="bg-gradient-to-r from-orange-300 to-yellow-700/90 bg-clip-text text-transparent">
              cabeleireiro referência
            </span>{" "}
            em curvaturas aonde
            <br /> somos 70% da população Brasileira cabelos cacheados e crespo,
            aumentando o seu{" "}
            <span className="bg-gradient-to-r from-orange-300 to-yellow-700/90 bg-clip-text text-transparent">
              faturamento mensal
            </span>
            .
          </h2>
          <p className="mt-4 mb-8 md:text-lg text-gray-300 sm:max-w-md md:max-w-2xl mx-auto sm:px-8 text-center">
            Proporcionando resultado incríveis para suas clientes!
          </p>
          <iframe
            className=" mb-8 rounded-lg md:h-[15rem] md:w-[30rem] 3xl:h-[20rem] 3xl:w-[32rem]"
            src="https://www.youtube.com/embed/z4vxqN-Kw6w"
          ></iframe>
          <a href="https://pay.hotmart.com/S83235822U" target="blank">
            <button className="ease-in-out duration-300 hover:bg-neutral-900 hover:text-slate-50 mt-4 md:mt-0 3xl:mt-4 mx-auto md:w-[42rem] flex justify-center px-16 py-3 bg-slate-50 font-semibold text-xl md:text-2xl rounded transition-colors cursor-pointer shadow-lg">
              Inscreva-se agora
            </button>
          </a>
        </div>
      </div>
      <div className="bg-gradient-to-b from-black to-[#2d1a10] w-full flex flex-col justify-center h-full pb-20 px-8 md:px-0">
        <h1
          data-aos="fade-left"
          data-aos-duration="650"
          className="text-neutral-200 text-4xl md:text-5xl font-bold leading-[3rem] pt-12 pb-2 md:pb-6 text-center"
        >
          Comece a faturar com o{" "}
          <span className="bg-gradient-to-r from-orange-300 to-yellow-700/90 bg-clip-text text-transparent">
            M.A.P
          </span>
        </h1>
        <p
          data-aos="fade-right"
          data-aos-duration="650"
          className="text-2xl md:text-3xl text-neutral-300 pb-14 md:pb-10 text-center"
        >
          Aulas teóricas e práticas com modelos
          <br /> para elevar a sua especialização em curvaturas.
        </p>
        <div className="flex w-fit items-center justify-center flex-col md:flex-row px-4 mx-auto gap-6">
          <div
            data-aos="fade-bottom"
            data-aos-duration="1000"
            className="flex flex-wrap max-w-5xl items-center justify-center gap-6"
          >
            <Modulos title="Transição capilar." img={img28} text="MÓDULO">
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
            </Modulos>

            <Modulos title="Big Chop" img={img25} text="MÓDULO">
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

            <Modulos title="Long Bob" img={img23} text="MÓDULO">
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

            <Modulos title="Corte em camadas altas" img={img21} text="MÓDULO">
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
              title="corte coração em cabelos afro"
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

            <Modulos title="corte em camadas médias" img={img29} text="MÓDULO">
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
          </div>
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
            <span className="bg-gradient-to-r from-orange-300 to-yellow-700/90 bg-clip-text text-transparent">Acesso excluvivo </span>a mentorias ao vivo garantindo sua vaga!
            </p>
            <p>
              Acesse ao Método por <span className="bg-gradient-to-r from-orange-300 to-yellow-700/90 bg-clip-text text-transparent">2 anos </span>E ainda recebendo atualizações com
              <span className="bg-gradient-to-r from-orange-300 to-yellow-700/90 bg-clip-text text-transparent"> módulos novos e técnicas exclusivas </span>por um ano. Sem pagar mais nada por
              isso.
            </p>
            <p>
              <span className="bg-gradient-to-r from-orange-300 to-yellow-700/90 bg-clip-text text-transparent">Mentoria vip exclusiva </span>para os primeiros alunos adquirir o 
              <span className="bg-gradient-to-r from-orange-300 to-yellow-700/90 bg-clip-text text-transparent"> M.A.P Transformation</span> 
            </p>
          </div>
          <Bonus title="Intrevistando a Cliente" img={img26} text="BÔNUS">
            <p className="font-bold">
              - Aula 1.{" "}
              <span className="font-normal">
                Avaliando o Cliente e Transição Capilar;
              </span>
            </p>
          </Bonus>
          <a href="https://pay.hotmart.com/S83235822U" target="blank">
            <button className="ease-in-out duration-300 hover:bg-neutral-900 hover:text-slate-50 mt-4 md:mt-0 3xl:mt-4 mx-auto md:w-[42rem] flex justify-center px-16 py-3 bg-slate-50 font-semibold text-xl md:text-2xl rounded transition-colors cursor-pointer shadow-lg">
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
                  src={img21}
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
                  src={img32}
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
                  src={img22}
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
                  src={img25}
                  alt="foto de cabelos cacheados"
                  className="rounded-lg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
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
            de corte tratamento e finalização para fidelização e clientes novos
            todos os dias.
          </p>
          <p className="text-md font-medium text-slate-200 mt-3">
            Hoje sou referência na área dos cachos, ganhadora de dois prêmios em
            São Paulo em cabelos crespos e cacheados 2022, e sendo homenageada
            entre as mulheres Empreendedoras de Sucesso pela Revista Regional em
            2022 2023. Criei o M.A.P para realizar meu sonho de ensinar
            profissionais tradicionais a se tornarem especialistas e alcançarem
            um novo patamar profissional.
          </p>
          <p className="text-md font-roboto font-semibold tracking-wide bg-gradient-to-r from-orange-300 to-yellow-700/90 bg-clip-text text-transparent uppercase md:px-20 text-center mt-6">
            o meu método já formou vários profissonais especialistas em cachos
          </p>
          <a href="https://pay.hotmart.com/S83235822U" target="blank">
            <button className="ease-in-out duration-300 hover:bg-neutral-900 hover:text-slate-50 mt-4 md:mt-0 3xl:mt-4 mx-auto md:w-[42rem] flex justify-center px-16 py-3 bg-slate-50 font-semibold text-xl md:text-2xl rounded transition-colors cursor-pointer shadow-lg">
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
            <Prices
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
            <Garantia img={selo} />
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
                  src="https://www.youtube.com/embed/oYpTjmUpcuk"
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
          <FaqDropdown
            question="Como vou ter acesso ao curso? "
            answer="O curso é online e permanece disponível na plataforma Hotmart. 
            Os vídeos contendo aulas teóricas e práticas são gravados e poderão ser vistos e revisitados, por um período de um ano, nesta plataforma.
            Ao adquirir o curso, você precisará configurar um acesso, seguindo orientações de um e-mail que chegará no endereço eletrônico cadastrado por você."
          />
          <FaqDropdown
            question="Como funciona o acompanhamento do curso?"
            answer="O aluno terá 6 aulas tira dúvidas, com duração média de uma hora, ao vivo, em complemento às aulas gravadas, de acordo com cronograma específico da turma. 
            Essas aulas tira-dúvidas são restritas aos alunos matriculados e em plataforma a definir, de acordo com o critério de melhor aproveitamento dos objetivos do curso.                        
            O objetivo destas aulas ao vivo será realizar o esclarecimento de dúvidas dos alunos, pelo professor do curso, referentes ao módulo em estudo."
          />
          <FaqDropdown
            question="O curso fornece certificado?"
            answer="Sim! Ao concluir 100% das aulas, você poderá gerar automaticamente o seu certificado de conclusão."
          />
          <FaqDropdown
            question="Consigo assistir do meu smartphone? "
            answer="Sim, você poderá acessar nosso conteúdo via smartphone"
          />
          <FaqDropdown
            question="Quanto tempo vou ter para consumir o material? "
            answer="Você pode ver e rever o curso sempre que desejar, por um período de 24 meses após a compra. 
            Lembrando que no período de um ano, você vai receber atualizações do curso, expandindo ainda mais o seu faturamento, sem nenhum custo por isso."
          />
          <FaqDropdown
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
          <button className="transition-all ease-in-out duration-300">
            <a href="https://pay.hotmart.com/S83235822U" target="blank">
              Inscreva-se Agora
            </a>
          </button>
        </div>
      </div>
    </main>
  );
}
