import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addRow } from '../../redux/action';
import '../AddRow/AddRow.css';
const AddRow = ({ addRow }) => {
  const [rowData, setRowData] = useState('');

  const handleAddRow = () => {
    if (rowData.trim() !== '') {
      addRow(rowData);
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
