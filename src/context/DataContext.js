import React from "react";

const Context = React.createContext();

function DataContext({ children }) {
    return <Context.Provider value={true}>{children}</Context.Provider>;
}

export { DataContext, Context };
