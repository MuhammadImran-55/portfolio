import React from 'react'
import wave from '../../assets/img/wave.png'
import './Footer.css'
import { UilFacebookF } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons'



const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-content">
            <h1>copyright &copy; by Muhammad Imran</h1>
            <div className="icons">
              <a href="https://www.facebook.com/share/1B9KDfShwX/" target="_blank" rel="noopener noreferrer">
               <UilFacebookF color={'white'} size='3rem'/>
              </a>
              <a target='_blank' href="https://www.instagram.com/m.imran_54?igsh=bHMwMHIzZGNnZHNw">
               <UilInstagram color={'white'} size='3rem'/>

              </a>
              <a target='_blank' href="https://github.com/MuhammadImran-55">
               <UilGithub color={'white'} size='3rem'/>

              </a>
            </div>
        </div>
        <img src={wave} alt="" />
    </div>
  )
}

export default Footer