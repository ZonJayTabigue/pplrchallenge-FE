import React, {useState, useEffect} from 'react'
import { Search } from './Search'
import { Users } from './Users';
import { getTodosApi, addTodoApi } from '../utils/Handler';
import { Property } from './Property';
import poplarlogo from '../poplar-logo.svg';
import { SearchResults } from './SearchResults';

export const Layout = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodosApi(setTodos)
    }, [])

    const addTodo = todo => {
        addTodoApi(todo, setTodos)
    }

    
  return (
    <div className=''>
        <img className='logo' src={poplarlogo} alt='logo' />
        <div className='search-area'>
            <Search addTodo={addTodo} isUser={true} />
        </div>
        {/* <SearchResults/> */}
        {/* <div className='container'>
            <div className='flex-child user-area'>
                <h1>USERS</h1>

                <div className='search-area'>
                    <Search addTodo={addTodo} isUser={true} />
                </div>

                <div className='scroll-area'>
                    <Users />
                </div>
            </div>
            <div className='flex-child property-area'>
                <h1>PROPERTIES</h1>

                <div className='search-area'>
                    <Search addTodo={addTodo} isUser={false} />
                </div>

                <div className='scroll-area'>
                    <Property />
                </div>
            </div>
            
        </div> */}
    </div>
  )
}
