const initialState = {
  gridData: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ROW':
      return {
        ...state,
        gridData: [...state.gridData, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
