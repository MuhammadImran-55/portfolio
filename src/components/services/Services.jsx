import React from 'react'
import './Services.css'
import heart from '../../assets/img/heartemoji.png'
import humble from '../../assets/img/humble.png'
import glasses from '../../assets/img/glassesimoji.png'
import {motion, transform} from 'framer-motion'


const Services = () => {
    const transition = {duration:2,type:'spring'}
  return (
    
    <div className='services' id='services'>
        <div className="services-text">
            <div className="services-heading">My Awesome <br /><span>Services</span></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolores veniam quidem voluptate dicta quisquam molestiae similique ab id! Rerum.</p>
            <button className='btn cv-btn'>Downlaod CV</button>
        </div>
        <div className="services-cards">
            <motion.div
  initial={{ x: 100, y: 50 }}
  whileInView={{ x: 0, y: 0 }}
  transition={transition}
  className="card"
>
                <img className='heart' src={heart} alt="" />
                <div className="card-h1">UI/UX</div>
                <div className="card-desc">Figma,Sketch,Photoshop,Adobe illustrator,Adobe xd</div>
                <button className='ser-card-btn'>LEARN MORE</button>
            </motion.div>
            <motion.div
  initial={{ x: 100, y: 50 }}
  whileInView={{ x: 0, y: 0 }}
  transition={transition}
  className="card"
>
                <img className='heart' src={glasses} alt="" />
                <div className="card-h1">Developer</div>
                <div className="card-desc">HTML,CSS,JavaScript,React,Node Js,Express,Tailwind</div>
                <button className='ser-card-btn'>LEARN MORE</button>
            </motion.div>
            <motion.div
  initial={{ x: 100, y: 50 }}
  whileInView={{ x: 0, y: 0 }}
  transition={transition}
  className="card"
>
                <img className='heart' src={humble} alt="" />
                <div className="card-h1">Video editing and automation tools</div>
                <div className="card-desc">Capcut, After Effect , n8n, make.com</div>
                <button className='ser-card-btn'>LEARN MORE</button>
            </motion.div>
        </div>
            <div className="cyan-2"></div>
            <div className="pinkee"></div>
        
    </div>
  )
}

export default Services