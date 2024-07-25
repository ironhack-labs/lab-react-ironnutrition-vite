import { Divider, Input } from 'antd';
import React, { useState } from 'react';


// Iteration 5
function Search(props) {

    const { filterFood } = props
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
        filterFood(e.target.value)
    }

    return (
        <div className='search'>
            <Divider>Search</Divider>
            <label>Search</label>
            <Input
                value={search}
                type="text"
                onChange={handleSearch} />
        </div>
    );
}

export default Search;