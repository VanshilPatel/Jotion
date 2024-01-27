import { useState, useEffect } from "react";

const useScrollTop = (thershold = 10) => {
    const [scrolled, setScrolled] = useState(false);
   
    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > thershold){
                setScrolled(true)
            }
            else{
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () =>  window.removeEventListener("scroll", handleScroll)
    }, [thershold])

    return scrolled
}
 
export default useScrollTop;