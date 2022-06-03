import {React, useEffect} from "react"
import lottie from "lottie-web"

const LottieAbout =()=>{
 
 
    useEffect(()=>{
        const instance = lottie.loadAnimation({
            container: document.getElementById('lottie'),
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData: require('./developer.json')
        })

        return() =>instance.destroy()
    },[])
 

    return(
        
        <div>
             <div id='lottie'></div>
        </div>
  
       
    )


}
export default LottieAbout