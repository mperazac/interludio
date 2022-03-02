import React, {Component} from "react";
import Slider from "react-slick";

export default class Calendar extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src="images/calendario/2 - febrero.jpeg" alt="Febrero" />
          </div>
          <div>
            <img src="images/calendario/3 - marzo.jpeg" alt="Marzo" />
          </div>
          <div>
            <img src="images/calendario/4 - abril.jpeg" alt="Abril" />
          </div>
          <div>
            <img src="images/calendario/5 - mayo.jpeg" alt="Mayo" />
          </div>
          <div>
            <img src="images/calendario/6 - junio.jpeg" alt="Junio" />
          </div>
          <div>
            <img src="images/calendario/7 - julio.jpeg" alt="Julio" />
          </div>
          <div>
            <img src="images/calendario/8 - agosto.jpeg" alt="Agosto" />
          </div>
          <div>
            <img src="images/calendario/9 - septiembre.jpeg" alt="Septiembre" />
          </div>
          <div>
            <img src="images/calendario/10 - octubre.jpeg" alt="Octubre" />
          </div>
          <div>
            <img src="images/calendario/11 - noviembre.jpeg" alt="Noviembre" />
          </div>
          <div>
            <img src="images/calendario/12 - diciembre.jpeg" alt="Diciembre" />
          </div>
        </Slider>
      </div>
    );
  }
}