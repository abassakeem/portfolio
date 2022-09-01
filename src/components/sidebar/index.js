import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/LA.png'

import LogoSubtitle from '../../assets/images/TITLE.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () =>  (
    <div className='nav-bar'>   
        <Link className='logo' to ='/'>
            
            <img src={LogoS} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="Slobodan" />
        </Link>
        <nav>
            <NavLink exact='true' activeclassame='active' to='/'>
                <FontAwesomeIcon icon={faHome} color ="#4d4d4d" />
            </NavLink>
            <NavLink exact='true' activeclassame='active' className="about-link" to='/about'>
                <FontAwesomeIcon icon={faUser} color ="#4d4d4d" />
            </NavLink>
            <NavLink exact='true' activeclassame='active' className="contact-link" to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color ="#4d4d4d" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href="https://icons8.com/icons/set/letter-A" >  <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" /></a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://icons8.com/icons/set/letter-A" >  <FontAwesomeIcon icon={faGithub} color="#4d4d4e" /></a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://icons8.com/icons/set/letter-A" >  <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" /></a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://icons8.com/icons/set/letter-A" >  <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" /></a>
            </li>
        </ul>
    </div>
)

export default Sidebar;