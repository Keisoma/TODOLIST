import React, {Component} from 'react';
import TodoService from "../../services/todo.service";

export default class TodoAdd extends Component{

    constructor(props) {
        super(props);
        this.state = {
            title: null,
            completed: null,
            userId: 1
        }
    }

    handleChange(e){
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    async handleSubmit(e){
        e.preventDefault();
        let {title, completed} = this.state;

    

        let data = {
            title: title,
            completed: completed,
            userId: 1
        }

        await TodoService.create(data);
        this.props.history.push('/articles');
    }

    render() {
        return <div className="container">
            <h1>Ajouter votre article</h1>

            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <label>Titre</label>
                    <input type="text" id="title" className="form-control" required
                        onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                    <label>Contenu</label>
                    <p></p>
                    <select name="status" id="completed" className="form-control" required
                        onChange={(event) => this.handleChange(event)}>
                        <option value=""></option>

                        <option value="true">true</option>
                        <option value="false">false</option>
    
</select>
                </div>
                <p></p>
                <button type="submit" className="btn btn-primary">Ajouter</button>
            </form>
        </div>
    }

}
