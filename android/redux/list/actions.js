// ACTION CREATOR

export const addItem = item => ({
  type: 'ADD_ITEM',
  payload: item,
});

export const updateItem = item => ({
  type: 'UPDATE_ITEM',
  payload: item,
});

export const deleteItem = itemId => ({
  type: 'DELETE_ITEM',
  payload: itemId,
});
