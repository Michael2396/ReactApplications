import React, {useContext} from 'react'
import {DataAccount} from "../App";
import signOut from "../logic/signOut";

const Sidebar = () => {
    const stateContext = useContext(DataAccount);
    const {state, setLoggedIn} = stateContext;
    return (
        <div className={'sidebar'}>
            <div className="avatar">
                <img src={`${state.profile_icon}`} alt=""/>
            </div>
            <div className="name">
                {state.login}
            </div>
            <div className={'company role'}>
                {state.job}
            </div>
            <div className="role">
                {state.role}
            </div>
            <div className="control">
                <div className="control-avatar">
                    Change Avatar
                </div>
                <div className="control-password">
                    Change Password
                </div>
                <div className="control-password" onClick={() => signOut(setLoggedIn)}>
                    Sign Out
                </div>
            </div>
        </div>
    );
}
export default Sidebar;