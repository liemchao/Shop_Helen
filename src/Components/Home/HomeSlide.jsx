import "./HomeSlide.css";

import img1 from "./Home_images/slideImg/slide1.webp";
import img2 from "./Home_images/slideImg/slide2.jpg";
import img3 from "./Home_images/slideImg/slide3.webp";
import img4 from "./Home_images/slideImg/slide4.webp";
import img5 from "./Home_images/slideImg/slide5.webp";
import { Carousel } from "react-bootstrap";

export const Carousel1 = () => {
  return (
    <div className="sliderimgdiv">
      <Carousel>
        <Carousel.Item className="item">
          <img
            className="d-block"
            src={
              "https://firebasestorage.googleapis.com/v0/b/realesate-41da3.appspot.com/o/f1f874aeb55d12034b4c.jpg?alt=media&token=0724340d-120a-4e23-adb5-4c16faf25697"
            }
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item className="item">
          <img
            className="d-block"
            src={
              "https://firebasestorage.googleapis.com/v0/b/realesate-41da3.appspot.com/o/e1442fdeee2d4973103c.jpg?alt=media&token=8ba5289b-fc2e-49be-9733-f1b6f04a7e5e"
            }
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item className="item">
          <img
            className="d-block"
            src={
              "https://firebasestorage.googleapis.com/v0/b/realesate-41da3.appspot.com/o/7e3c895548a6eff8b6b7.jpg?alt=media&token=a52b2d0e-fd60-4b31-964e-91e795b1bab0"
            }
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item className="item">
          <img
            className="d-block"
            src={
              "https://firebasestorage.googleapis.com/v0/b/realesate-41da3.appspot.com/o/0ba380f54106e658bf17.jpg?alt=media&token=47645a3c-d57b-4a88-b459-c426fa86074d"
            }
            alt="forth slide"
          />
        </Carousel.Item>

        <Carousel.Item className="item">
          <img
            className="d-block "
            src={
              "https://firebasestorage.googleapis.com/v0/b/realesate-41da3.appspot.com/o/2456b70076f3d1ad88e2.jpg?alt=media&token=08555fd8-00ae-4420-a00f-b535c627ef3d"
            }
            alt="fifth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
