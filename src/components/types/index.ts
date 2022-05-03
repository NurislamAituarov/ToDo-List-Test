export interface IItem {
  id: number;
  name: string;
  select: boolean;
}

export interface StateTypes {
  listItems: Array<IItem>;
  filterItem: string;
}

export interface ActionTypes {
  type: string;
  payload: IItem | string | number | Array<IItem>;
  value?: string;
}

export interface ItemTypes {
  id: number;
  name: string;
  select: boolean;
}
