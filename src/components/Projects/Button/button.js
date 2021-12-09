import React from 'react';

import classes from './Button.module.css';

const Button = props => {
    return (
        <button 
            className={[classes.Button, props.classes, props.selected ? classes.ButtonSelected : null].join(" ")}
            {...props}
        >
            {props.children}
        </button>
    );
}


export default Button;