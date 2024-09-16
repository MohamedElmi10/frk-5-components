import React from "react";
const Password = () => {
    const onPasswordChange = (e) => {
        console.log(e.target.value)
    }
    return (
        <>
            <div>Password
                <input type="text" onChange={onPasswordChange} />
            </div>
        </>
    )
}
export default Password