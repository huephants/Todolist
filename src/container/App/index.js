
import React, { Component } from 'react'
import Input from "../../components/Input";
import TodoItem from "../../components/TodoItem";
import TodoList from "../../components/TodoList";
import "./style.scss";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            work: '',
            listTodo: [
                {
                    id: '1',
                    work: 'Task 1'
                },
                {
                    id: '2',
                    work: 'Task 2'
                }
            ],
            listComplete: [],
        };
    }

    onCompleteWork = (id) => {
        const { listTodo, listComplete } = this.state;
        const findTodo = listTodo.find((it) => it.id === id);
        listComplete.push(findTodo);
        const newListTodo = listTodo.filter((it) => it.id !== id)
        this.setState({ listComplete: [...listComplete], listTodo: newListTodo });
    };

    onNotDone = (id) => {
        const { listTodo, listComplete } = this.state;
        const findComplete = listComplete.find(it => it.id === id)
        listTodo.push(findComplete)
        const newListComplete = listComplete.slice().filter(it => it.id !== id)
        this.setState({ listTodo: [...listTodo], listComplete: newListComplete })
    };

    onRemoveItem = id => {
        const { listTodo, listComplete } = this.state;
        const newListTodo = listTodo.slice().filter(it => it.id !== id)
        const newListComplete = listComplete.slice().filter(it => it.id !== id)
        this.setState({ listTodo: newListTodo, listComplete: newListComplete })
    }

    onChangeWork = event => {
        const { value } = event.target;
        this.setState({ work: value })
    }

    onCleanAll = () => {
        this.setState({ listComplete: [] })
    }

    onSubmitNewTodo = (event) => {
        event.preventDefault();
        const { work, listTodo } = this.state;
        const newID = Math.random();
        const newTodoWork = {
            id: newID,
            work: work,
        };
        listTodo.push(newTodoWork)
        this.setState({ listTodo: [...listTodo], work: '' })

    }

    cleanInput = () => {
        this.setState({ work: '' })
    }

    render() {
        const { work } = this.state;
        return (
            <div className="container">
                <h1>TO DO APP</h1>
                <form onSubmit={this.onSubmitNewTodo}>
                    <Input value={work} onChange={this.onChangeWork} placeholder="Add a new task..." />
                    {work.length > 0 ? (
                        <button type='button' onClick={this.cleanInput}>X</button>
                    ) : null}
                </form>
                <div className="lists-wrapper">
                    <TodoList
                        onClickItem={this.onCompleteWork}
                        onRemoveItem={this.onRemoveItem}
                        title="Task to do"
                        list={this.state.listTodo}
                    />

                    <TodoList
                        onClickItem={this.onNotDone}
                        onRemoveItem={this.onRemoveItem}
                        title="Task complete"
                        list={this.state.listComplete}
                    />
                </div>

                <button className="clean-button" onClick={this.onCleanAll}>Clean All</button>
            </div>
        );
    }
}
