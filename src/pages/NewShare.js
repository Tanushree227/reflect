import React from "react";
import NewShareForm from "../components/share/NewShareForm";
import { useNavigate } from "react-router-dom";

function NewShare()
{
    const navigate = useNavigate();

    function addShareHandler(shareData)
    {
        fetch('https://reflect-f0a06-default-rtdb.firebaseio.com/shares.json',
        {
            method: 'POST',
            body: JSON.stringify(shareData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(() => {
            navigate('/');
        });
    }

    return(
        <section>
            <h1>Share your new Experience</h1>
            <NewShareForm onAddShare={addShareHandler} />
        </section>
    );
}

export default NewShare;