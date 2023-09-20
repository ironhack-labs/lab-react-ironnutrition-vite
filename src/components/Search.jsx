// import { useState } from "react";

// function Search({ foods }) {
//   const [searchInput, setSearchInput] = useState("");

//   const handleInput = (e) => {
//     e.preventDefault();
//     setSearchInput(e.target.value.toLowerCase());
//   };

//   if (searchInput.length > 0) {
//     foods.filter((food) => {
//       return food.name.match(searchInput);
//     });
//   }

//   return (
//     <div className="input-box">
//       <h4>Search food</h4>
//       <input
//         type="text"
//         onChange={handleInput}
//         value={searchInput}
//       />
//     </div>
//   );
// }

// export default Search;
