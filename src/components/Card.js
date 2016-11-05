import React, { PropTypes } from 'react';


import '../css/Card.css'


const Card = ({title}) => (
  <div className="Card">
    <div className="Card__title">{title}</div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Card;
