import React from 'react'
import { FaRegCircleUser } from "react-icons/fa6"
import ProfileMenu from './ProfileMenu'

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-upper">
                <FaRegCircleUser className='profile-icon' />
                <div className='profile-info'>
                    <h2>Murat Turan</h2>
                    <p>Tedarik Zinciri Yoneticisi</p>
                </div>
            </div>
            <ProfileMenu />
        </div>
    )
}

export default Profile