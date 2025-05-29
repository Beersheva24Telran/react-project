import React from 'react'
import { Link } from 'react-router-dom'

const UsersList = () => {
  return (
    <ul>
        <li>
            <Link to="/user/1">Yuri</Link>
        </li>
        <li><Link to="/user/2">David</Link></li>
        <li><Link to="/user/3">Olya</Link></li>
        <li><Link to="/user/4">Sara</Link></li>
    </ul>
  )
}

export default UsersList