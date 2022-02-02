interface StateTypes {
  listItems: Array<object>;
  filterItem: string;
}

interface ActionTypes {
  type: string;
  payload: object | string | number;
  value?: string;
}

interface ItemTypes {
  id: number;
  name: string;
  select: boolean;
}

const initialState: StateTypes = {
  listItems: [],
  filterItem: 'Active',
};

const reducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case 'ADD_ITEM':
      console.log(action.payload);
      return {
        ...state,
        listItems: [...state.listItems, action.payload],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        listItems: state.listItems.filter((item: ItemTypes) => item.id !== action.payload),
      };
    case 'SELECT_ITEM':
      return {
        ...state,
        listItems: state.listItems.map((item: ItemTypes) => {
          if (item.id === action.payload) {
            item.select = true;
          }
          return item;
        }),
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
