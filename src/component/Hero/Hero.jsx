import React from 'react'
import "./hero.scss"
import profile_img from "../../assets/profile_img.svg"
const Hero = () => {
  return (
    <div className='hero' id='home'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Alex Bennett,</span> frontend developer based in USA.</h1>
        <p>I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My Resume</div>

        </div>
    </div>
  )
}

export default Hero