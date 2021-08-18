import React, {useState, useEffect} from "react";
import bg from "../assets/images/Home_bg_1.svg";
import Logo from "../assets/images/Logo.svg";
import HomeIllustration from "../assets/images/Home_illustration.svg";
import HomeUser from "../assets/images/Home_user.svg";
import feedbackEmoji1 from '../assets/images/feedbackEmoji-1.svg'
import feedbackEmoji2 from '../assets/images/feedbackEmoji-2.svg'
import feedbackEmoji3 from '../assets/images/feedbackEmoji-3.svg'
import feedbackEmoji4 from '../assets/images/feedbackEmoji-4.svg'
import feedbackEmoji5 from '../assets/images/feedbackEmoji-5.svg'
import rangeslider from '../assets/images/rangeslider.svg'
import feedbacktextarea from '../assets/images/feedbacktextarea.svg'
import {Link} from 'react-router-dom';
import '../assets/css/animation.css';
import axios from "axios";
import { browserName } from 'react-device-detect';
//import Feedbacklogo from '../assets/images/feedback-logo.svg'
import base_url from './Config';


const Dashboard = ({history}) => {
    const user = 'Guest User';
    const [feedbackform, setFeedbackForm] = useState(false);
    const [showfeedbackscreen, setShowFeedbackScreen] = useState(false);

    const [Fullname, setFullname] = useState('');
    const [UserId, setUserId] = useState('');
    const [Message, setMessage] = useState('');
    const [Rating, setRating] = useState('');
    const [ip, setIP] = useState('');
    const [userToken, setUserToken] = useState('');
    const [display ,setDisplay] = useState(false)
    const rangeSliderClasses = {
        background : `url(${rangeslider})`,
        backgroundRepeat : 'no-repeat',
        outline: 'none',
        opacity: '.7',
        appearance : 'none'
    }
    const getIpData = async () => {
      const res = await axios.get('https://geolocation-db.com/json/')
      setIP(res.data.IPv4)
    }
    function getUserInfo() {
      localStorage.getItem('userInfo')
    }
    useEffect( () => {
      getIpData();
      getUserInfo();
      let userfullName = localStorage.getItem('userfullName');
      let userId = localStorage.getItem('userId');
      let userToken = localStorage.getItem('token');
      console.log("userInfo",userfullName,"userId",userId);
      if (userfullName) {
        setFullname(userfullName)
      } else {
        setFullname(user)
      }
      if (userId) {
        setUserId(userId)
      }
      if (userToken) {
        setUserToken(userToken)
      }
      
    }, []);
    function getOS() {
      var userAgent = window.navigator.userAgent,
          platform = window.navigator.platform,
          macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
          windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
          iosPlatforms = ['iPhone', 'iPad', 'iPod'],
          os = null;
    
      if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
      } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
      } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
      } else if (/Android/.test(userAgent)) {
        os = 'Android';
      } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
      }
      return os;
    }
    const submitValue = (e) => {
      e.preventDefault();
      const formData = {
          fullName: Fullname,
          os: getOS(),
          browser: browserName,
          ipAddress: ip,
          network: "LAN",
          rating: Rating,
          message: Message,
          id: UserId
      }
      console.log("line 60",formData, browserName)
      axios.post("http://localhost:3030/api/v1/feedback",formData).then(res => {   
          console.log("line 63",res)
          if(res.status === 200) {
              setShowFeedbackScreen(false)
          }
      })
  }
    const onSignOut = (e) => {
      localStorage.removeItem('userfullName');
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      history.push("/dashboard")
    }
    return (
        <div className={["relative w-screen"]}>
      <img src={bg} alt="" className={["h-screen w-screen object-cover"]} />
      <div className={["absolute top-0 left-0 right-0 py-12"]}>
        <div className={["flex w-10/12 mx-auto justify-between"]}>
          <Link to="/"><img src={Logo} className="roll-in-left" alt="" /></Link>
          <ul className={["flex align-center items-center"]}>
            <li className="scale-in-hor-center"> 
              <Link to="/" className={['mx-3 font-light bg-white px-5 py-2 rounded rounded-full text-sm text-gray-500']} onClick={(event) => onSignOut(event)}>SIGN OUT </Link> 
            </li>
            <li className="rotate-in-2-fwd-ccw"> <Link to="#" className={['']}> <img src={HomeUser} alt="" /> </Link> </li>
          </ul>
        </div>
        <div className={['sm:mt-32 mt-16 w-10/12 mx-auto lg:flex']}>
          <div className={['xl:w-1/2 lg:w-11/12 xl:pr-10']}>
            <h2 className={['sm:text-7xl xl:text-8xl font-extrabold text-white leading-0 2xl:text-9xl slide-in-left']}>Business <span className={['font-thin mt-0']}>workflow</span></h2>
            <p className={['sm:text-xl sm:font-light sm:mt-6 xl:text-xl font-thin text-white xl:mt-10 leading-10 slide-in-top']}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              amet aliquam itaque harum accusantium perferendis cum quas
              expedita rerum magnam.
            </p>
          </div>
          <div>
            <img src={HomeIllustration} alt="" className={['hidden lg:block animate-bounce']} />
          </div>
        </div>
      </div>
      <img  src={Logo} alt="" className={feedbackform ? ['absolute bottom-0 right-72 transform scale-75 cursor-pointer'] : showfeedbackscreen ? [`absolute bottom-5 right-72 transform scale-75 cursor-pointer}`] : [`absolute bottom-5 right-5 transform scale-75 cursor-pointer}`]} style={{zIndex : '1'}}  onClick={() =>setFeedbackForm(!feedbackform)} />
      {feedbackform && <div className={['bg-white w-80 h-3/5 shadow-lg rounded-tr-3xl rounded-bl-3xl absolute bottom-5 right-5']} style={{zIndex : '0'}}>
        <div onClick={(e)=>setDisplay(true)} className={['bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 w-36 py-2 px-2 mt-4 ml-4 rounded-lg flex justify-between font-light text-white role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1"']}>
           <p>Hi </p>          
           <span>
             <i className="fa fa-chevron-down" aria-hidden="true"></i>
             <p> {display &&  Fullname && Fullname } </p>
           </span>
        </div>
         <div className={['mx-auto w-24 py-1']}>           
           <Link to="/">
            <button href="/" className={['mx-3 bg-gradient-to-r from-yellow-400 via-red-500 to-red-600 rounded rounded-full text-black']} 
            style={{fontSize: '8px', padding : '2px 4px'}} onClick={(event) => onSignOut(event)}>SIGN OUT</button>
         </Link>
         </div>
         
         <div className={['sm:mt-4 md:mt-8 w-52 mt-12 mx-auto']}>
             <h3 className={['text-center text-gray-500']}>FEDDUP PORTAL</h3>
             <div className={['bg-pink-500 mt-3 w-full py-4 px-4 text-xs rounded flex justify-between font-light text-white cursor-pointer']} onClick={() => {
                 if(feedbackform) {
                    setFeedbackForm(!feedbackform)
                 }
                 setShowFeedbackScreen(!showfeedbackscreen)}
             }>
             <p className={['opacity-100']}>Feedback</p>
             </div>
             <div className={['bg-pink-500 mt-3 w-full py-4 px-4 text-xs rounded flex justify-between font-light text-white']}>
             <p className={['opacity-100']}>Suggestion</p>
             </div>
             <div className={['bg-pink-500 mt-3 w-full py-4 px-4 text-xs rounded flex justify-between font-light text-white']}>
             <p className={['opacity-100']}>Help</p>
             </div>
             <div className={['bg-pink-500 mt-3 w-full py-4 px-4 text-xs rounded flex justify-between font-light text-white']}>
             <p className={['opacity-100']}>FAQs</p>
             </div>
             <div className={['bg-pink-500 mt-3 w-full py-4 px-4 text-xs rounded flex justify-between font-light text-white cursor-pointer']} onClick={() => {
                 if(feedbackform) {
                    setFeedbackForm(!feedbackform)
                 }
                 setShowFeedbackScreen(!showfeedbackscreen)}
             }>
             <p className={['opacity-100']}>Feedback Portal</p>
             </div>
             <div className={['w-24 rounded mx-auto text-center sm:mt-8 md:mt-4 lg:mt-12 bg-red-500 text-white relative cursor-pointer']} style={{padding : '1px'}} onClick={() =>setFeedbackForm(!feedbackform)}>
             <button className={['text-xs font-thin']}>Close</button>
             <span className={['absolute text-red-500 -top-4 left-10']}><i class="fa fa-caret-up fa-2x" aria-hidden="true"></i></span>
             </div>
         </div>
      </div>}
      {showfeedbackscreen &&
        <div className={['py-7 px-5 bg-white w-72 h-2/4 shadow-lg rounded-tr-3xl rounded-bl-3xl absolute bottom-5 right-5']}>
            <h3 className={['text-center text-lg py-2']}>FEEDBACK</h3>
            <p className={['text-xs font-light mb-5']}>Will you recommend the tool to your friends</p>
            <div className={['flex justify-between px-4']}>
                <img src={feedbackEmoji1} alt="" />
                <img src={feedbackEmoji2} alt="" />
                <img src={feedbackEmoji3} alt="" />
                <img src={feedbackEmoji4} alt="" />
                <img src={feedbackEmoji5} alt="" />
            </div>
            <input type="range" name="rating" id="rating" className={['w-full mt-5 px-2']} style={rangeSliderClasses} min='1' max='5' step="1" onChange={(e)=>setRating(e.target.value)}/>
            <p className={['text-xs font-light mt-2 mb-3']}>Your precious feedback...</p>
            <textarea name="" id="" cols="30" rows="7" maxLength="100" style={{autoFocus : 'none', resize : 'none'}} 
            className={['w-full rounded px-10 font-light text-xs text-gray-500 tracking-wider leading-5 pt-5']} 
            style={{background : `url(${feedbacktextarea}) no-repeat`, zIndex : '1000'}} 
            onChange={e => setMessage(e.target.value)}></textarea>
            <div className={['flex']}>
            <div className={['w-28 rounded mx-auto text-center sm:mt-8 md:mt-4 bg-yellow-500 text-white relative cursor-pointer']} style={{padding : '3px'}} onClick={() =>setFeedbackForm(!feedbackform)}>
             <button className={['text-xs font-light']} onClick={() => {
                 if(feedbackform) {
                     setFeedbackForm(!feedbackform)
                 }
                 setShowFeedbackScreen(!showfeedbackscreen)}
             }>Back</button>
             <span className={['absolute text-yellow-500 -top-4 left-11']}><i class="fa fa-caret-up fa-2x" aria-hidden="true"></i></span>
             </div>
             <div className={['w-28 rounded mx-auto text-center sm:mt-8 md:mt-4 bg-green-600 text-white relative cursor-pointer']} style={{padding : '3px'}}>
             <button className={['text-xs font-light']} 
            //  onClick={() => user ? alert('Feedback submitted') : alert('please login first')} 
             onClick={(event) => submitValue(event)}
             >Submit</button>
             <span className={['absolute text-green-600 -top-4 left-11']}><i class="fa fa-caret-up fa-2x" aria-hidden="true"></i></span>
             </div>
            </div>
        </div>
      }
    </div>
    )
}

export default Dashboard
