"use client"
import React from 'react';
import {TypeAnimation} from "react-type-animation";
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// import '../global.css';
//bg-gradient-to-r from-[#0155F7] to-[#01B5C0]

const HeroSection = () => {
  return (
    <section className="lg:py-52 lg:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.5}}
                className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
            >
                <h1 className="text-[#2c2c2c] mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                    <span className="text-[#808080] bg-clip-text">
                        Hello, I'm {" "}
                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            "Anant",
                            2500,
                            "Web Developer",
                            1000,
                            "Anant",
                            2500,
                        ]}
                        wrapper="span"
                        speed={10}
                        repeat={0}
                    />
                </h1>
                <p className="text-[#a8a8a8] text-base sm:text-lg mb-6 lg:text-xl">
                    Hello, I'm a passionate web developer who's up for hire!
                </p>
                <div className="text-[#000000] font-semibold">
                    <Link href="/#contact"
                    className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-[#cecece]"
                    >
                        Contact me
                    </Link>
                    <Link href="/Anant_Resume.pdf"
                    target="_blank"
                    rel="noopener norefferer"
                    className="px-1 py-1 mt-3 inline-block w-full sm:w-fit rounded-full bg-transparent border-4 border-[#cecece]"
                    >
                    <span className="block bg-transparent hover:bg-[#cecece] rounded-full px-5 py-2">
                        Download CV
                    </span>
                    </Link>
                </div>
            </motion.div>
            <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#ececec] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/displayImg.jpg"
              alt="hero image"
              className="absolute transform w-[90%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
        </div>
    </section>
  )
}

export default HeroSection;