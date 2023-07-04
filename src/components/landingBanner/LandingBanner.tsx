import Carousel from "react-bootstrap/Carousel";
import styles from "./landingBanner.module.css";
import { useEffect } from "react";
function LandingBanner() {
  let width = window.innerWidth;
  let img1 = "../../images/landing1.JPG";
  useEffect(() => {}, []);

  // console.log(img1);
  return (
    <Carousel controls={false} indicators={true}>
      <Carousel.Item>
      <picture>
          <source srcSet={require("../../images/landing4.JPG")} media="(max-width: 767px)" />
          <source srcSet={require("../../images/landing4.JPG")} media="(min-width: 768px) and (max-width: 1023px)" />
          <source srcSet={require("../../images/landing4.JPG")} media="(min-width: 1024px)" />
          <img className={`d-block w-100 ${styles.carouselImg}`} src={require("../../images/landing4.JPG")} alt="Banner" />
        </picture>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      
       <picture>
          <source srcSet={require("../../images/landing1.JPG")} media="(max-width: 767px)" />
          <source srcSet={require("../../images/landing1.JPG")} media="(min-width: 768px) and (max-width: 1023px)" />
          <source srcSet={require("../../images/landing1.JPG")} media="(min-width: 1024px)" />
          <img className={`d-block w-100 ${styles.carouselImg}`} src={require("../../images/landing1.JPG")} alt="Banner" />
        </picture>
      </Carousel.Item>
      {/* <Carousel.Item interval={2500}>
        <img
          className={`d-block w-100 ${styles.carouselImg} `} src={require("../../images/thumbnail2.jpg")}
          
          alt="Second slide"
        />
       
      </Carousel.Item> */}
      <Carousel.Item>
      <picture>
          <source srcSet={require("../../images/landing2.JPG")} media="(max-width: 767px)" />
          <source srcSet={require("../../images/landing2.JPG")} media="(min-width: 768px) and (max-width: 1023px)" />
          <source srcSet={require("../../images/landing2.JPG")} media="(min-width: 1024px)" />
          <img className={`d-block w-100 ${styles.carouselImg}`} src={require("../../images/landing2.JPG")} alt="Banner" />
        </picture>
        
      </Carousel.Item>
      {/* <Carousel.Item>
      <picture>
          <source srcSet={require("../../images/landing3.JPG")} media="(max-width: 767px)" />
          <source srcSet={require("../../images/landing3.JPG")} media="(min-width: 768px) and (max-width: 1023px)" />
          <source srcSet={require("../../images/landing3.JPG")} media="(min-width: 1024px)" />
          <img className={`d-block w-100 ${styles.carouselImg}`} src={require("../../images/landing3.JPG")} alt="Banner" />
        </picture>
       
      </Carousel.Item> */}
      
    </Carousel>
  );
}

export default LandingBanner;
