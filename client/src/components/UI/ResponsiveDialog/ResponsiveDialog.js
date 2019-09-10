import React, { Component } from 'react'
import { withMobileDialog } from '@material-ui/core';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import classes from './ResponsiveDialog.module.css';
import AuthContext from '../../../context/auth-context';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
    palette: {
      secondary: red,
    },
  });
  
  
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
                            {this.props.isDeleteJob ?
                                <ThemeProvider theme={theme}>
                                    <div className={classes.JobDelete}>
                                    <Button onClick={() => this.props.onClose(false)} variant="contained">Cancel</Button>
                                    <Button onClick={() => this.props.onClose(true)} variant="contained" color="secondary">
                                        Delete
                                    </Button>
                                    </div>
                                </ThemeProvider>
                            : ''}
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