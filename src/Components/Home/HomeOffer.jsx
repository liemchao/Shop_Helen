import img1 from "./Home_images/offerImages/o1.webp";
import img2 from "./Home_images/offerImages/o2.webp";
import img3 from "./Home_images/offerImages/o3.webp";
import img4 from "./Home_images/offerImages/o4.webp";

import offerimg from "./Home_images/top1.jpeg";
import dealimg from "./Home_images/top2.jpeg";
import "./HomeOffer.css";
import { Carousel1 } from "./HomeSlide";

export const HomeOffer = () => {
  return (
    <div>
      <Carousel1></Carousel1>

      <div className="offerdiv">
        <img
          src={"https://lamia.com.vn/storage/banner-sale/1770x720-1-1.jpg"}
          alt=""
          className="offerimg"
        ></img>
      </div>
      <div className="offerdiv">
        <img
          src={
            "https://firebasestorage.googleapis.com/v0/b/realesate-41da3.appspot.com/o/6ed0afc16932ce6c9723.jpg?alt=media&token=0975c576-b38c-458a-b8c2-7cb76b4f2cb0"
          }
          alt=""
          className="dealimg"
        ></img>
      </div>

      <div className="offer1">
        <img
          src={
            "https://cand.com.vn/Files/Image/hoaithu/2019/12/06/thumb_660_31ed0552-e553-45b9-952f-58df56ecebfa.jpg"
          }
        ></img>
        <img
          src={
            "https://cand.com.vn/Files/Image/hoaithu/2019/12/06/thumb_660_5e9616f1-60f0-4fa6-b335-c6730a6077cb.jpg"
          }
        ></img>
      </div>

      <div className="offer1">
        <img
          src={
            "https://cand.com.vn/Files/Image/hoaithu/2019/12/06/thumb_660_cfc3c74b-cca6-4ce4-a884-262f28505063.jpg"
          }
        ></img>
        <img
          src={
            "https://cand.com.vn/Files/Image/hoaithu/2019/12/06/thumb_660_358d7e9a-c96e-4cff-b08b-fe6c834ef442.jpg"
          }
        ></img>
      </div>
    </div>
  );
};
