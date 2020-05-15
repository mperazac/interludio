import React from 'react';
import PropTypes from 'prop-types';

import '../assets/sass/main.scss';

class Testimonial extends React.Component {
  static propTypes = {
    content: PropTypes.string,
    name: PropTypes.string,
  };
  render() {
    return (
      <div className="testimonial">
        <div className="content">{this.props.content}</div>
        <p className="name">{this.props.name}</p>
      </div>
    );
  }
}

export default Testimonial;
