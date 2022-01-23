import React from "react";
import { ContextToCreate } from "../../Context/MyContext";
class Genre extends React.Component {
  render() {
    return <div>
       
        <h3>{ContextToCreate._currentValue}</h3>
        </div>;
  }
}
export default Genre;
