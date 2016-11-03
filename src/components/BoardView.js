import React from 'react';
import { connect } from 'react-redux';

import CardList from './CardList';
import AddCardInput from './AddCardInput';


const BoardView = () => (
  <div className='BoardView'>
    <CardList />
    <AddCardInput />
  </div>
);

export default connect()(BoardView);
