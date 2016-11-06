import React from 'react';
import { connect } from 'react-redux';

import { connectToChannel } from '../state/modules/cardList';

import CardList from './CardList';
import AddCardInput from './AddCardInput';


const mapStateToProps = (state) => ({
  socket: state.session.socket,
})

class BoardView extends React.Component {
  componentDidMount() {
    console.log("componentDidMount")
    this.props.dispatch(connectToChannel(this.props.socket));
  }

  render() {
    return(
      <div className='BoardView'>
        <CardList />
        <AddCardInput />
      </div>
    );
  }
}

export default connect(mapStateToProps)(BoardView);
