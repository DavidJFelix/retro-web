import React from 'react';
import { connect } from 'react-redux';

import { addCard } from '../state/modules/cardList';


const mapStateToProps = (state) => ({
  channel: state.session.channel,
});


const AddCardInput = ({dispatch, channel}) => {
  let input;

  return(
    <div>
      <form onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addCard(input.value, channel));
          input.value = '';
        }}>
        <input ref={node => { input = node; }}/>
        <button type="submit">Add Card</button>
      </form>
    </div>
  )
};

export default connect(mapStateToProps)(AddCardInput);
