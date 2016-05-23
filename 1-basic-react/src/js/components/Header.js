import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
  handleChange(e){
    const message = e.target.value;
    console.log(message);
    this.props.changeMessage(message);
  }

  render() {
    return (
      <div>
        <Title message={this.props.message} name={this.props.name} />
        <input value={this.props.message} onChange={this.handleChange.bind(this)} />
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}
