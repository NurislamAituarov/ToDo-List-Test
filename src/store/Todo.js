import { makeAutoObservable } from 'mobx';

class Todo {
  listItems = [];
  filterItem = 'Active';

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo) {
    this.listItems = [...this.listItems, todo];
  }

  removeTodo(id) {
    this.listItems = [...this.listItems.filter((item) => item.id !== id)];
  }

  CompletedTodo(id) {
    this.listItems.map((item) => {
      if (item.id === id) {
        item.select = true;
      }
    });
  }
  filterTodo(value) {
    this.filterItem = value;
  }
  changeTodoValue(value, i) {
    this.listItems.map((item) => {
      if (item.id === i) {
        return (item.name = value);
      }
    });
  }
}

export default new Todo();
