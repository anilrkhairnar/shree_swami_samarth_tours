import Lottie from "lottie-react";
import carAnimation from "../assets/car_animation.json";
const Preloader = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center">
      <Lottie animationData={carAnimation} loop={true} autoplay={true} />
    </div>
  );
};

export default Preloader;
