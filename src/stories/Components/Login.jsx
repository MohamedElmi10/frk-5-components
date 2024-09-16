import React from "react";
import User from "./User";
import Password from "./Password";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    return (
        <>
            <div>
                <User onUserChange={setUser} />
                <Password />

            </div>
        </>
    )

}
export default Login