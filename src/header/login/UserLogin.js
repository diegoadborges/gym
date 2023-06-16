import { useState } from 'react';
import { userContext } from '../../context/UserContext';
import Login from './Login';
import "./userLogin.css"

function UserLogin() {
    const [user, setUser] = useState({});

    const verifyUser = () => {
        if (user.username == undefined) {
            console.log("undefined")
            return <Login/>
        } 

        return <div className="welcome">Bem-vindo, <span className="username">{user.username}</span></div>
    }

    return (
        <>
            <userContext.Consumer>
                {(value) => {
                    setUser(value)
                }}
            </userContext.Consumer>
                <div>{verifyUser()}</div>
        </>
    )
}


export default UserLogin