import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addRow } from '../../redux/action';
import '../AddRow/AddRow.css';
const AddRow = ({ addRow }) => {
  const [rowData, setRowData] = useState('');
// Task 1 is done here where our AddRow component dispacth an action
// to update redux store state...
// Task 2 is done here where we need to add new rows to the grid without making a server call or API refresh
  const handleAddRow = () => {
    if (rowData.trim() !== '') {
// here it dispatches the addRow action with new data
      addRow(rowData);
  // here it clears the input field after adding one 
      setRowData('');
    }
  };

  return (
    <div className='addrow'>

      <input
        type="text"
        value={rowData}
        placeholder='Enter the row name'
        onChange={(e) => setRowData(e.target.value)}
      />
      <button onClick={handleAddRow}>Add Row</button>
    </div>
  );
};

export default connect(null, { addRow })(AddRow);
