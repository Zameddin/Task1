import './PersonalInfo.css'
import React from 'react'
import Photo1 from '../Images/Photo.jpg'
const PersonalInfo = () => {
let name = "Zameddin Israfilov";
    let age = 'Age:' + 20;
    let location = 'Location: Sumqait seheri, 21-ci mikrorayon'
  return (
    <div className='Personal'>
      
      <img src={Photo1} alt='myphoto'/>
      <div className='container'>
   <h1 className='name'>{name} </h1>  
    <p className='age'> {age} </p>
    <p className='location'> {location} </p>
    <h2>Computer engineering student</h2>
    </div>
    </div>
  )
}


export default PersonalInfo