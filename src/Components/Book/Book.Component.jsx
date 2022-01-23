import React from "react";
import Song from "../Song/Song.Component";
import Country from "./Country/Country.Component";
import Genre from "./Genre/Genre.Component";
class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        Author:""
    };
    this.InputAuthorName = this.InputAuthorName.bind(this);
    this.ShowAuthorName = this.ShowAuthorName.bind(this);
  }
  componentWillUnmount(){
      alert("Welcome to the site");
  }
  componentDidMount(){
alert("The site has been successfully uploaded");
  }
  InputAuthorName(event) {
    this.setState({ Author: event.target.value });
  }
  ShowAuthorName() {
    alert(this.state.Author);
    console.log(this.state.Author);
  }
  
  render() {
    return <div>
        {/* {this.Welcome()} */}
       <h3>{this.props.nameBook}</h3> 
       <h3>name of the Author :</h3>
      <h4>the Author : {this.state.Author}</h4> 
       <input onChange={this.InputAuthorName} type="text" />
       <button onClick={this.ShowAuthorName}>Click</button><br></br>
       <Genre/>
       <Country/>
       <Song/>
        </div>;
  }
}
export default Book;
