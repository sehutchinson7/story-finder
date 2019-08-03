import React from "react";

function SearchBox(props) {
  console.log(props);
  return (
    <input
      value={props.query}
      placeholder="Search stories"
      onChange={props.handleSearchChange}
      autoComplete="on"
    />
  );
}

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
