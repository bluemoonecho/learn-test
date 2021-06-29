import React, {useState} from 'react'

function Search() {

    const [inputValue, setInputValue] = useState('')
    
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <div>
            <input type="text" onChange={handleChange} title='dummySearch'/>
            {inputValue}
        </div>
    )
}

export default Search
