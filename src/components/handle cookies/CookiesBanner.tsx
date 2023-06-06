import React, { useEffect } from 'react';
import styles from './cookieBanner.module.css'
interface Props{
    handleCookies:(cookieState:boolean)=>void
    showBanner:boolean
}
const CookiesBanner = ({handleCookies,showBanner}:Props) => {
//   const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookie_consent');
    if (hasConsent !== 'true') {
      handleCookies(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    handleCookies(false);
  };

  const handleReject = () => {
    
    handleCookies(false);
  };

  return (
    <div className={`${styles.cookiesBanner} bg-dark-custom text-center text-white w-100  p-3 ${showBanner ? '' : 'd-none'} `}>
      <p className='px-5'>Our website uses cookies to enhance your browsing experience and provide certain essential functionalities. Cookies are small text files that are placed on your device when you visit a website. They allow us to remember your preferences, analyze website traffic, and improve our services. However, we do not use cookies for any purpose other than those necessary for the functioning of our website</p>
      <div className="">
        <button className='btn bg-dark-custom rounded-0 border text-white mx-2 ' onClick={handleAccept}>Accept</button>
        {/* <button className='btn btn-light  rounded-0 mx-2' onClick={handleReject}>Reject</button> */}
      </div>
    </div>
  );
};

export default CookiesBanner;