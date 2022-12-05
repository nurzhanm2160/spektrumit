import React from 'react';

import './index.css'
import {UserInfo} from "./pages/UserInfo";
import {Route, Routes} from "react-router-dom";
import {Registration} from "./pages/Registration";

function App() {

    return (
        <div className="wrapper">
            <Routes>
                <Route path='/' element={<UserInfo />} />
                <Route path='/form' element={<Registration />} />
            </Routes>
            {/*/!*<Registration />*!/*/}
            {/*<UserInfo />*/}
        </div>
    );
}

export default App;
