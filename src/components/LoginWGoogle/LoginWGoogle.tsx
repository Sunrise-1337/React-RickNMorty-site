import { useState } from "react";

import "./loginWGoogleStyle.scss"

import { GoogleLogin } from "@react-oauth/google";
import { googleLogout } from '@react-oauth/google';

import jwt_decode from "jwt-decode"

import { UserDataInterface } from "../../interfaces/userData-interface"

function LoginWGoogle() {
    const [loggedIn, setLoggedIn] = useState<boolean>(true),
        [userData, setUserData] = useState<UserDataInterface | null>(null),

    toLogIn = (token: string): void => {
        setLoggedIn(prev => !prev);
        setUserData(jwt_decode(token));
    },

    toLogOut = (): void => {
        setLoggedIn(prev => !prev);
        setUserData(null);
        googleLogout()
    }

    return (
        loggedIn
            ?
                <GoogleLogin
                onSuccess={credentialResponse => {
                    toLogIn(credentialResponse.credential as string)
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
                useOneTap
                />
            : (userData &&
                <div onClick={() => toLogOut()} className="account">
                    <img className="account__picture" src={userData.picture} alt={userData.name} />
                    <div className="account__text">
                        <h2 className="account__text-name">{userData.name}</h2>
                        <p className="account__text-email">{userData.email}</p>
                    </div>
                </div>
            )
    )
}

export default LoginWGoogle