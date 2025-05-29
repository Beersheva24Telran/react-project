import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const UserDetails = () => {
    const params = useParams();
    const location = useLocation();
    console.log(location)

  return (
    <div>user{params.id}</div>
  )
}

export default UserDetails