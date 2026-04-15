import React from 'react'
import './RecentProjects.css';
// import Swiper from 'swiper';
import {Swiper, SwiperSlide } from 'swiper/react';
import Hoc from '../../assets/img/hoc.png'
import Sidebar from '../../assets/img/sidebar.png'
import Reactpro from '../../assets/img/react.jpg'
import 'swiper/css'
import img1 from './../../assets/img/enigma.png'
import img2 from './../../assets/img/futuristic.png'
import img3 from './../../assets/img/preview.png'
import img4 from './../../assets/img/dashboard.png'

const RecentProjects = () => {
  return (
    <div className='recent-projects'>
      {/* <div className="recent-heading"> */}
           <span>Recent Projects</span>
            <span>Portfolio</span>
      {/* </div> */}

    <Swiper
     grabCursor={true}
     spaceBetween={30}
     slidesPerView={3}
     className='recent-pro'
    >
        <SwiperSlide>
            <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" />
        </SwiperSlide>
    </Swiper>

    </div>
  )
}

export default RecentProjects