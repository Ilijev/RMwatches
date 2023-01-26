import Carousel from 'react-bootstrap/Carousel';
import styles from './landingBanner.module.css'
function LandingBanner() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className={`d-block w-100 ${styles.carouselImg} `} src={require("../../images/thumbnail1.jpg")}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className={`d-block w-100 ${styles.carouselImg} `} src={require("../../images/thumbnail2.jpg")}
          
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         className={`d-block w-100 ${styles.carouselImg} `} src={require("../../images/thumbnail3.jpg")}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         className={`d-block w-100 ${styles.carouselImg} `} src={require("../../images/thumbnail4.jpg")}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         className={`d-block w-100 ${styles.carouselImg} `} src={require("../../images/thumbnail5.jpg")}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default LandingBanner;