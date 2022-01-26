import { makeAutoObservable } from 'mobx';

interface ItemType {
  id: number;
  name: string;
  select: boolean;
}

class Todo {
  listItems: Array<any> = [];
  filterItem: string = 'Active';

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: object) {
    this.listItems = [...this.listItems, todo];
  }

  removeTodo(id: number) {
    this.listItems = [...this.listItems.filter((item: ItemType) => item.id !== id)];
  }

  CompletedTodo(id: number) {
    this.listItems.map((item: ItemType) => {
      if (item.id === id) {
        item.select = true;
      }
    });
  }
  filterTodo(value: string) {
    this.filterItem = value;
  }
  changeTodoValue(value: string, i: number) {
    this.listItems.map((item: ItemType): any => {
      if (item.id === i) {
        return (item.name = value);
      }
    });
  }
}

export default new Todo();
