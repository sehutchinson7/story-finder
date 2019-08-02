import React from "react";

const StorySearch = props => {
  return (
    <form>
      <input type="text" name="id" placeholder="Search stories" />
      <button>Go</button>
    </form>
  );
};

export default StorySearch;

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
