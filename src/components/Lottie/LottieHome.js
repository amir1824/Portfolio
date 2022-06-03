import {React, useEffect} from "react"
import lottie from "lottie-web"

const LottieName =()=>{
 
 
    useEffect(()=>{
        const instance = lottie.loadAnimation({
            container: document.getElementById('lottie'),
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData: require('./296-react-logo.json')
        })

        return() =>instance.destroy()
    },[])
 

    return(
        
        <div>
             <div id='lottie'></div>
        </div>
  
       
    )


}
export default LottieName