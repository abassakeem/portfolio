import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/L.png';
import LogoTitle2 from '../../assets/images/A.png';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss';
import Loader from 'react-loaders';


const Home = () => {
    const [letterClass] = useState('text-animate');
    const nameArray1=['','a', 'n','r','e'," "," ", '-',];
    const nameArray2=['b','a','s','s'];
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']

//     useEffect(() => {
//         return setTimeout(() => {
//             setLetterClass('text-animate-hover')
//     }, 4000)
// }, [])

    

    return ( 
        <>
        <div className='container home-page'>
            <div className="text-zone">
                <h1>
                    <span className={`${letterClass} _12`}>H </span>
                    <span className={`${letterClass} _12` }> i,</span>
                    <br />
                    <span className={`${letterClass} _12`}>I'</span>
                    
                    <span className={`${letterClass} _12`}>m</span>
                <img src={LogoTitle} alt='developer' />
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray1} idx={8} />
                
                <img src={LogoTitle2} alt='developer' />
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray2} idx={8} />
                <br />
                
                <AnimatedLetters letterClass={letterClass} 
                strArray={jobArray} idx={22} />
               
                
                </h1>
                <h2>FullStack Developer</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        <Logo />
        </div> 
        <Loader type="pacman" />
        </>
        
     );
}
 
export default Home;