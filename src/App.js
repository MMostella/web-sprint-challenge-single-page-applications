import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from 'react-router-dom';
import Home from "./components/Home";
import Form from "./components/Form";
import axios from "./axios";
import * as yup from 'yup';
import schema from './validation/formSchema';

import styled from 'styled-components';

const StyledApp = styled.div `
  .headerMain {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .headerMain h1 {
    color: red;
    margin-left: 5%;
    font-size: 2.5em;
  }

  .homeLink {
    margin-right: 5%;
    text-decoration: none;
    font-size: 1.8em;
  }
`

const initialOrderValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  canadianBacon: false,
  spicyItalianSausage: false,
  grilledChicken: false,
  onions: false,
  greenPepper: false,
  dicedTom: false,
  blackOlives: false,
  roastedGarlic: false,
  artHearts: false,
  threeCheese: false,
  pineapple: false,
  xtraCheese: false,
  special: '',
}

const initialDisabled = true

const App = () => {
  const [newOrder, setNewOrder] = useState([])
  const [formValues, setFormValues] = useState(initialOrderValues)
  const [formErrors, setFormErrors] = useState(initialOrderValues)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getOrder = () => {
    axios.get('fakeapie.com')
      .then(res => {
        console.log(res.data);
        setNewOrder(res.data)
      })
      .catch(err => console.error(err))
  }

  const postNewOrder = pizzaOrder => {
    axios.post('fakeapi.com', pizzaOrder)
      .then(res => {
        setNewOrder([res.data, ...newOrder])
      })
      .catch(err => console.error(err))

      setFormValues(initialOrderValues);
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({...formValues, [name]: value})
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name,
      email: formValues.email.trim(),
      phone: formValues.phone,
      size: formValues.size,
      sauce: formValues.sauce,
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      canadianBacon: formValues.canadianBacon,
      spicyItalianSausage: formValues.spicyItalianSausage,
      grilledChicken: formValues.grilledChicken,
      onions: formValues.onions,
      greenPepper: formValues.greenPepper,
      dicedTom: formValues.dicedTom,
      blackOlives: formValues.blackOlives,
      roastedGarlic: formValues.roastedGarlic,
      artHearts: formValues.artHearts,
      threeCheese: formValues.threeCheese,
      pineapple: formValues.pineapple,
      xtraCheese: formValues.xtraCheese,
      gluten: formValues.gluten,
      special: formValues.special,
      quantity: formValues.quantity,
    }
    postNewOrder(newOrder);
    console.log(newOrder);
  }

  useEffect(() => {
    getOrder()
  }, [])

  useEffect(() => {
      schema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])

  return (
    <StyledApp>
      <div>
        <h1>Lambda Eats</h1>
        <Link to='/' className='homeLink'>Home</Link>
      </div>
      <Switch>
        <Route exact path='/pizza'>
          <Form 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            errors={formErrors}
            disabled={disabled}
          />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>      
    </StyledApp>
  );
};
export default App;
