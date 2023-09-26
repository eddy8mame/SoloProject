import { useState, useEffect } from 'react'; 

function useScroll() {
  const [scrolling, setScrolling] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[]);

  return scrolling;
}
 
export default useScroll; 
