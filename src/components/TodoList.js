import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  render() {
    const { items, clearList, deleteItem, editItem } = this.props
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Todo List</h3>

        {/* using map method to loop through array*/}
        {items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              deleteItem={() => deleteItem(item.id)}
              editItem={() => editItem(item.id)}
            />
          )
        })}
        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
          onClick={clearList}
        >
          Clear List
        </button>
      </ul>
    )
  }
}
