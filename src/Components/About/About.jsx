import React from 'react'
import myImage from '/Images/me2.png'
import { GiGraduateCap } from "react-icons/gi";
import { BsTelephoneForward } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import './About.css'

const About = () => {
  return (
    <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className='container about_container'>
            <div className="about_me">
                <div className="about_me_image">
                    <img src={myImage} alt="Sunil" />
                </div>
            </div>

            <div className="about_content">
                <div className="about_cards">
                    <article className="about_card">
                        <GiGraduateCap  className='about_icon'/>
                        <h5>Degree</h5>
                        <small>
                            B.Tech Information Technology <br/>
                            <i>BPUT</i>
                        </small>
                    </article>
                    <article className="about_card">
                        <TfiWorld  className='about_icon'/>
                        <h5>Loaction</h5>
                        <small>
                           Marathalli,Bengaluru
                        </small>
                    </article>
                    <article className="about_card">
                        <BsTelephoneForward  className='about_icon'/>
                        <h5>Contact</h5>
                        <small>
                            <ul>
                                <li>Phone: 9036915145 </li>
                                <li>Email: sunilkumarpanda132@gmail.com</li>
                            </ul>
                        </small>
                    </article>
                </div>
                <p>
                    I am an immediate joiner & looking for a front-end developer role. Experienced professional with 2+ years in HTML/CSS, JavaScript/TypeScript, ReactJS & Next.js.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About