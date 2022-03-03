import React from "react";
import Carousel from 'react-bootstrap/Carousel';
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

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.getIndex()
    };
  }

  //El getMonth nos va a dar el mes -1 (Enero = 0), debido a que no tenemos imagen para Enero, tenemos que hacer - 1 (Febrero = 0)
  getIndex() {
    let date = new Date();
    return date.getMonth() - 1;
  }

  handleSelect = (selectedIndex, e) => {
    this.setState({ index: selectedIndex });
  }
  render() {
    return (
      <div className="calendar">
        <Carousel activeIndex={this.state.index} onSelect={this.handleSelect} interval={null}>
          <Carousel.Item>
            <img src={febrero} alt="Febrero" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={marzo} alt="Marzo" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={abril} alt="Abril" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={mayo} alt="Mayo" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={junio} alt="Junio" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={julio} alt="Julio" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={agosto} alt="Agosto" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={septiembre} alt="Septiembre" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={octubre} alt="Octubre" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={noviembre} alt="Noviembre" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={diciembre} alt="Diciembre" />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}