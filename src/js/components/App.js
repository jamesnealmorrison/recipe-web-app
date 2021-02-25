import React from 'react';
import List from './List';
import Form from './Form';
import IngredientSelect from '../shared/containers/IngredientSelect';

const App = () => (
  <>
    <div>
      <h2>Ingredients</h2>
      <List />
    </div>
    <div>
      <h2>Add a new ingredient</h2>
      <Form />
    </div>
    <IngredientSelect />
  </>
);


export default App;