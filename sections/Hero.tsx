import Image from "next/image"
import homeImage from "../public/HomePageGraphic.png"
import homeTitle from "../public/HomePageText.png"
import ActionButton from "@/components/ActionButton"
import backgroundImage from "../public/EvolveText.png"
import Button from "@/components/Button"
import redBull from "../public/SponsorRedBull.png"
import forbes from "../public/SponsorForbes.png"
import fortune from "../public/SponsorFortune.png"
import { motion } from "framer-motion"
import {variant, variant2} from "../motions/motion"

const Hero = ({setSelectedPage}: {setSelectedPage: (page: string) => void}) => {
  return (
    <motion.section  onViewportEnter={() =>setSelectedPage("home")} id="home" className="pt-20 md:pt-30 lg:pt-20 h-full ">
        <div className="flex padding-main lg:items-center justify-between h-full pb-10 flex-col gap-5 lg:flex-row z-10">
            <motion.div variants={variant} initial="hidden" whileInView={"show"}   className="relative flex flex-col gap-5 lg:w-1/2">
                <Image src={backgroundImage} alt="background hero image" width={500} height={100} className="absolute -z-20 -top-[10000px] lg:-top-12 -left-12" />
                <Image src={homeTitle} alt="Title Main heading image" width={400} height={100} className="-z-10" />
                <p className="text-base text-gray-500 -z-10">Unrivaled Gym. Unparallel Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of... Get Your Dream Body Now.</p>
                <div className="flex flex-col sm:flex-row gap-5">
                    <ActionButton text="Join Now" />
                    <Button text="Learn More" />
                </div>
            </motion.div>
            <motion.div  variants={variant} initial="hidden" whileInView={"show"}  className="center">
                <Image src={homeImage} width={450} height={300} alt="hero image main" />
            </motion.div>
      </div>
      <motion.div viewport={{once: true}} variants={variant2} initial="hidden" whileInView={"show"} className="bg-primary-100 items-center px-20 md:justify-center gap-30 py-10 hidden md:flex">
        <Image src={redBull} alt="Redbull Image" width={70} height={80} />
        <Image src={forbes} alt="Forbes Image" className="h-7" width={100} height={80} />
        <Image src={fortune} alt="Fortune Image" className="h-7" width={100} height={80} />
      </motion.div>
    </motion.section>
  )
}

export default Hero
