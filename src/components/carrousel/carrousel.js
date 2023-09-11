import React from "react";
import Slider from "react-slick";
import carrousel from "../../imgs/sign/carrousel.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carrousel.css"

const Carrousel = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
      
      };

  return (
    <div className="carrousel">
    <Slider {...settings}>
      <div>
        <img className="carouselImg" src={carrousel} alt="carrousel" />
      </div>
      <div>
        <img className="carouselImg" src={carrousel} alt="carrousel" />
      </div>
      <div>
        <img className="carouselImg" src={carrousel} alt="carrousel" />
      </div>
     
    </Slider>
  </div>
  )
}

export default Carrousel

