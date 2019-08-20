import React from 'react';

const Welcome = (props) => {

    return (
        <div>
            <h1>Welcome {props.name}, you are currently {props.age}.</h1>
        </div>
    )// whatever is returned is displayed on the screen
}

export default Welcome;