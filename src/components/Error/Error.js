import React from 'react';

const Error = (props) => {
    if (props.type === 'theme') {
        return (
            <p className='aboutText' style={{ textAlign: 'center', color: 'orangered', fontSize: '1em', }}>{props.children}</p>
        )
    }
    else {
        return (
            <p className='aboutText' style={{ marginLeft: '10px', color: 'orangered', fontSize: '0.8em', }}>{props.children}</p>
        )
    }
}

export default Error;