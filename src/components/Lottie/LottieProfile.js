import { useEffect,useRef } from "react";
import lottie from "lottie-web";

const LottieProfile = () => {

 const container = useRef(null);

    useEffect(() => {
        const instance = lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./rofile-card.json')
        });
        return () => instance.destroy();
    }, []);


    return (
        <div>
            <div id='container' ref={container}></div>
        </div>
    );
};
export default LottieProfile;