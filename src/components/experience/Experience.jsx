import React, { useEffect, useState } from 'react'
import './Experience.css'

const Experience = () => {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);

    useEffect(() => {
        let num= 5;
        let intervel=setInterval(() => {
                setCounter(prev=>{
                    if(prev<num){
                        return prev+1;
                    }
                    else{
                        clearInterval(intervel);
                        return prev;
                    }
                });

            return ()=>clearInterval(intervel);
        }, 1000);
    }, [])
    useEffect(() => {
        let num=30;
        let intervel2=setInterval(() => {
                setCounter2(prev=>{
                    if(prev<num){
                        return prev+1;
                    }
                    else{
                        clearInterval(intervel2);
                        return prev;
                    }
                });

            return ()=>clearInterval(intervel2);
        }, 100);
    }, [])
    useEffect(() => {
        let num=10;
        let intervel3=setInterval(() => {
                setCounter3(prev=>{
                    if(prev<num){
                        return prev+1;
                    }
                    else{
                        clearInterval(intervel3);
                        return prev;
                    }
                });

            return ()=>clearInterval(intervel3);
        }, 100);
    }, [])
    
    
  return (
    <div className='experience' id='experience'>
        <div className="circles-sec">
            <div className="circle">
                <div className="num">{counter}+</div>
                <div className="circle-text">Years <br /><span>Experience</span></div>
            </div>
            <div className="circle">
                <div className="num">{counter2}+</div>
                <div className="circle-text">Completed <br /><span>Projects</span></div>
            </div>
            <div className="circle">
                <div className="num">{counter3}+</div>
                <div className="circle-text">Companies <br /><span>Work</span></div>
            </div>
        </div>
    </div>
  )
}

export default Experience