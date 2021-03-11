import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    let inputElement = null;
    let inputClasses = [classes.InputElement];
    if (props.invalid && props.touched) {
        inputClasses.push(classes.Invalid);
    }
    switch (props.elementType) {
        case 'input':
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                onChange={props.changed}
            value={props.value} />;
            break;
        case 'textarea':
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                onChange={props.changed}
                value={props.value} />;
            break;
        case 'select':
            inputElement = (
                <select
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}
                    >{option.displayValue}</option>
                ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                onChange={props.changed}
                value={props.value}/>;
            break;
    }
    return (
        <div className={classes.Input}>
            <label
                className={classes.Label}
                htmlFor="">{props.label}</label>
            {inputElement}
        </div>
    );
};

export default Input;