import React, {useState, createContext} from 'react';
import Authorization from "./component/authorization";
import Registration from "./component/registration";
import Account from "./component/account";
import {BrowserRouter as Router, Route, Navigate, Routes} from 'react-router-dom';
import getAuthentication from "./logic/fireBaseData/getAuthentification";
import getData from "./logic/fireBaseData/getData";

export const DataAccount = React.createContext({});

function App() {
    const cart = {
        name: '',
        age: '',
        job: '',
        authorization: false
    }
    const [state, setState] = useState(cart);
    const [loggedIn, setLoggedIn] = useState(false);
    return (<div className="App">
        <Router>
            <DataAccount.Provider value={{state, loggedIn, setState, setLoggedIn}}>
                <Routes>
                    <Route path="/authorization" element={<Authorization/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/" element={loggedIn ? <Account/> : <Navigate to="/authorization"/>}/>
                </Routes>
            </DataAccount.Provider>
        </Router>
    </div>);
}

export default App;
