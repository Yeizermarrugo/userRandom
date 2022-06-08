import React, { useEffect, useState } from 'react'
import useApi from '../hooks/useApi'

const CardUser = () => {
    
    const {user, getRandomUser}= useApi() 

  return (
    <article>
        <ul>
        <div className="img"> <img src={user.picture?.large} alt="Avatar user" /></div>
        <li><b>Nombre: </b>{user.name?.title}{user.name?.first} {user.name?.last}</li>
        <li><b>Email: </b>{user.email}</li>
        <li><b>Ciudad: </b>{user.location?.city}</li>
        <li><b>Pais: </b>{user.location?.country}</li>
        <button className='btn' onClick={getRandomUser}>Next</button>
      </ul>
    </article>
  )
}


export default CardUser