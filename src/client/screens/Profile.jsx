import React, { useContext } from 'react'
import GlobalState from '../state/GlobalState'

const Profile = () => {

    const {state} = useContext(GlobalState)

    return (
        <section>
            <h1 className='page-title'>Profile</h1>
            <h2 className='profile-title'>Welcome, {state.username}!</h2>
        </section>
    )
}

export default Profile
