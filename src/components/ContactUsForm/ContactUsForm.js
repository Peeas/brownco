import React from 'react'
import classes from './ContactUsForm.module.css';
import TextField from '@material-ui/core/TextField';


const ContactUsForm = () => {

    const handleChange = name => event => {
        console.log('name', name)
        console.log('event', event)

    };
    return (
        <div className={classes.ContactUsContainer}>
            <div className={classes.ContactUsForm}>
                <div className={classes.ContactTitle}>
                    Contact Us
                </div>
                <div className={classes.ContactSub}>
                Please fill out the form below, and we will respond promptly! 
                </div>
                <div>
                <form className={classes.FormContainer} noValidate autoComplete="off">
                    <div className={classes.FormRow}>
                        <TextField
                            id="filled-firstName"
                            label="First Name"
                            className={classes.textField}
                            onChange={handleChange('firstName')}
                            margin="normal"
                            variant="filled"
                        />
                        <TextField
                            id="filled-lastName"
                            label="Last Name"
                            className={classes.textField}
                            onChange={handleChange('Last Name')}
                            margin="normal"
                            variant="filled"
                        />
                    </div>
                    <div className={classes.FormRow}>

                        <TextField
                            id="filled-lastName"
                            label="Company Name"
                            className={classes.longField}
                            onChange={handleChange('Company Name')}
                            margin="normal"
                            variant="filled"
                        />
                    </div>
                    <div className={classes.FormRow}>
                        <TextField
                            id="filled-email"
                            label="Email"
                            className={classes.textField}
                            onChange={handleChange('email')}
                            margin="normal"
                            variant="filled"
                        />
                        <TextField
                            id="filled-phone"
                            label="Phone"
                            className={classes.textField}
                            onChange={handleChange('phone')}
                            margin="normal"
                            variant="filled"
                        />
                    </div>
                    <div className={classes.FormRow}>
                        <TextField
                            id="filled-email"
                            label="Your message, request or comment"
                            className={classes.multilineField}
                            onChange={handleChange('email')}
                            margin="normal"
                            variant="filled"
                            multiline
                            rows="6"
                        />

                    </div>
                    <div className={classes.BtnRow}>
                        <button>Send</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
    
}
export default ContactUsForm;