import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
export default class TodoInput extends Component {
  render() {
    //destructuring - used to select only part of the object
    const { itemName, inputChanges, handleSubmit, editItem } = this.props
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend"></div>
            <input
              type="text"
              className="form-control"
              placeholder="Add a Todo Item!"
              value={itemName}
              onChange={inputChanges}
            />
          </div>
          <button
            type="submit"
            className={
              editItem
                ? 'btn btn-success btn-block  mt-3'
                : 'btn btn-primary btn-block  mt-3'
            }
          >
            {/* using ternary operator to change button text based on true or false*/}
            {editItem ? 'Edit item' : 'Add item'}
          </button>
        </form>
      </div>
    )
  }
}
