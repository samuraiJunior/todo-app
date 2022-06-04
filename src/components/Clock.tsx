import React, { useEffect, useState } from 'react'
import "../App.scss"


const Clock = () => {

    const clocks=(te:string)=>{
        const date=new Date()
        const minate=date.getMinutes()
        const seconds=date.getSeconds()
        const hour=(date.getHours() % 12) + minate / 59
        //console.log(hour)
        
        const text=te
        if(text==="seconds")return seconds
        if(text==="hours")return hour
        if(text==="minates")return minate
    }

    
   const [seconds,setseconds]=useState<any>(clocks("seconds"))
    const [hours,sethour]=useState<any>(clocks("hours"))
    const [minate,setminate]=useState<any>(clocks("minates"))
    useEffect(()=>{
        setTimeout(() => {
            setseconds(clocks("seconds"))
            sethour(clocks("hours"))
            setminate(clocks("minates"))
        },1000);
    },[seconds])
    
   


  return (
    <div className="clock">
        {/*<h1>{seconds}</h1>*/}
    <div  style={{transform: `rotate(${hours*30}deg)`}} className="hand hours"></div>
    <div style={{transform: `rotate(${minate*6}deg)`}} className="hand minutes"></div>
    <div  style={{transform: `rotate(${seconds*6}deg)`}} className="hand seconds"></div>
    <div className="point"></div>
    <div className="marker">
      <span className="marker__1"></span>
      <span className="marker__2"></span>
      <span className="marker__3"></span>
      <span className="marker__4"></span>
    </div>
  </div>
  )
}

export default Clock
