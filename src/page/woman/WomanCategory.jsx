import React from "react";
import image1 from "../../assets/image 64.png";
import image2 from "../../assets/Frame 133.png";
import image3 from "../../assets/image 76.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Helmet } from "react-helmet";

const WomanCategory = () => {
  return (
    <div className="container mx-auto">
         <Helmet><title>Mostofa</title></Helmet>
      <h2 className="flex justify-center items-center text-black font-semibold text-2xl mt-14">
        Top Categories
      </h2>
      <div>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card w-full  card-side bg-base-100 shadow-xl">
              <figure className="w-[400px]">
                <img src={image1} alt="Movie" />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-full   card-side bg-base-100 shadow-xl">
              <figure className="w-[400px]">
                <img src={image2} alt="Movie" />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-full   card-side bg-base-100 shadow-xl">
              <figure className="w-[400px]">
                <img src={image3} alt="Movie" />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-full  card-side bg-base-100 shadow-xl">
              <figure className="w-[400px]">
                <img src={image1} alt="Movie" />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-full card-side bg-base-100 shadow-xl">
              <figure className="w-[400px]">
                <img src={image1} alt="Movie" />
              </figure>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default WomanCategory;
