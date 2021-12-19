export const addItem = (item) => ({ type: 'ADD_ITEM', payload: item });
export const removeItem = (index) => ({ type: 'REMOVE_ITEM', payload: index });
export const selectItem = (id) => ({ type: 'SELECT_ITEM', payload: id });
export const filterItem = (value) => ({ type: 'FILTER_ITEM', payload: value });
export const changeValue = (value, index) => ({ type: 'CHANGE_VALUE', payload: index, value });
