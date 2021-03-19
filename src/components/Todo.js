import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Todo extends Component{

    render() {
        let {todo} = this.props;
        return <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{todo.title}</h5>
                    <p className="card-text">{todo.user.name}</p>
                    <p className="card-text">{todo.completed?"complété":"Non complété"}</p>
                    <Link to={`/articles/${todo.id}/modifier`} className="btn btn-warning">Modifier</Link> <Link to={`/articles/${todo.id}`} className="btn btn-warning">Détails</Link>

                </div>
        </div>
    }
}
