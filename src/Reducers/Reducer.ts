import { ActionTypes, ItemTypes, StateTypes } from '../components/types';

const initialState: StateTypes = {
  listItems: [],
  filterItem: 'Active',
};

const reducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case 'ADD_ITEM_ARR':
      return {
        ...state,
        listItems: Array.isArray(action.payload) && [...action.payload],
      };
    case 'ADD_ITEM':
      localStorage.setItem('listItems', JSON.stringify([...state.listItems, action.payload]));
      return {
        ...state,
        listItems: [...state.listItems, action.payload],
      };
    case 'REMOVE_ITEM':
      const removeItem = state.listItems.filter((item: ItemTypes) => item.id !== action.payload);
      localStorage.setItem('listItems', JSON.stringify([...removeItem]));
      return {
        ...state,
        listItems: removeItem,
      };
    case 'SELECT_ITEM':
      const selectItem = state.listItems.map((item: ItemTypes) => {
        if (item.id === action.payload) {
          item.select = true;
        }
        return item;
      });
      localStorage.setItem('listItems', JSON.stringify([...selectItem]));
      return {
        ...state,
        listItems: selectItem,
      };
    case 'FILTER_ITEM':
      return {
        ...state,
        filterItem: action.payload,
      };
    case 'CHANGE_VALUE':
      let index = state.listItems.findIndex((item: ItemTypes) => item.id === action.payload);
      const newItem = {
        ...state.listItems.filter((item: ItemTypes) => item.id === action.payload)[0],
        name: action.value,
      };
      return {
        ...state,
        listItems: [
          ...state.listItems.slice(0, index),
          newItem,
          ...state.listItems.slice(index + 1),
        ],
      };
    default:
      return state;
  }
};
export { reducer };
