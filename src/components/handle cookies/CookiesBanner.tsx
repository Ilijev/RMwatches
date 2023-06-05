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
      <p>We use cookies to improve your experience on our website.</p>
      <div className="">
        <button className='btn btn-success mx-2 ' onClick={handleAccept}>Accept</button>
        <button className='btn btn-danger mx-2' onClick={handleReject}>Reject</button>
      </div>
    </div>
  );
};

export default CookiesBanner;