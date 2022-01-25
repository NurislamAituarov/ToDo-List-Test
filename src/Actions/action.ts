export const addItem = (item: object) => ({ type: 'ADD_ITEM', payload: item });
export const removeItem = (index: number) => ({ type: 'REMOVE_ITEM', payload: index });
export const selectItem = (id: number) => ({ type: 'SELECT_ITEM', payload: id });
export const filterItem = (value: string) => ({ type: 'FILTER_ITEM', payload: value });
export const changeValue = (value: string, index: number) => ({
  type: 'CHANGE_VALUE',
  payload: index,
  value,
});
