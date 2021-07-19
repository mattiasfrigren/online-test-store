import React from 'react';
import Navbar from '../components/Navbar/NavBar_index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/index';
import About from '../pages/about';
import Store from '../pages/store';
import AnnualReport from '../pages/annual';
import Teams from '../pages/team';
import Blogs from '../pages/blogs';
import SignUp from '../pages/signup';
import SignIn from '../pages/signin';

const RoutePages = () =>{

    return(
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/store" component={Store}/>
                <Route path="/annual" component={AnnualReport}/>
                <Route path="/team" component={Teams}/>
                <Route path="/blogs" component={Blogs}/>
                <Route path="/sign-up" component={SignUp}/>
                <Route path="/sign-In" component={SignIn}/>
            </Switch>
        </Router>

    );
}
export default RoutePages;
