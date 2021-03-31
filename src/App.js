import "./styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function App() {
  return (
    <Carousel autoPlay infiniteLoop>
      <div>
        <img
          src="https://images.unsplash.com/photo-1617102722177-d9e913bc2c07?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="c-img"
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1616627577385-5c0c4dab0257?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="c-img"
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1616852282416-9a41299a1828?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="c-img"
        />
      </div>
    </Carousel>
  );
}
