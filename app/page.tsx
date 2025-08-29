'use client';

import NavBar from "@/components/NavBar"
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import Hero from "@/sections/Hero";

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

  return (
    <>
      <motion.header id="home" className={`${top ? "" : "bg-primary-100"} padding-main fixed w-full top-0`}>
        <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </motion.header>
      <main className="padding-main">
        <Hero />
      </main>
      <footer>

      </footer>
    </>
  )
}

export default Home