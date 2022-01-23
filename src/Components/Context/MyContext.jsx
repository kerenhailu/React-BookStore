import React from "react";
export const ContextToCreate=React.createContext();
export const MyProvider=(props)=>{
    return(<ContextToCreate.Provider value="keren">
            {props.ChildComponent}
    </ContextToCreate.Provider>);

};