import React, {useState, useEffect} from 'react'
import { Search } from './Search';
import poplarlogo from '../poplar-logo.svg';
import { SearchResults } from './SearchResults';

export const Layout = () => {
    const [searchString, setSearchString] = useState("");

    const searchKey = searchStr => {
        setSearchString(searchStr)
    }

    
  return (
    <div className=''>
        <img className='logo' src={poplarlogo} alt='logo' />
        <div className='search-area'>
            <Search searchKey={searchKey} />
        </div>
        <div className='container'>
            {(searchString === "") ? <></> : (
                <div className='result-area'>
                    <h1>Results</h1>
                    <div className='scroll-area'>
                        <SearchResults searchKey={searchString}/>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}
