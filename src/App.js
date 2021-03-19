import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./views/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodosList from "./views/Todos/TodosList";
import TodoAdd from "./views/Todos/TodoAdd";
import TodoDetails from "./views/Todos/TodoDetails";
import TodoUpdate from "./views/Todos/TodoUpdate";
import UserList from "./views/Users/UserList";
import UserDetails from "./views/Users/UserDetails";
import UserAdd from "./views/Users/UserAdd";

export default class App extends Component{

    render() {
        return <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/articles" component={TodosList} />
                <Route exact path="/articles/ajouter" component={TodoAdd} />
                <Route exact path="/articles/:id" component={TodoDetails} />
                <Route exact path="/articles/:id/modifier" component={TodoUpdate} />

                <Route exact path="/utilisateurs" component={UserList}/>
                <Route exact path="/utilisateurs/ajouter" component={UserAdd}/>
                <Route exact path="/utilisateurs/:id" component={UserDetails}/>
            </Switch>
            <Footer/>
            </BrowserRouter>
            
    }
}
