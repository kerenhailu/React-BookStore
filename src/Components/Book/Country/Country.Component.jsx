import React from "react";

import { ContextToCreate } from "../../Context/MyContext";
class Country extends React.Component {
  render() {
    return (
      
        <div>
            <ContextToCreate.Consumer>
            {(value)=><h3>Country - {value}</h3>}
            </ContextToCreate.Consumer>
        </div>
      
    );
  }
}
export default Country;
