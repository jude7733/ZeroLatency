import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import katvr from "../assets/KATVR.jpeg";
import pcgaming from "../assets/PCgaming.jpeg";
import psgaming from "../assets/PSgaming.jpeg";
import vrgaming from "../assets/VRgaming.jpeg";
import vrcricket from "../assets/VRCricket.jpeg";
import vrexp from "../assets/VRExp.jpeg";
import "./carousel.css";

const CarouselComponent = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      <div className="cimage">
        <img src={katvr} />
      </div>
      <div className="cimage">
        <img src={pcgaming} />
      </div>
      <div className="cimage">
        <img src={psgaming} />
      </div>
      <div className="cimage">
        <img src={vrgaming} />
      </div>
      <div className="cimage">
        <img src={vrcricket} />
      </div>
      <div className="cimage">
        <img src={vrexp} />
      </div>
    </Carousel>
  );
};
export default CarouselComponent;
