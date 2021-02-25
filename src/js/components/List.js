import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { ingredients: state.ingredients };
};

const ConnectedList = ({ ingredients }) => (
  <ul>
    {ingredients.map(el => (
      <li key={el.id}>{el.name}</li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;