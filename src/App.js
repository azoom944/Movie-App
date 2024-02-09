// App.js
import React from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home/Home';
// import PopularMovies from './Pages/PopularMovies';
import MovieDetailsPage from './Pages/MovieDetails/MovieDetailsPage';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Favorites from './Components/Favorite';
// import FavoritesPage from './Pages/FavoritesPage';
// import LoginPage from './Pages/LoginPage';
// import RegisterPage from './Pages/RegisterPage';
import { LanguageContext } from './Context/langContext';
import { useState } from 'react';

const App = () => {
  const [contextLang, setContextLang] = useState("ar")
    return (
    <LanguageContext.Provider value={{contextLang, setContextLang}}> 
     <BrowserRouter>
      <Navbar />
      <Switch>

        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/MovieDetailsPage/:movieId" component={MovieDetailsPage} />
        <Route path="/register" component={Register} />
        <Route path="/favorite" component={Favorites} />
        <Route path={"*"} exact component={NotFound} />
      </Switch>

     </BrowserRouter>
    </LanguageContext.Provider>
  );
};

export default App;
