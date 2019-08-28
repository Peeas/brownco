import React, { Component, Fragment } from 'react'
import classes from './ContactUsForm.module.css';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import axios from 'axios';
import ResponsiveDialog from '../UI/ResponsiveDialog/ResponsiveDialog';
axios.defaults.baseURL = "http://localhost:5000";

class ContactUsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contactForm: {
                firstName: '',
                lastName: '',
                companyName: '',
                email: '',
                phone: '',
                service: '',
                comment: ''
            },
            showSuccess: false,
            showError: false
        }
    }
    
    handleChange = (event) => {
        const updatedContactForm = {
            ...this.state.contactForm
        }
        updatedContactForm[event.target.name] = event.target.value;
        this.setState({
            contactForm: updatedContactForm
        });
    };

    onSubmit = async (e) => {
        e.preventDefault();
        try {
            const contact = this.state.contactForm;
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const body = JSON.stringify(contact);
            const res = await axios.post('/api/contact', body, config);
            if (res) {
                this.setState({
                    showSuccess: true
                })
            }
        } catch(error) {
            if (error) {
                this.setState({
                    showError: true,
                })
            }
        }
    }

    toggleClose = () => {
        this.setState({
            showError: false,
            showSuccess: false
        })
    }

    render () {
        let notification;

        if (this.state.showSuccess) {
            notification = (
                <div className={classes.Notification}>
                    Email Sent!
                </div>
            )
        }
        if (this.state.showError) {
            notification = (
                <div className={classes.Notification}>
                    <p>Uh Oh!</p>
                    <p>there was an error sending the email.</p>
                    <p>Please try again later.</p>
                     
                </div>
            )
        }
        return (
            <Fragment>
                <ResponsiveDialog
                    isOpen={this.state.showSuccess === true || this.state.showError === true}
                    isNotification={true}
                    onClose={this.toggleClose}>
                            {notification}
                </ResponsiveDialog>
            <div className={classes.ContactUsContainer}>
                <div className={classes.ContactUsForm}>
                    <div className={classes.ContactTitle}>
                        Contact Us
                    </div>
                    <div className={classes.ContactSub}>
                    Please fill out the form below, and we will respond promptly! 
                    </div>
                    <div>
                    <form onSubmit={e => this.onSubmit(e)} name="contact" className={classes.FormContainer} autoComplete="off">
                        <div className={classes.FormRow}>
                            <TextField
                                id="firstName"
                                name="firstName"
                                label="First Name"
                                value={this.state.contactForm.firstName}
                                className={classes.textField}
                                onChange={(event)=> this.handleChange(event)}
                                margin="normal"
                                variant="filled"
                            />
                            <TextField
                                id="lastName"
                                name="lastName"
                                label="Last Name"
                                value={this.state.contactForm.lastName}
                                className={classes.textField}
                                onChange={(event)=> this.handleChange(event)}
                                margin="normal"
                                variant="filled"
                            />
                        </div>
                        <div className={classes.FormRow}>
    
                            <TextField
                                id="CompanyName"
                                name="companyName"
                                label="Company Name"
                                value={this.state.contactForm.companyName}
                                className={classes.longField}
                                onChange={(event)=> this.handleChange(event)}
                                margin="normal"
                                variant="filled"
                            />
                        </div>

                        <div className={classes.FormRow}>
                            <TextField
                                id="email"
                                name="email"
                                label="Email"
                                required
                                type="email"
                                value={this.state.contactForm.email}
                                className={classes.textField}
                                onChange={(event)=> this.handleChange(event)}
                                margin="normal"
                                variant="filled"
                            />
                            <TextField
                                id="phone"
                                name="phone"
                                label="Phone"
                                type="phone"
                                className={classes.textField}
                                value={this.state.contactForm.phone}
                                onChange={(event)=> this.handleChange(event)}
                                margin="normal"
                                variant="filled"
                            />
                        </div>

                        <div className={classes.FormRow}>
                            <FormControl variant="filled" className={classes.longField}>
                                <InputLabel htmlFor="service">What service can we help you with?</InputLabel>
                                <Select
                                    value={this.state.contactForm.service}
                                    name="service"
                                    onChange={(event) => this.handleChange(event) }
                                    input={<FilledInput name="service" id="service" />}
                                    >
                                        <MenuItem value={'structural steel'}>Structural Steel</MenuItem>
                                        <MenuItem value={'concrete construction'}>Concrete Construction</MenuItem>
                                        <MenuItem value={'demolition excavation'}>Demolition Excavation</MenuItem>
                                        <MenuItem value={'renewable resources'}>Renewable Resources</MenuItem>
                                        <MenuItem value={'tenant improvement'}>Tenant Improvement</MenuItem>
                                        <MenuItem value={'other'}>Other</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        
                        <div className={classes.FormRow}>
                            <TextField
                                id="comment"
                                name="comment"
                                value={this.state.contactForm.comment}
                                label="Your message, request or comment"
                                className={classes.multilineField}
                                onChange={(event)=> this.handleChange(event)}
                                margin="normal"
                                variant="filled"
                                multiline
                                rows="6"
                            />
    
                        </div>
                        <div className={classes.BtnRow}>
                            <button type="submit">Send</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            </Fragment>
        )
    }
    
}
export default ContactUsForm;