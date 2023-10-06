import { useEffect, useState } from "react";

const useMouseOver = (targetRef) => {

  const [isMouseOver, setIsMouseOver] = useState(false); 

  useEffect(() => {
    const handleMouseOver = () => {
      setIsMouseOver(true);
    };

    const handleMouseOut = () => {
      setIsMouseOver(false);
    }

    const targetElement = targetRef.current; 

    if (targetElement) {
      targetElement.addEventListener('mouseover', handleMouseOver);
      targetElement.addEventListener('mouseout', handleMouseOut);
    }

    return () => {
      if (targetElement) {
        targetElement.removeEventListener('mouseover', handleMouseOver);
        targetElement.removeEventListener('mouseout', handleMouseOut);
      }
    }
  }, [targetRef])

  return isMouseOver; 
}

export default useMouseOver; 