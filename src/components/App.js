import React from 'react';
import thunk from "redux-thunk";
import Header from "./Header";


const App = ({children}) => {
    return (
        <div>

            <Header/>
            Hi, this is App
            {children}
        </div>
    );
};

export default App;