import Card from '../ui/Card';
import classes from './NewShareForm.module.css';

function NewShareForm() {
    return(
        <Card>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor='title'>Title</label>
                    <input type="text" placeholder='Enter your experience title' required id="title" />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Image</label>
                    <input type="url" placeholder='Enter your Experience Image' required id="image" />
                </div>
                <div className={classes.control}>
                    <label htmlFor='name'>Name</label>
                    <input type="text" placeholder='Enter your Name' required id="name" />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' placeholder='Tell us in detail about your Experience' required rows='5' ></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add your Experience</button>
                </div>
            </form>
        </Card>
    );
}

export default NewShareForm;