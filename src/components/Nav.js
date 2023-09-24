import React from 'react'
import { AiOutlineExperiment } from "react-icons/ai"
import { RiRobot2Line } from "react-icons/ri"

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-upper">
        <div className="nav-upper-digital__mentore">
          <RiRobot2Line className='robot-icon'/>

          <span>Dijital Mentor ▼</span>
        </div>
        <div className="nav-upper-greet">
          <h2>Merhaba Murat Bey,</h2>
          <p>Talep etmiş olduğunuz tedarik zinciri raporunu oluşturdum. Bu alana tıklayarak rapora erişim sağlayabiliriniz.</p>
        </div>
      </div>
      <div className="nav-lower">
        <div className="nav-lower__logo">
          <AiOutlineExperiment className='experiment__logo'/>
          <h3>MOBILE COMBUSTION</h3>
          
        </div>
      </div>
    </nav>
  )
}

export default Nav