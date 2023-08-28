import {addItem, updateItem, deleteItem} from './actions';

const initialState = {
  items: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'UPDATE_ITEM':
      // Implement update logic
      const updatedItems = state.items.map(item =>
        item.id === action.payload.id ? action.payload : item,
      );
      return {
        ...state,
        items: updatedItems,
      };
    case 'DELETE_ITEM':
      // Implement delete logic
      return state;
    default:
      return state;
  }
};

export default rootReducer;
