import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewShareForm.module.css';

function NewShareForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const nameInputRef = useRef();
    const descriptionInputRef = useRef();


    function submitHandler(event) 
    {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredName = nameInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const shareData = {
            title: enteredTitle,
            image: enteredImage,
            name: enteredName,
            description: enteredDescription
        };
        props.onAddShare(shareData);

    }

    return(
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Title</label>
                    <input type="text" placeholder='Enter your experience title' ref={titleInputRef} required id="title" />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Image</label>
                    <input type="url" placeholder='Enter your Experience Image' ref={imageInputRef} required id="image" />
                </div>
                <div className={classes.control}>
                    <label htmlFor='name'>Name</label>
                    <input type="text" placeholder='Enter your Name' ref={nameInputRef} required id="name" />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' placeholder='Tell us in detail about your Experience' ref={descriptionInputRef} required rows='5' ></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Share</button>
                </div>
            </form>
        </Card>
    );
}

export default NewShareForm;