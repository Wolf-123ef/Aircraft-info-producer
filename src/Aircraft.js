import React, { memo } from 'react'
import {useState} from 'react'
import Info from './Info';
import './Aircraft.css';
const Aircraft = memo(() => {
   const [Data,setData] = useState(Info[0]);
   const getData =()=>{
      var randomNum = Math.floor(Math.random()*Info.length);
      setData(Info[randomNum]);
   }
  return (
     <div className='outline'>
        <div className='Info'>
         <div className='outer'>
             <h3>Name: {Data.name}</h3>
             <h4>Manufacturer: {Data.manufacturer}</h4>
             <img src={Data.image}/>
             <h5>INFORMATION:<br/> {Data.info}</h5>
            <p>{Info.manufacturer}</p>
            <button className='btn' onClick={getData}>Next</button>
        </div>
        </div>
     </div>
  )
})

export default Aircraft