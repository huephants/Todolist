import React, { Component } from 'react';
import "./style.scss";

export default class Input extends Component {
    render() {
        const { className, onChange, value, placeholder } = this.props;
        const finalClassName = `input-custom ${className}`;
        return (
            <input className={finalClassName} onChange={onChange} value={value} placeholder={placeholder} />

        )
    }
}
