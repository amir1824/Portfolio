import { useEffect,useRef } from "react";
import lottie from "lottie-web";

const LottieName = () => {

 const container = useRef(null);

    useEffect(() => {
        const instance = lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./296-react-logo.json')
        });
        return () => instance.destroy();
    }, []);


    return (
        <div>
            <div id='container' ref={container}></div>
        </div>
    );
};
export default LottieName;