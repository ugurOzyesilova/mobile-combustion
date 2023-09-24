import React from 'react'
import {MdCastForEducation} from "react-icons/md"

const ProfileMenu = () => {
    return (
        <div className='profile-menu'>
            <div>
                <h3>MENU</h3>
                <nav>
                    <div>
                        <MdCastForEducation className='menu-icon'/>
                        <span>Eğitimler</span>
                    </div>
                    <div>
                        <MdCastForEducation className='menu-icon' />
                        <span>Analizler</span>
                    </div>
                    <div>
                        <MdCastForEducation className='menu-icon' />
                        <span>Raporlar</span>
                    </div>
                    <div>
                        <MdCastForEducation className='menu-icon' />
                        <span>Profil</span>
                    </div>

                    <div>
                        <MdCastForEducation className='menu-icon' />
                        <span>TIM'e yaz</span>
                    </div>
                </nav>
            </div>
            <h3>TERCIHLER</h3>
            <nav>
                <div>
                    <MdCastForEducation className='menu-icon' />
                    <span>Yetkilendirme</span>
                </div>
                <div>
                    <MdCastForEducation className='menu-icon' />
                    <span>Şifremi Değiştir</span>
                </div>
                <div>
                    <MdCastForEducation className='menu-icon' />
                    <span>Gizlilik Politikası</span>
                </div>
            </nav>
            <div className='menu-image'>
                <img src="https://tim.org.tr/files/images/content/logolar/tim_logotype.png" alt="" />
            </div>
            

        </div>
    )
}

export default ProfileMenu