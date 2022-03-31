export interface IItem {
  id: number;
  name: string;
  select: boolean;
}

export interface StateTypes {
  listItems: Array<object>;
  filterItem: string;
}

export interface ActionTypes {
  type: string;
  payload: object | string | number;
  value?: string;
}

export interface ItemTypes {
  id: number;
  name: string;
  select: boolean;
}
