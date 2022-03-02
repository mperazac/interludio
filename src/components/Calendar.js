import React, {Component} from "react";
import Slider from "react-slick";
import febrero from '../images/calendario/2-febrero.jpeg';
import marzo from '../images/calendario/3-marzo.jpeg';
import abril from '../images/calendario/4-abril.jpeg';
import mayo from '../images/calendario/5-mayo.jpeg';
import junio from '../images/calendario/6-junio.jpeg';
import julio from '../images/calendario/7-julio.jpeg';
import agosto from '../images/calendario/8-agosto.jpeg';
import septiembre from '../images/calendario/9-septiembre.jpeg';
import octubre from '../images/calendario/10-octubre.jpeg';
import noviembre from '../images/calendario/11-noviembre.jpeg';
import diciembre from '../images/calendario/12-diciembre.jpeg';

export default class Calendar extends Component {
  render() {
    const settings = {
      dots: true
    };
    return (
      <div class="calendar">
        <Slider {...settings}>
          <div>
            <img src={febrero} alt="Febrero" />
          </div>
          <div>
            <img src={marzo} alt="Marzo" />
          </div>
          <div>
            <img src={abril} alt="Abril" />
          </div>
          <div>
            <img src={mayo} alt="Mayo" />
          </div>
          <div>
            <img src={junio} alt="Junio" />
          </div>
          <div>
            <img src={julio} alt="Julio" />
          </div>
          <div>
            <img src={agosto} alt="Agosto" />
          </div>
          <div>
            <img src={septiembre} alt="Septiembre" />
          </div>
          <div>
            <img src={octubre} alt="Octubre" />
          </div>
          <div>
            <img src={noviembre} alt="Noviembre" />
          </div>
          <div>
            <img src={diciembre} alt="Diciembre" />
          </div>
        </Slider>
      </div>
    );
  }
}