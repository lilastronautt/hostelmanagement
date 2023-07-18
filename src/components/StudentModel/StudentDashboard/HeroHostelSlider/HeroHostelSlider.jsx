import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import "./HeroHostelSlider.css";
import Manet from "../../../../assets/hostel images/manet_soe.png";
import BoatClub from "../../../../assets/hostel images/boat_club.png";
import IodBoys from "../../../../assets/hostel images/iod_boys.png";
import Nsq1 from "../../../../assets/hostel images/nsq1.png";
import Nsq2 from "../../../../assets/hostel images/nsq2.png";
import Sangeet from "../../../../assets/hostel images/sangeet.png";

const HostelImages = [
  {
    id: 0,
    Image: Manet,
  },
  {
    id: 1,
    Image: BoatClub,
  },
  {
    id: 2,
    Image: IodBoys,
  },
  {
    id: 3,
    Image: Nsq1,
  },
  {
    id: 4,
    Image: Nsq2,
  },
  {
    id: 5,
    Image: Sangeet,
  },
];

const HeroHostelSlider = () => {
  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <div className="overflow-slider">
          {HostelImages.map((item) => (
            <>
              <SwiperSlide>
                <img key={item.id} src={item.Image} className="Image-border" />
              </SwiperSlide>
            </>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default HeroHostelSlider;
