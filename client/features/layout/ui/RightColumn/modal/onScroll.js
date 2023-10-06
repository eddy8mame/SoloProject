import { useState, useEffect } from "react";

const onScroll = () => {

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleModalScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }

    window.addEventListener('scroll', handleModalScroll);

    return () => {
      window.removeEventListener('scroll', handleModalScroll);
    }
  },[]);

  return scrolling;
};

export default onScroll; 