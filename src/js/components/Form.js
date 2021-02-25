import React, { Component } from "react";
import { connect } from "react-redux";
import { addIngredient } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addIngredient: ingredient => dispatch(addIngredient(ingredient))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name } = this.state;
    this.props.addIngredient({ name });
    this.setState({ name: "" });
  }
  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;