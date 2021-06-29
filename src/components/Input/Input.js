import React, {useState} from 'react'

function Input({showDiv}) {
    
    const [value, setValue] = useState('')

    return (
        <div style={{margin: '50px'}}>
            <input 
                type="text" 
                data-testid='inputBar'
                placeholder='Type Something...'
                onChange={(e)=>{
                    setValue(e.target.value)
                }}
                />
            <p data-testid='displayValue'>{value}</p>

            {showDiv && (
                <div data-testid='divShow'>
                    HELLO HELLO TESTING!
                </div>
            )}
        </div>
    )
}

export default Input
