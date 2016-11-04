import React from 'react';
import { connect } from 'react-redux';


const AddCardInput = () => (
  <div><form><input type="text"/></form></div>
);

export default connect()(AddCardInput);
