import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';


import '../css/CardList.css';


const mapStateToProps = (state) => {
  return {
    cards: state.cardList,
  };
};

const CardList = ({cards}) => (
  <div className="CardList">
    {cards.map((card, index) => (
      <Card key={index} {...card} />
    ))}
  </div>
);

export default connect(mapStateToProps)(CardList);
