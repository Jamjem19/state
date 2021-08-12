import React, { Component } from "react";
import Jamjem from "./Jamjem.jpg";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Classcomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Zouabi Houssem",
      Bio: "in mathematics",
      Language: "engish and french",
      Hobby: "football",
      Profession: "Math Professor",
      show: false,
      count:0,
    };
    const interval = setInterval(() => {
        this.setState({count: this.state.count+1})
      }, 1000);
  }
  render() {
    const ShowFun = () => {
      this.setState({ show: !this.state.show });
      };
      const add = () => {
        this.setState({ input: this.state.input+1 });
      
      };
    
    return (
      <div>
        {this.state.show && (
          <div>
            <p style={{ fontfamily:"cursive"}}>
              My names is {this.state.fullName}
              <br /> i have certificate {this.state.Bio}
              <br />i speak {this.state.Language} language <br /> the better
              hobby for me is {this.state.Hobby}
              <br /> and i work as {this.state.Profession}
              {this.state.count}
            </p>
            <img className="pic" height="300" src={Jamjem} alt="pic"></img>
          </div>
        )}
        <Button onClick={ShowFun}>click here</Button>
      </div>
    );
  }
}
