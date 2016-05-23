import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  navigate(){
    this.props.history.pushState(null, "/");
  }
  render() {
    /*const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout");*/
    return (
      <div>
        {/*<Nav location={location} />
        <div class="container" style={containerStyle}>*/}
          <div class="row">
            <div class="col-lg-12">
              <h1>KillerNews.net</h1>
                {this.props.children}
              <Link to ="archives" activeClassName="test"><button class="btn btn-success">Archives</button></Link>
              <Link to ="settings" class="btn btn-danger">Settings</Link>
              <button onClick={this.navigate.bind(this)}>Featured</button>
            </div>
          </div>
          <Footer/>
        </div>
    );
  }
}
