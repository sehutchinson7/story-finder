import React from "react";
import "./Search.css";

function SearchBox(props) {
  console.log(props);
  return (
    <div>
      <span class="icon-search">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path d="M28.996 28.29l-9.454-9.456.268-.268a9.5 9.5 0 1 0-1.244 1.244l.268-.268 9.455 9.454zM6.42 18.581a8.6 8.6 0 1 1 12.162 0 8.6 8.6 0 0 1-12.162 0z" />
        </svg>
        <input
          value={props.query}
          placeholder="Search stories"
          onChange={props.handleSearchChange}
          autoComplete="on"
        />
      </span>
    </div>
  );
}
// function SearchBox(props) {
//   console.log(props);
//   return (
//     <div className="wrapper">
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
//         <path d="M28.996 28.29l-9.454-9.456.268-.268a9.5 9.5 0 1 0-1.244 1.244l.268-.268 9.455 9.454zM6.42 18.581a8.6 8.6 0 1 1 12.162 0 8.6 8.6 0 0 1-12.162 0z" />
//       </svg>

//       <input
//         value={props.query}
//         placeholder="Search stories"
//         onChange={props.handleSearchChange}
//         autoComplete="on"
//       />
//     </div>
//   );
// }

export default SearchBox;
// let SearchBox = React.createClass({

//   doSearch:function() {
//   let query = this.refs.searchInput.value;
//     this.props.doSearch(query);
//   },

//     render: function() {

//       return (
//       <input type="text"

//         ref="searchInput"
//         placeholder="Search stories"
//         value={this.props.query}
//         onChange={this.doSearch}
//         autocomplete="on"
//       />
//       )}

// });

// class StorySearch extends React.Component {
//   render() {
//     return (
//       <input
//         id="story-search"
//         required
//         placeholder="Search my stories"
//         autocomplete="on"
//       />
//     );
//   }
// }

// export default StorySearch;
