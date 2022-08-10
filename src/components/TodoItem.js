import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
export default class TodoItem extends Component {
  render() {
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>Item</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success">
            <FontAwesomeIcon icon={faPen} />
          </span>
          <span className="mx-2 text-danger">
            <FontAwesomeIcon icon={faTrash} />
          </span>
        </div>
      </li>
    )
  }
}
