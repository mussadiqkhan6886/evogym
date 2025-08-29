import React from 'react'

const Navigation = ({selectedPage}: {selectedPage: string}) => {
  return (
    <>
        <li>
            <a className={`${selectedPage === "home" ? "text-primary-500" : ""} link `} href="#home"> Home </a>
        </li>
        <li>
            <a className={`${selectedPage === "benefits" ? "text-primary-500" : ""} link `}  href="#benefits">Benefits</a>
        </li>
        <li>
            <a className={`${selectedPage === "classes" ? "text-primary-500" : ""} link `}  href="#classes">Classes</a>
        </li>
        <li>
            <a className={`${selectedPage === "contact" ? "text-primary-500" : ""} link `}  href="#contact">Contact us</a>
        </li> 
    </>
  )
}

export default Navigation
