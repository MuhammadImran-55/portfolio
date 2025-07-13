import React from 'react'
import './AllProjects.css'

const AllProjects = () => {
  return (
    <div className='all-projects'>
        <h1>All Projects</h1>

        <section className='css'>
            <div className='naam'>CSS</div>
            <div className="pro-card-cont">
                <div className="pro-card"></div>
                <div className="pro-card"></div>
                <div className="pro-card"></div>
            </div>

        </section>
        <section className='css'>
            <div className='naam'>JavaScript</div>
            <div className="pro-card-cont">
                <div className="pro-card"></div>
                <div className="pro-card"></div>
                <div className="pro-card"></div>
            </div>

        </section>
        <section className='css'>
            <div className='naam'>Tailwind</div>
            <div className="pro-card-cont">
                <div className="pro-card"></div>
                <div className="pro-card"></div>
                <div className="pro-card"></div>
            </div>

        </section>
    </div>
  )
}

export default AllProjects