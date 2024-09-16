import React from "react";
const User = ({ onUserChange }) => {
    const onUserComplete = (e) => {
        console.log(e.target.value)
        onUserChange(e.target.value)
    }
    return (
        <>
            <div>User
                <input type="text"
                    onBlur={onUserComplete} />
            </div>
        </>
    )
}
export default User