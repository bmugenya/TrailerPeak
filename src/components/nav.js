import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/nav.css';
import Cookies from 'js-cookie';

const Nav = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
console.log(Cookies.get('token'))

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    try {
      await logout();
      navigate('/signin');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img
        className='nav_logo'
        src='https://res.cloudinary.com/doammcpie/image/upload/v1618310918/topia_ctxiz9.png'
        alt='netflix logo'
      />
    
       
          <img
            className='nav_avatar'
            src='https://res.cloudinary.com/doammcpie/image/upload/v1618310958/2_vohnwl.png'
            alt='naruto logo'
          />
          <div className='list'>
            <img className='list-img'   alt='naruto logo' />
            <p></p>
            <p className='link' onClick={handleSignOut}>
              Sign Out
            </p>
          </div>
       
    
    </div>
  );
};

export default Nav;
