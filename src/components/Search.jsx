import { Divider, Input } from "antd";
const Search = props => {

    const handleSearch = event => {
        props.searchedFoods(event.target.value)
    }
        return (
            <form>
                <Divider>Search</Divider>
                <label>Search</label>
                <Input className="search-input" type="text" placeholder="Enter search item" value={props.searchValue} onChange={handleSearch} />
            </form>
        )
}

export default Search;