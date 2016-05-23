import React from "react";


export default class Title extends React.Component {
  render() {
    return (
      <h1>{this.props.message} {this.props.name}</h1>
    );
  }
}
