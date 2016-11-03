import React from 'react';
import { connect } from 'react-redux';


const CardList = ({cards}) => (
  <div className="CardList">
    {cards.map((card, index) => (
      <div className="Card">{card.title}</div>
    ))}
  </div>
);

export default connect()(CardList);
