import { useRef, useState } from "react";
import { TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import { MapContainer } from "react-leaflet";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';
import emailjs from '@emailjs/browser'


    
  
const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm =useRef()
  
  //   useEffect(() => {
  //     return setTimeout(() => {
  //       setLetterClass('text-animate-hover')
  //     }, 3000)
  //   }, [])
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmail',
        'template_4fqm60j',
        refForm.current,
        'ySvQlUJpahEM6jW9PkQ-M'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
    return (  
    <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                     strArray={['C','o','n','t','a','c','t',' ','m','e']}
                    idx={15}/>
                   <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects.<br/> However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
                </h1>
            </div>
        </div>
        <div className="info-map">
          Lanre-Abass Akeem<br />
          Ibadan,
          <br />
          Oyo State
          <br />
         Nigeria<br />
          <br />
          <br />
          <span>lanreabassab1@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[7.4342, 3.9496]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[7.4342, 3.9496]}>
              <Popup>lanre- Abass Akeem lives here, come over :)</Popup>
            </Marker>
          </MapContainer>
        </div>
        
        <Loader type="pacman" />
        </>
       
    );
}
 
export default Contact;