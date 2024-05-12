import React from "react";

import "./TopOfNewsPage.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper.min.css";
import "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

function TopOfNewsPage(props) {
  const header = props.valid;
  return (
    <div className="swiper-card">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <div className="images">
            <img src={props.img} alt="dfsadfsaf" />
            <div
              className="news-top-text"
              style={{ display: header ? "block" : "none" }}
            >
              <p className="news-top-header">{props.title}</p>
              <p className="news-top-text-inner"> {props.content}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TopOfNewsPage;
