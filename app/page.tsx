"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

import FlipWords from '@/components/ui/flip';
import CardSection from '@/components/card_section';
import Contact from '@/components/contacts';
import Socials from '@/components/socials';
import Footer from '@/components/footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  
  const WordsArray = [
    'creative',
    'smart',
    'ingenious'
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  return (
    <>
      <div className="flex justify-between gap-12 bg-transparent ml-8">
            <h1 className="text-indigo-600 font-bold text-6xl">G</h1>
            <div className="mr-2 lg:mr-24 pt-4">
              <Socials/>
            </div>
      </div>

      <div className="flex mt-24 lg:mt-48 ml-8 lg:ml-48">
        <div className="w-custom">
          <h1 className="text-4xl lg:text-7xl font-semibold">Hey, I&apos;m <span className="text-indigo-600">Gaël</span>👋</h1>
          <h2 className="text-2xl lg:text-4xl h-8">I&apos;m an <FlipWords words={WordsArray} className="text-indigo-600 font-bold"/> web developer</h2>
          <div className="pt-4 lg:pt-2"> 
            <p className="text-lg lg:text-xl pt-4">I currently live in <span className="bg-slate-800 rounded-lg p-1">Bordeaux, France 🇫🇷</span></p>
            <div className="pt-2">
              <Socials/>
            </div>
          </div>
          
        </div>
        <div className="ml-8">
          <img src="images/r9.jpg" className="rounded-full w-72 h-24 lg:w-72 lg:h-72" alt="profile picture" />
        </div>
      </div>

      <div className="mt-96 pb-48 ml-8 lg:ml-48">
        <Badge>Projects</Badge>
        <div className="mt-4">
          <h1 className="text-3xl md:text-4xl  lg:text-5xl font-semibold ">Discover my <span className="text-indigo-600 font-bold">projects</span></h1>
          <div data-aos="fade-right">
            <CardSection/>
          </div>
        </div>
      </div>

      <div className="ml-8 lg:ml-48 pb-96">
        <Badge>Skills</Badge>

        <div className="mt-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">I <span className="text-indigo-600 font-bold">love</span> working on...</h1>
          
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-1 lg:grid-cols-3 custom:grid-cols-3 mt-24" >
            <div className="flex flex-col w-full lg:w-96">
              <img src="images/react.svg" className="h-24 w-24" alt="" />
              <div className="mt-2">
                <h1 className="text-3xl ml-1 mt-1">React</h1>
                <p className="text-lg ml-1"><span className="bg-slate-800 rounded-lg p-1">React</span> is my main framework. I also work with <span className="bg-slate-800 rounded-lg p-1">Next.js</span> as a fullstack framework</p>
              </div>
            </div>

            <div className="flex flex-col w-full lg:w-96">
              <img src="images/Tailwind_CSS_Logo.svg.png" className="h-24 w-36" alt="" />
              <div className="mt-2">
                <h1 className="text-3xl ml-1 mt-1">Tailwind</h1>
                <p className="text-lg ml-1">I can create beautifuls apps in seconds using <span className="bg-slate-800 rounded-lg p-1">Tailwind</span></p>
              </div>
            </div>

            <div className="flex flex-col w-full lg:w-96">
              <img src="images/openai.png" className="h-24 " alt="" />
              <div className="mt-2">
                <h1 className="text-3xl ml-1 mt-1">AI Integration</h1>
                <p className="text-lg ml-1">I love integrating <span className="bg-slate-800 rounded-lg p-1">AIs like ChatGPT</span> into your apps in order to create a great user experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}
