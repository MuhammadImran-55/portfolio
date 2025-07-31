import React from 'react'
import './Work.css'
import amazon from '../../assets/img/amazon.png'
import upwork from '../../assets/img/Upwork.png'
import shopify from '../../assets/img/Shopify.png'
import fiverr from '../../assets/img/fiverr.png'
import facebook from '../../assets/img/Facebook.png'
import {motion} from 'framer-motion'

const Work = () => {
  const transition = {duration:2,type:'spring'}
  return (
    <div className='work'>
        <div className="services-text">
            <div className="services-heading">Work for All these <br /><span>Brands & Clients</span></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolores veniam quidem voluptate dicta quisquam molestiae similique ab id! Rerum.</p>
            <button className='btn cv-btn'>Downlaod CV</button>
        </div>
        
        <div className="brands">
          <div className='brands-main-sec'>
            <div className="main-circle" style={{border:'2px solid black'}}>
             <div className='b-b-circle'>
              <img className='b-img' src={amazon} alt="" />
             </div >
             <motion.div
             initial={{top:'36%', left:'36%'}}
               whileInView={{top:'-40px', left:'35%'}}
               transition={transition}
             className="b-b-circle">
              <a href=""><img 
              className='b-img' src={fiverr} alt="" /></a>
              </motion.div>
              <motion.div
              initial={{ left:'36%',bottom:'36%'}}
              whileInView={{left:'35%',bottom:'-12%'}}
              transition={transition}
              className='b-b-circle'>
              <a href=""><img 
              className='b-img' src={facebook} alt="" /></a>
              </motion.div>
              <motion.div
               initial={{top:'36%', left:'36%'}}
              whileInView={{left:'-40px', top:'36%'}}
              transition={transition}
              className='b-b-circle'>
              <a href=""><img
              className='b-img' src={upwork} alt="" /></a>
              </motion.div>
              <motion.div
              initial={{top:'36%', right:'36%'}}
                whileInView={{top:'36%', right:'-12%'}}
                transition={transition}
              className='b-b-circle'>
               <a href=""> <img
                className='b-img' src={shopify} alt="" /></a>
                </motion.div>
            </div>
             <div className="blue"></div>
             <div className="yellow"></div>
            </div>
        </div>
        <div className="blueeee"></div>
        <div className="greeeen"></div>
    </div>
  )
}

export default Work