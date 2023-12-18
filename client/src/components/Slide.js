import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function Slide() {
  return (
    <Carousel className="custom-slide">
      <Carousel.Item className="custom-slide">
        <Image src="/images/s1.jpg" fluid className="custom-image" />
        <Carousel.Caption className="carousel-caption">
          <h3>Irresistibly Delicious</h3>
          <p>
            Relish the unforgettable flavors of our culinary creations, expertly
            crafted to ignite your taste buds with pure delight.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="custom-slide">
        <Image src="/images/s2.jpg" fluid />

        <Carousel.Caption className="carousel-caption">
          <h3>Fast Delivery</h3>
          <p>
            Experience the speed of sound with our quick delivery service,
            bringing your favorite dishes to your door in record time.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="custom-slide">
        <Image src="/images/s4.jpg" fluid />

        <Carousel.Caption className="carousel-caption">
          <h3>Farm-Fresh</h3>
          <p>
            Savor the exceptional quality of ingredients, straight from the farm
            to your plate, ensuring every bite is a fresh delight.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;
