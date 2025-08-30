'use client';

import NavBar from "@/components/NavBar"
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion"
import Hero from "@/sections/Hero";
import Benefits from "@/sections/Benefits";
import Classes from "@/sections/Classes";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

const Home = () => {

  const [selectedPage, setSelectedPage] = useState<string>("home")
  const [top, setTop] = useState<boolean>(true)

  useEffect(() => {
    if(selectedPage === "home"){
      setTop(true)
    }else{
      setTop(false)
    }
  }, [selectedPage])

  const navBarVariant = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1
    }
  }

  return (
    <>
      <motion.header variants={navBarVariant} initial="hidden" whileInView={"show"} id="home" className={`${top ? "" : "bg-primary-100"} padding-main fixed w-full top-0`}>
        <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </motion.header>
      <main>
        <Hero />
        <Benefits />
        <Classes />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Home