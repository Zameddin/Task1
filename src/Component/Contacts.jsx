import './Contacts.css'
import React from 'react'

const Contacts = () => {
    let email = 'zameddin.israfilov1@gmail.com'
    let telNumber = '051-442-51-98'
    
  return (
<div className='Contact'>
<p className='contact'>Contact</p>
<p className='email'>Email: {email}</p>
<p className='number'>Phone number: {telNumber}</p>
    </div>
  )
}

export default Contacts