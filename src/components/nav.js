import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/nav.css';
import useAuthListener from '../hooks/use-auth-listener'
import { Feature, OptForm } from '../components'
const Nav = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
const { user } = useAuthListener();

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
    
    <a href="/" className={'link'}>
   PornTub
 </a>


 <OptForm  className='nav_find'>
   
          <OptForm.Input placeholder='Search' />
          <OptForm.Button></OptForm.Button>
        
          
        </OptForm>



      
      <img
        className='nav_avatar'
        src='https://res.cloudinary.com/doammcpie/image/upload/v1618310958/2_vohnwl.png'
        alt='naruto logo'
      />
 

  
    </div>
  )
}

export default Nav
