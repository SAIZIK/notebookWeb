import React from 'react'
import '../styles/home.css'
import HopeVideo from '../assests/hopesTouch.MP4'
import notebookIcon from '../assests/notbookIcon.png'
import deliveryTruck from '../assests/deliveryTruck.png'
import { useNavigate } from 'react-router-dom';
import logoicon from '../assests/logo.png'


const Home = () => {

  const navigate = useNavigate()

  return (
    <div className='home'>

      <div className="page1">
        <div className="vidbox view">
          <div className="overlay"></div>
          <video src={HopeVideo} autoPlay loop muted></video>
          <div className="content">
            <h1>Welcome</h1>
            <h2>To Hopes Touch</h2>
            <br />
            <p>Where Thoughts can find a home</p>
            <br />
            <button onClick={()=> navigate('/shop')}>Explore</button>
          </div>
        </div>
      </div>

      <div className="page2">
        <div className="info view">
          <div className="img">
            <img src={notebookIcon} alt="notebookIcon" />
          </div>
          <div className="text">
            <h2>What is Hopes Touch?</h2>
            <p>
              Hopes Touch is a unique online platform where users can create and share their thoughts, feelings, and experiences. Users can create personalized notebooks, write poems, and even create virtual artwork inspired by their thoughts.
            </p>
          </div>
        </div>
        <img src={logoicon} alt="" width={300} className='logo'/>
        <div className="info view">
          <div className="img">
            <img src={deliveryTruck} alt="deliveryTruck" />
          </div>
          <div className="text">
            <h2>Delivery Service</h2>
            <p>
              work delivered to their home or office. This feature helps reduce the stress and time it takes for users to share their thoughts and experiences.
            </p>
          </div>
        </div>
        {/* <div className="info">
          <div className="img"></div>
          <div className="text"></div>
        </div> */}
      </div>
    </div>
  )
}

export default Home
