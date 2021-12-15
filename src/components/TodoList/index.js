import React, { Component } from 'react';
import TodoItem from "../TodoItem";
import "./style.scss";

export default class Todolist extends Component {
    renderWork() {
        const { list, onClickItem, onRemoveItem } = this.props;
        return list.map((item) => (
            <TodoItem
                onClick={() => onClickItem(item.id)}
                onRemove={() => onRemoveItem(item.id)}
                value={item}
                key={item.id}
            />
        )
        )
    }

    render() {
        const { title } = this.props;
        return (
            <div className="todo-list-wrapper">
                <h2>{title}</h2>
                <ul>{this.renderWork()}</ul>
            </div>
        )
    }
}
