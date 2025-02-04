import React from 'react'
import '../styles/contact.css'
import facbookicon from '../assests/facbookicon.png'
import instagramicon from '../assests/instagramicon.png'
import emailicon from '../assests/emailicon.png'
import phoneicon from '../assests/phoneicon.png'

const contact = () => {
  return (
    <div className='contact'>
        <h2>Get in Touch</h2>
        <br />
        <div className="box">
            <div className="line">
                <div className="icon">
                    <img src={facbookicon} alt="facebookicon" />
                </div>
                <div className="info">
                    <a href="https://www.facebook.com/people/Hope-Stouch/pfbid0kWFiHjWg88UHfKYXvTZPeUjfKHqY6tXAaCfzWVoQKyDqbPTGNGYbt7UAj2J6TWeul/">Facbook : Hope Stouch</a>
                </div>
            </div>
            <div className="line">
                <div className="icon">
                    <img src={instagramicon} alt="instagramicon" />
                </div>
                <div className="info">
                    <a href="https://www.facebook.com/people/Hope-Stouch/pfbid0kWFiHjWg88UHfKYXvTZPeUjfKHqY6tXAaCfzWVoQKyDqbPTGNGYbt7UAj2J6TWeul/">Instargram : Hope's Touch</a>
                </div>
            </div>
            <div className="line">
                <div className="icon">
                    <img src={emailicon} alt="emailicon" />
                </div>
                <div className="info">
                    <p>hopes.touch@gmail.com</p>
                </div>
            </div>
            <div className="line">
                <div className="icon">
                    <img src={phoneicon} alt="phoneicon" />
                </div>
                <div className="info">
                    <p>0553 23 56 14</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default contact