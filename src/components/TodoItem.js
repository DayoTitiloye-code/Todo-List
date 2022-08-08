import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class TodoItem extends Component {
  render() {
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>Item</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success">
            <FontAwesomeIcon icon="fa-solid fa-pen" />
          </span>
          <span className="mx-2 text-danger">
            <i class="fa-solid fa-trash"></i>
          </span>
        </div>
      </li>
    )
  }
}
