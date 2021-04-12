import React from "react";

import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    // this binds handleChange() needed because of setState()
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(id) {
    this.setState((prevState) => {
      // using map because it will provide us with a new array
      const updatedTodo = prevState.todos.map((todo) => {
        if (todo.id === id) {   // looks at the item with the same id that the handleChange() received from the onChange handler
          return {
            ...todo,
            completed: !todo.completed
          }
          // returns a brand new object that will replace that todo in the array
          // ... says give me all of the properties from this todo but override the completed property

        }
        return todo
      })
      // here the new array replaces the old array and that is what is rendered
      return {
        todos: updatedTodo
      }
    })
  }


  render() {
    //  information from the item object is passed down to TodoItem. item prop is passed with a value of the item object
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
    // handleChange() is being passed down to every single toDo item that we create in our map here
    return (
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }
}



export default App;
