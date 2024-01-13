import React from "react";
import NewShareForm from "../components/share/NewShareForm";

function NewShare()
{
    function addShareHandler(shareData)
    {}

    return(
        <section>
            <h1>Share your new Experience</h1>
            <NewShareForm onAddShare={addShareHandler} />
        </section>
    );
}

export default NewShare;