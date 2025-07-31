import React from 'react'
import './Navbar.css';
import '../../App.css'
import Toggle from '../toggle/Toggle';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left-nav">
            <div className="n-name">Imran</div>
            <span><Toggle/></span>
        </div>
        <div className="right-nav">
            <ul>
              <Link spy='true' to='navbar' smooth='true' >
                <li>Home</li>
              </Link>
              <Link spy='true' to='services' smooth='true' >
                <li>Services</li>
              </Link>
              <Link spy='true' to='experience' smooth='true' >
                <li>Experience</li>
              </Link>
              <Link spy='true' to='portfolio' smooth='true' >
                <li>Portfolio</li>
              </Link>
              <Link spy='true' to='testimonials' smooth='true' >
                <li>Testimonials</li>
              </Link>
            </ul>
                <div>
                  <Link spy='true' to='contact' smooth='true'>
                  <button className='btn'>Contact</button>
                  </Link>
                  </div>
        </div>
    </div>
  )
}

export default Navbar