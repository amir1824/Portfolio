import {useEffect,useRef} from "react";
import lottie from "lottie-web";

const LottieAbout =()=>{

    const container = useRef(null)
 
 
    useEffect(()=>{
        const instance = lottie.loadAnimation({
            container:container.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData: require('./developer.json')
        });

        return() =>instance.destroy();
    },[]);
 
    return(   
        <div>
             <div id='container' ref={container}></div>
        </div> 
    );
};

export default LottieAbout;