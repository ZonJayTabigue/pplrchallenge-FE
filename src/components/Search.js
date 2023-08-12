import React, {useState} from 'react'

export const Search = ({searchKey}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        searchKey(value);
        // setValue("");
    }
  return (
    <form className='search-form' onSubmit={handleSubmit}>
        <input 
            type='text'className='search-input' value={value}
            placeholder='Search...'
            onChange={(e) => setValue(e.target.value)} 
        />

        <button type='submit' className='search-btn'>Search</button>
    </form>
  )
}
