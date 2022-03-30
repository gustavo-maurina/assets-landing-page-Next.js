import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => (
  <section
    id="inicio"
    className="bg-hero bg-mainPurple relative flex justify-center h-[550px] md:h-[750px] pt-[80px] lg:pt-[125px]"
  >
    <Image src="/img.webp" alt="" layout="fill" className="z-0" />
    <div className="flex flex-col full-center gap-16 z-10 lg:gap-36 content">
      <div className="h-1/4 w-[95%] flex flex-col items-center">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-4xl lg:text-7xl text-white text-center mb-7 font-bold ubuntu"
        >
          lorem
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="text-md lg:text-xl lg:w-2/3 text-slate-200 text-center font-light"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, totam.
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          className="text-yellow-300 text-md mt-8 font-light"
        >
          lorem
        </p>
        <Link href="/#teste" passHref={undefined}>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
            <m.button
              whileHover={{ scale: 1.05 }}
              className="bg-yellow-400 text-md px-4 py-2 rounded mt-2 shadow hover:cursor-pointer z-10"
            >
              lorem
            </m.button>
          </div>
        </Link>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1000"
        className="relative -mb-16 lg:-mb-24 w-[90%] sm:w-3/5 h-4/5 z-10 flex justify-center items-center"
      >
        <Image src="/teste.webp" alt="" width={1100} height={699} />
      </div>
    </div>
    <div className="absolute bottom-[-2px]">
      <div className="relative w-screen h-[100px] lg:h-[274px]">
        <Image src="/teste.png" layout="fill" alt="" />
      </div>
    </div>
  </section>
);
