import React from "react";
import { Route, Switch, Link } from 'react-router-dom';
import Home from "./components/Home";
import Form from "./components/Form";

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

const App = () => {
  return (
    <StyledApp>
      <div>
        <h1>Lambda Eats</h1>
        <Link to='/' className='homeLink'>Home</Link>
      </div>
      <Switch>
        <Route exact path='/pizza'>
          <Form />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>      
    </StyledApp>
  );
};
export default App;
