import { useState } from "react";
import { Input } from "antd";

function Search({ onSearch }) {

    const [ searchText, setSearchText ] = useState("");

    const handleSearchChange = (event) => {
        const { value } = event.currentTarget;
        setSearchText(value);
        onSearch(value);
    }

    return (
        <>
            <label>Search</label>
            <Input type="text" name="search" value={searchText} onChange={handleSearchChange} placeholder="Enter search query..."/>
        </>
    );
}

Search.defaultProps = {
    onSearch: () => {}
}

export default Search;