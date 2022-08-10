import React, { Component } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'
import { v4 as uuidv4 } from 'uuid'

export default class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    itemName: '',
    editItem: false,
  }

  inputChanges = (e) => {
    this.setState({
      itemName: e.target.value,
    })
  }

  handleSubmit = (e) => {
    //prevents page refresh
    e.preventDefault()

    const newItem = {
      id: this.state.id,
      itemName: this.state.itemName,
    }

    console.log(newItem)
    //copy array into new array using spread operator
    const updatedItems = [...this.state.items, newItem]

    this.setState({
      items: updatedItems,
      itemName: '',
      id: uuidv4(),
      editItem: false,
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {/*div 10 columns wide, places div in centre, medium screen = 8 columns wide + padding*/}
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.itemName}
              inputChanges={this.inputChanges}
              handleSubmit={this.handleSubmit}
            />
            <TodoList />
          </div>
        </div>
      </div>
    )
  }
}
