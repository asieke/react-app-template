import React from 'react';
import { connect } from 'react-redux';
import { expandInstructions, collapseInstructions } from '../actions/settings';

const Instructions = props => {
  const { instructionsExpanded, expandInstructions, collapseInstructions } = props;

  if(instructionsExpanded){
    return(
      <div>
        <button onClick={collapseInstructions}>Collapse Instructions</button>
          <p>Click on a card</p>
          <p>Try to guess!</p>
      </div>      
    )
  }

  return (
    <div>
      <button onClick={expandInstructions}>Show Instructions</button>
    </div> 
  )
}

export default connect(
  state => ({ instructionsExpanded: state.settings.instructionsExpanded }),
  { expandInstructions, collapseInstructions }
)(Instructions);
