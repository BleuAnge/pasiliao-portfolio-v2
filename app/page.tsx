'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';
import './css/main-menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';
import NavButton from './components/NavButton';

import Main from './components/sections/Main';
import About from './components/sections/About';
import MySkills from './components/sections/MySkills';
import Project from './components/sections/Project';
import Contact from './components/sections/Contact';

export default function Home() {
  const [ currentSection , setCurrentSection ] = useState(0)
  const sideProgress = []
  const content = [<Main /> , <About /> , <MySkills /> , <Project /> , <Contact />]

  const handleClickScroll = (sectionNumber : number) => {
    const element = document.getElementById(`section-${sectionNumber}`);

    updateCurrentSection(sectionNumber)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
    }
  }

  const updateCurrentSection = (sectionNumber : number) => {
    setCurrentSection((prev) => (prev = sectionNumber))
  }

  for (var i = 0; i <= 4; i++) {
    sideProgress.push(
      <motion.span layoutId='side_progress' className="relative text-black">
        {
          currentSection == i ?
            <motion.span layoutId='current_section' className="absolute left-0 top-0 block h-[2px] text-white w-full">
              <FontAwesomeIcon icon={faDiamond}/>
            </motion.span>
          : null
        }
        <FontAwesomeIcon icon={faDiamond}/>
      </motion.span>
    )
  }

  return (
    <main className='overflow-hidden bg-gray-500'>
      <header className={`w-screen h-[64px] bg-gray-700 fixed flex justify-end transition-all duration-100 ${currentSection == 0 ? 'bg-opacity-10' : 'bg-opacity-80'} `}>
        <NavButton handleClickScroll={handleClickScroll} currentSection={currentSection} />
      </header>
      <div className="content-container">
        <div className='w-[64px] h-screen fixed flex flex-col gap-4 justify-center items-center '>
          { sideProgress } 
        </div>
        {
          content.map((item , index) => {
            return(
              <div  className="content-area" id={`section-${index}`} 
                    onMouseEnter={() => {
                      setCurrentSection((prev) => (prev = index))
                      handleClickScroll(index)
                    }}>
                {item}
              </div>
            )
          })
        }
      </div>
    </main>   
  )
}
