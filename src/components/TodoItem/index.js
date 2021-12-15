import React, { Component } from 'react';
import "./style.scss";

export default class index extends Component {
    render() {
        const { value, onClick, onRemove } = this.props;
        return (
            <li className="list-item">
                <span className="work-item" onClick={onClick}>{value.work}</span>
                <span className="delete-item" onClick={onRemove}>Delete</span>
            </li>
        )
    }
}
