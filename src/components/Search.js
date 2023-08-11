import React, {useState} from 'react'

export const Search = ({addTodo, isUser}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);
        setValue("");
    }
  return (
    <form className='search-form' onSubmit={handleSubmit}>
        <input 
            type='text'className='search-input' value={value}
            placeholder={ isUser ? 'Search user...' : 'Search property...' }
            onChange={(e) => setValue(e.target.value)} 
        />

        <button type='submit' className='search-btn'>Search</button>
    </form>
  )
}
