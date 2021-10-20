import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { fallDown as Menu } from 'react-burger-menu'
import React from 'react'
import About from '../About/About';
import App from '../App';
import  ReactDOM from 'react-dom'

class Burger extends React.Component {
    constructor(props) {
        super(props);
        this.goAbout = this.goAbout.bind(this);
        this.goHome = this.goHome.bind(this);
      }

      goAbout(){
          ReactDOM.render(
        <About />,
      document.getElementById('root')
    );
      }

      
      goHome(){
        ReactDOM.render(
      <App />,
    document.getElementById('root')
  );
    }
    
    render(){
    return (<a class="fix">
    <Menu burgerButtonClassName={ "menu" } customBurgerIcon={<img src="3.png"/>}>
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/"><h1>Home</h1></Link>
          </li>
          <li>
            <Link to="/About"><h1>About</h1></Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/About">
            {this.goAbout}
        </Route>
        <Route path="/">
            {this.goHome}
        </Route>
      </Switch>
    </div>
  </Router></Menu></a>);
    }
}

export default Burger;