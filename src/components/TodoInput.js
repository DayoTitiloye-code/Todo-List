import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
export default class TodoInput extends Component {
  render() {
    return (
      <div className="card card-body my-3">
        <form>
          <div className="input-group">
            <div className="input-group-prepend"></div>
            <input
              type="text"
              className="form-control"
              placeholder="Add a Todo Item!"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block  mt-3">
            Add Item
          </button>
        </form>
      </div>
    )
  }
}
