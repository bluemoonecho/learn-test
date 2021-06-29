import React from 'react'

const ButtonTwo = ({label}) => {
    return (
        <div style={{
            margin: '50px auto',
            border: '1px solid gray',
            padding: '10px',
            width: '150px'
        }}
        data-testid='button'>
            Hi {label}
        </div>
    )
}

export default ButtonTwo
