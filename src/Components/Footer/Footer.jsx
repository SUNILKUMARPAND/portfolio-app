import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsMedium } from 'react-icons/bs'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer_logo'>Sunil</a>
        <ul className='links'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
        </ul>

        <div className="footer_social">
            <a href="https://www.linkedin.com/in/sunilpanda90/"><BsLinkedin/></a>
            <a href="https://github.com/SUNILKUMARPAND"><BsGithub/></a>
            <a href="https://www.naukri.com/mnjuser/profile"><BsMedium/></a>
        </div>

        <div className="footer_copyright">
            <small>&copy; Sunil Kumar Panda. All Rights Reserved.</small>
        </div>

    </footer>
  )
}

export default Footer