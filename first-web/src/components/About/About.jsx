import React from 'react'
import "./About.css"
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt=''className='about-img'/>
            <img src={play_icon} alt='' className='play-icon'/>

        </div>
        <div className='about-right'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Embodies our mission to identify, inspire, and equip emerging leaders with the tools they need to make a meaningful impact on the world. Through a strong emphasis on education, character development, mentorship, and real-world experience, we create environments where young minds are encouraged to think critically, act ethically, and lead confidently. By investing in their growth now, we help shape a future guided by vision, responsibility, and innovation.</p>
            <p>Speaks to our dedication to cultivating potential in young individuals by providing them with the support, guidance, and opportunities they need to thrive. We believe that leadership is not just about authority, but about empathy, resilience, and the ability to inspire others. Through hands-on learning, values-driven mentorship, and a focus on personal and professional growth, we aim to shape individuals who are not only prepared for the challenges of tomorrow but who are also committed to creating positive change in their communities and beyond.</p>


        </div>
      
    </div>
  )
}

export default About
