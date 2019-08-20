import React from 'react'

function InputField(props) {
    return (
        <div>
            <input onChange={props.handleName}/>
        </div>
    )
}

export default InputField;