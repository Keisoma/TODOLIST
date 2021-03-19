import React, {Component} from 'react';
import TodoService from "../../services/todo.service";

export default class TodoDetails extends Component{

    constructor(props) {
        super(props);
        this.state = {
            todo: {}
        }
    }

    async componentDidMount() {
        let {id} = this.props.match.params;
        let response = await TodoService.details(id);
        this.setState({todo: response.data});
    }

    async handleDelete(){
        let {todo} = this.state;
        await TodoService.delete(todo.id);
        this.props.history.push('/articles');
    }

    render() {
        let {todo} = this.state;
        return <div className="container">
            <h1>Todo - {todo.title}</h1>
            <h2>Utilisateur</h2>
            
            <h2>Statut</h2>
            <p>{todo.completed?"complété":"Non complété"}</p>
            
            <button  className="btn btn-warning"  onclick="window.location.href = '/articles/${todo.id}/modifier';">Modifier</button>

            <button className="btn btn-danger" onClick={() => this.handleDelete()}>Supprimer</button>

</div>

    }
}
