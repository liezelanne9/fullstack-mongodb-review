import React, {Component} from 'react';
import axios from 'axios';
import ListEntry from './ListEntry.jsx'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            priority: 1,
            todos: []
        }
        this.fetchTodos = this.fetchTodos.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    componentDidMount() {
        this.fetchTodos();
    }

    fetchTodos() {
        axios
        .get('/api/todos')
        .then(results => this.setState({
            todos: results.data
        }))
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        }, () => console.log(this.state.priority, this.state.name))
    }

    onSubmit(e) {
        e.preventDefault();
        if (!this.state.name.length) {
            alert('Please add a todo');
            return;
        }
        this.addTodo();
    }
    
    addTodo() {
        axios
        .post('/api/todos', this.state)
        .then(() => this.setState({ name: '', priority: 1 }))
        .then(this.fetchTodos)
        .catch(err => console.error(err))
    }



    render() {
        return (
            <div>
                <h3>Todo List</h3>

                <div>
                    <h4>Add a todo:</h4>
                    <form>
                        <fieldset>
                            Todo:
                            <input name="name" onChange={this.onChange} value={this.state.name}></input>
                            <br /><br />
                            Priority:
                            <select name="priority" defaultValue={`${this.setState.priority}`} onChange={this.onChange} >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <br /><br />
                            <button onClick={this.onSubmit}>Submit</button>
                        </fieldset>
                    </form>

                </div>

                <div>
                    <ul>
                        {this.state.todos.map((todo, i) => <ListEntry key={i} todo={todo} fetchTodos={this.fetchTodos}/> )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default App;