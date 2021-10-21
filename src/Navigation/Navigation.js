import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { fallDown as Menu } from 'react-burger-menu'
import React from 'react'
import About from '../About/About';
import App from '../App';
import  ReactDOM from 'react-dom'
import png3 from '../3.png'

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
    componentDidUpdate(){
      window.scrollTo(0,0);
      let hash = this.props.location.hash.replace('#', '');
      if (hash) {
        let node = ReactDOM.findDOMNode(this.refs[hash]);
        if (node) {
          node.scrollIntoView();
        }
      }
    }
    render(){
    return (<a class="fix">
    <Menu burgerButtonClassName={ "menu" } menuClassName={ "bm-menu"} customBurgerIcon={<img src={png3}/>}>
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
        <Route path="/About" component={About}>
            {this.goAbout}
        </Route>
        <Route path="/" component={App}>
            {this.goHome}
        </Route>
      </Switch>
    </div>
  </Router></Menu></a>);
    }
}

export default Burger;