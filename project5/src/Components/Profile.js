import React, { useContext } from 'react'
import UserContext from '../UserContext'


const Profile = () => {
    const {user} = useContext(UserContext)
   if (!user) return <h4>Plz Login</h4>
   return(<h3>WellCome : {user.username}</h3>)
}

export default Profile
