import React, { Component } from 'react'
import { withMobileDialog } from '@material-ui/core';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import classes from './ResponsiveDialog.module.css';
import AuthContext from '../../../context/auth-context';

class ResponsiveDialog extends Component {
    state = {
        open: this.props.isOpen,
    };

    static contextType = AuthContext;
    
    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    
    render() {

        return (
            <div>
                <Dialog
                    className={classes.dialogContainer}
                    open={this.props.isOpen}
                    onClose={this.props.onClose}
                    aria-labelledby="responsive-dialog-title">
                    <DialogContent>
                        <div className={classes.DialogContent}>
                            {this.props.isAuth && this.context.authenticated ?  
                            <div className={classes.LogoutContainer}>
                                <button className={classes.notificationButton} onClick={this.context.logout}>
                                    logout
                                </button>
                            </div> :
                            this.props.children
                            
                            }
                            {this.props.isNotification ?
                                <button className={classes.notificationButton} onClick={this.props.onClose}>
                                    close
                                </button>
                                : ''
                            }
                        </div>

                    </DialogContent>

                </Dialog>
            </div>
        )
    }
}

ResponsiveDialog.propTypes = {
    fullScreen: PropTypes.bool.isRequired,
}
export default withMobileDialog()(ResponsiveDialog)