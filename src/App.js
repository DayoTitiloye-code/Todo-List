import React, { Component } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {/*div 10 columns wide, places div in centre, medium screen = 8 columns wide + padding*/}
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </div>
    )
  }
}
