import React, { useContext } from "react";
import { ContextToCreate } from "../Context/MyContext";

function Song() {
  const UserContext = useContext(ContextToCreate);
  return <div>
     <h3>song - {UserContext}</h3> 
  </div>;
}
export default Song;
