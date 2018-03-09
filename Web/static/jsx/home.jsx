import React from 'react';
import ReactDOM from 'react-dom';

const Welcome = (props) => {
    return (
        <h1>Hello {props.name}</h1>
    );
}

ReactDOM.render(
    <Welcome name="big world" />,
    document.getElementById('react')
);