import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.props.todos.completed}
          onChange={() => this.props.handleChange(this.props.todos.id)}
        />
        <p
          style={{
            textDecoration: this.props.todos.completed && "line-through",
            color: this.props.todos.completed && "#777777",
            fontStyle: this.props.todos.completed && "italic"
          }}
        >
          {" "}
          {this.props.todos.text}
        </p>
      </div>
    );
  }
}

export default TodoItem;
