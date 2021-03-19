import React, {Component} from 'react';
import Todo from "../components/Todo";
import TodoService from "../services/todo.service";

export default class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    async componentDidMount() {
        let todos = await TodoService.list(3);
        this.setState({todos: todos});
    }

    render() {
        let {todos} = this.state;
        return <div className="container">
            <h1>Accueil</h1>
            <p>Message d'accueil</p>

            <h2>Les derniers todos</h2>
            <div className="row">

                {todos.length === 0 && <p>Aucun todos pour le moment...</p>}

                {todos.length > 0 && todos.map(todo => {
                    return <div className="col-md-4">
                        <Todo todo={todo} cla={"home"}/>
                    </div>
                })}

            </div>

        </div>
    }
}
