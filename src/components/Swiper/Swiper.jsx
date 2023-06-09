import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./s.css";
Link;
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Swipe() {
  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="w-full">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={slidesPerView}
        navigation
        pagination
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="overflow-hidden w-[100%] h-[60vh] p-[25px] lg:p-[50px]"
      >
        <SwiperSlide className="slide flex flex-col justify-center items-center gap-3">
          <h1>Malik Monk</h1>
          <p>
            "I would highly recommend this program to any student seeking to
            gain practical skills and unlock their potential. It is an
            investment that will undoubtedly yield lifelong benefits. Thank you
            to the entire program team for their dedication and commitment to
            nurturing the next generation of skilled professionals."
          </p>
        </SwiperSlide>
        <SwiperSlide className="slide flex flex-col justify-center items-center gap-3">
          <h1>John Stamos</h1>
          <p>
            "Taking part in the skill acquisition program has been a
            transformative journey for me as a student. I cannot express enough
            how grateful I am for the opportunity to develop new skills and
            enhance my knowledge in a practical and hands-on way.
          </p>
        </SwiperSlide>
        <SwiperSlide className="slide flex flex-col justify-center items-center gap-3">
          <h1>Michael B. Jordan</h1>
          <p>
            "What impressed me the most was the program's emphasis on practical
            application. We had numerous opportunities to apply what we learned
            through projects, case studies, and interactive exercises. This
            practical approach significantly boosted my confidence and prepared
            me for the challenges I may encounter in the professional world."
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
