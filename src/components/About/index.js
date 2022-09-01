import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

//   useEffect(() => {
//     return setTimeout(() => {
//       setLetterClass('text-animate-hover')
//     }, 3000)
//   }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a a sports fanatic,
            fashion enthusiast, and tech-obsessed!!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1 img-fluid">
              <FontAwesomeIcon icon={faAngular} color="#ee4047" />
            </div>
            <div className="face2 img-fluid">
              <FontAwesomeIcon icon={faHtml5} color="#333" />
            </div>
            <div className="face3 img-fluid">
              <FontAwesomeIcon icon={faCss3} color="#ee4047" />
            </div>
            <div className="face4 img-fluid">
              <FontAwesomeIcon icon={faReact} color="#333" />
            </div>
            <div className="face5 img-fluid">
              <FontAwesomeIcon icon={faJsSquare} color="#ee4047" />
            </div>
            <div className="face6 img-fluid">
              <FontAwesomeIcon icon={faGitAlt} color="#333" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
