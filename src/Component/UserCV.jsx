import './UserCV.css'
import React from 'react'
import Contacts from './Contacts'
import Experience from './Experience'
import PersonalInfo from './PersonalInfo'
import SoftSkill from './SoftSkill'
import Education from './Education'
const UserCV = () => {
    return (
        <div className='UserCV'>
             <PersonalInfo />
             <div className='container'>
            <Experience />
            <Contacts />
            <SoftSkill />
            <Education />
            </div>
        </div>
    )
}

export default UserCV