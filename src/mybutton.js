import React from 'react';

export const MyButton = (props) => {
    const label = props.label;

    return (<button onClick={props.onClick}>{label}</button>);

};
