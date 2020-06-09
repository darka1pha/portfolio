import React from 'react';
import {Route , Switch , BrowserRouter} from 'react-router-dom'
import Home from './pages/home/home.component'
import Navbar from './components/navbar/navbar.component'
import Footer from './components/footer/footer.component'
import './App.scss'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
