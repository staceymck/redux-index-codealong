import { Component } from 'react'
import { connect } from 'react-redux'

class TodosContainer extends Component {
  renderTodos = () => {
    this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)
  }
  render() {
    return(
      <div>{this.renderTodos()}</div>
    )
  }
}

const mapPropsToState = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapPropsToState)(TodosContainer)