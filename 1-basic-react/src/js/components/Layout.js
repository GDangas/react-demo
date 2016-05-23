import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      name:"David",
      message: "Welcome"};
  }
  changeMessage(message){
    /*Ordinay
    this.setState({message: message});*/
    //ES6
    this.setState({message});
  }
  getName() {
      return this.state.name +" Kangas";
    }
  render() {
   const title = "This is a demo!";
    setTimeout(() => {
      this.setState({name: "Silje"});
    }, 5000);
    return (
      <div>
        <Header changeMessage={this.changeMessage.bind(this)} message={this.state.message}
        title={title} name={this.state.name} />
        <h1>Gods name is {this.getName()}</h1>
        <Footer />
      </div>
    );
  }
}
