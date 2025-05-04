import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We Ensure better Education for a better world!</h1>
            <p>We provide quality education to empower individuals and build a better, more informed world. Our goal is to inspire learning that drives positive change.</p>
            <button className='btn' >Explore More<img src={dark_arrow} alt=''/></button>

        </div>
      
    </div>
  )
}

export default Hero
