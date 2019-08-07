import React from "react";
import "./Switch.css";
//import PropTypes from "prop-types";

// PropTypes: {
//   isOn: boolean;
//   onToggle: (value: boolean) => void;
// }

class Switch extends React.Component {
  render() {
    const { isOn } = this.props;
    return (
      <label className="labeled-switch">
        Browse with QA
        <input
          className="switch-checkbox"
          type="checkbox"
          aria-checked={isOn}
          checked={isOn}
          onChange={this.props.onToggle}
        />
      </label>
    );
  }
  // private onToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   this.props.onToggle(event.target.checked);
  // };
}

export default Switch;
