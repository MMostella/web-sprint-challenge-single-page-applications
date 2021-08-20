import React from "react";
import { Route, Switch, Link } from 'react-router-dom';


const App = () => {
  return (
    <><div>
        <h1>Lambda Eats</h1>
        <Link to='/' className='homeLink'>Home</Link>
      </div>
      <Switch>
        <Route exact path='/pizza'>
          {/* <Form /> */}
        </Route>
        <Route exact path='/'>
          {/* <Home /> */}
        </Route>
      </Switch>      
    </>
  );
};
export default App;
