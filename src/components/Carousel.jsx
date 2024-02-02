import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import katvr from "../assets/KATVR.jpeg";
import pcgaming from "../assets/PCgaming.jpeg";
import psgaming from "../assets/PSgaming.jpeg";
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
    </Carousel>
  );
};
export default CarouselComponent;
