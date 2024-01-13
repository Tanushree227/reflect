import React from "react";
import NewShareForm from "../components/share/NewShareForm";

function NewShare()
{
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
        );
    }

    return(
        <section>
            <h1>Share your new Experience</h1>
            <NewShareForm onAddShare={addShareHandler} />
        </section>
    );
}

export default NewShare;