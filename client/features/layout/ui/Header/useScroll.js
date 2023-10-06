import { useState, useEffect } from 'react'; 

const useScroll = () => {
  const [scrolling, setScrolling] = useState(false); 

  useEffect(() => {
    const handleHeaderScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }

    window.addEventListener('scroll', handleHeaderScroll);

    return () => {
      window.removeEventListener('scroll', handleHeaderScroll);
    }
  },[]);

  return scrolling;
}
 
export default useScroll; 
