
const Search = ({ searchFoods }) => {
  const handleInputs = event => {
    const { value } = event.target
    searchFoods(value)
  }
  return (
    <div className="Search">
      <input type="text" onKeyUp={handleInputs} placeholder="Type here to search..." />
    </div>
  )
}

export default Search