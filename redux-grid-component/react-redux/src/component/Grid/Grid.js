import React from 'react';
import { connect } from 'react-redux';
//Task 2 is done here where we need to Use redux store and pass to child components
const Grid = ({ gridData }) => {
  return (
    <div>
      <h2>GRID</h2>
      <ul>
        {gridData.map((row, index) => (
          <li key={index}>{row}</li>
        ))}
      </ul>
    </div>
  );
};
// hre mapStateToProps connects the Grid component to the Redux store
// and maps the gridData from the store to the gridData prop.
const mapStateToProps = (state) => {
  return {
    gridData: state.gridData,
  };
};

export default connect(mapStateToProps)(Grid);
