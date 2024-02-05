import React from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => {
  return {
    gridData: state.gridData,
  };
};

export default connect(mapStateToProps)(Grid);
