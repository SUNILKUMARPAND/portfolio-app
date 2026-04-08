import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'
import ME from '/Images/me.png'
import './Home.css'

const  Home = () => {
    return (
        <header id='home'>
            <div className="container home_container">
                <h5>Hello, I'm</h5>
                <h1>Sunil Kumar Panda</h1>
                <h5 className='text-light'>Frontend Developer</h5>
                <div className='cta'>
                    <a href="https://pdflink.to/sunilpanda26" download className='btn'>
                        Download CV
                    </a>
                    <a href="#contact" className='btn btn-primary'>
                        Contact Me
                    </a>
                </div>
                <div className="home_social">
                    <a href="https://www.linkedin.com/in/sunilpanda90">
                        <BsLinkedin />
                    </a>
                    <a href="https://github.com/SUNILKUMARPAND">
                        <BsGithub />
                    </a>
                    <a href="https://www.naukri.com/mnjuser/profile">
                        <BsMedium />
                    </a>
                </div>

                <div className="me">
                    <img src={ME} alt="Sunil" />
                </div>

                <a href="#contact" className='scroll_down'>
                    Scroll Down
                </a>
            </div>
        </header>
    )
}

export default Home
