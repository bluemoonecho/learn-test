import React, {useState} from 'react'

function Button() {
    
    const [value, setValue] = useState('Press here')
    
    const dummyFunction = () => {
        setValue('You Clicked')
    }

    return (
        <div style={{ margin: '20px'}}>
            <button onClick={dummyFunction} title='dummyButton'>
                {value}
            </button>
        </div>
    )
}

export default Button;
