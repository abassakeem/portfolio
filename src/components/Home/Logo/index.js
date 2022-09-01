// import { useEffect, useRef } from 'react'
// import gsap from 'gsap-trial'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
 

  return (
    <div className="logo-container " >
     
        
      <span
        className="solid-logo logo1 glitch"
       
        src={LogoS}
        alt="JavaScript,  Developer "
      >L</span>
      <span 
        className="solid-logo logo2 glitch"
       
        src={LogoS}
        alt="JavaScript,  Developer  "
      >A</span>


    </div>
    
    
  )
}

export default Logo
