import React from "react";
//import Header from "./cocktail/Header";
import "./App.css";
// import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'
// import SingleCocktailPage from './cocktail/pages/SingleCocktailPage'
// import Home from './cocktail/pages/Home'
// import About from './cocktail/pages/About'
import SnackbarAlert from "./snackbar/SnackbarAlert";
const App = () => {
  return (
    <div>
      <SnackbarAlert />
      {/* <Router>
      <Header />
      <Switch>
        <Route exact path='/home' element={<Home />}/>
        <Route exact path='/about' element={<About />}/>
        <Route exact path='/cocktail' element={<SingleCocktailPage />}/>
      </Switch>
      </Router> */}
    </div>
  );
};

export default App;
