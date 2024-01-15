import React from "react";
import SignupForm from "../components/share/SignupForm";
import { useNavigate } from "react-router-dom";

function Signup()
{
    const navigate = useNavigate();

    function addUserHandler(userData)
    {
        fetch('https://reflect-f0a06-default-rtdb.firebaseio.com/user.json',
        {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(() => {
            navigate('/');
        });
    }
    return(
            <SignupForm onSignup={addUserHandler} />
    );
}

export default Signup;