import React, {useState, useEffect} from 'react'
import { ScrollToTop } from "./goTopElement.jsx";
import { animateScroll as scroll } from "react-scroll";


const GoTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      if(window.scrollY > 20) {
          setIsVisible(true);
      } else {
          setIsVisible(false);
      }
      };
    const ScrollTop = () => {
      scroll.scrollToTop();
    };
  
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
  
    //   return () => {
    //       window.removeEventListener('scroll', toggleVisibility)
    //   }
    }, [])
  
    return (
      <>
         {isVisible && (<ScrollToTop onClick={ScrollTop} ></ScrollToTop> )}  
      </>
    );
}

export default GoTop


