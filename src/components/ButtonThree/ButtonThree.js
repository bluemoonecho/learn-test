import React, {useState} from 'react'

function ButtonThree() {
    const [showAnotherButton, setAnotherButton] = useState(false)
    
    return (
        <div>
            <button
            data-testid='button'
            onClick={()=>{
                setAnotherButton(true)
            }}
            >
                CLICK HERE
            </button>
            {showAnotherButton &&(
                <button data-testid='button'>
                    NOW CLICK HERE
                </button>
            )}
        </div>
    )
}

export default ButtonThree
