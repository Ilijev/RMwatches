import Carousel from 'react-bootstrap/Carousel';
import styles from './landingBanner.module.css'
function LandingBanner() {
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item interval={1000}>
        <img
          className={`d-block w-100 ${styles.carouselImg} `} src={require("../../images/thumbnail1.jpg")}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className={`d-block w-100 ${styles.carouselImg} `} src={require("../../images/thumbnail2.jpg")}
          
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
         className={`d-block w-100 ${styles.carouselImg} `} src={require("../../images/thumbnail3.jpg")}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
         className={`d-block w-100 ${styles.carouselImg} `} src={require("../../images/thumbnail4.jpg")}
          alt="Third slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
         className={`d-block w-100 ${styles.carouselImg} `} src={require("../../images/thumbnail5.jpg")}
          alt="Third slide"
        />
      
      </Carousel.Item>
    </Carousel>
  );
}

export default LandingBanner;