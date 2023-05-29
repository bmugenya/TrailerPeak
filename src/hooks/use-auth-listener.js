import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export default function useAuthListener() {
  const [user, setUser] = useState(null);

  useEffect(() => {
   
    const checkAuthStatus = () => {
      try {
        const token = Cookies.get('token');
        if (token) {
          setUser({ isAuthenticated: true });
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Error checking authentication status:', error);
      }
    };

    checkAuthStatus();
   
    return () => {
     
    };
  }, []);

  return { user };
}