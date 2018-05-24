import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import FormGroup from '@material-ui/core/FormGroup'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import background from '../Assets/hills.png'
import Typography from '@material-ui/core/Typography'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import axios from 'axios'


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: '',
            token: '',
            isLoggedIn:false,
        }
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin() {
        const { name, password } = this.state
        if (name && password) {
            return new Promise((resolve, reject) => {
                axios.post(`http://192.168.0.17:8000/login`, {
                    name,
                    password
                }
                    //, {
                    //         headers: {
                    //             'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiXCJJYW4gTWFjaGFyaWFcIiIsInBhc3N3b3JkIjoiXCJwYXJhbWVjaXVtXCIiLCJpYXQiOjE1MjY2NDQyMDR9.DVlhCS5aMg-KImCC664vtUeGZ6Wqab__YttNDnVbHfk'
                    //         }
                    //     }
                ).then(res => {
                    if (res.data.token) {
                        window.localStorage.setItem('token', res.data.token)
                        this.setState({ isLoggedIn: true })
                    }
                })
                    .catch(err => reject(err))
            })
        }

    }

    openDialog = () => {
        this.setState({ isDialogOpen: true })
    }

    closeDialog = () => {
        this.setState({ isDialogOpen: false })
    }

    render() {
        const { classes } = this.props
        return (
            <Fragment>
                <div className={classes.content}>
                    <div className={classes.background}></div>
                    <div className={classes.overlay}>
                        <div className={classes.root}>
                            <Grid container justify="center">
                                <Grid item>
                                    <Typography style={{ color: 'white' }} variant="display1" gutterBottom>
                                        <span style={{ color: '#ffcc00' }}>KUPhSA</span> Admin Login
                </Typography>
                                </Grid>

                            </Grid>
                            <Grid container alignItems="center" justify="center">
                                <Grid>
                                    <Paper className={classes.paper}>
                                        <FormGroup className={classes.formGroup}>
                                            <InputLabel htmlFor="name">Name</InputLabel>
                                            <Input
                                                placeholder="Enter your name"
                                                id="name"
                                                type="text"
                                                onChange={(e) => { this.setState({ name: e.target.value }) }} />
                                        </FormGroup>


                                        <FormGroup className={classes.formGroup}>
                                            <InputLabel htmlFor="password">Password</InputLabel>
                                            <Input type="password"
                                                placeholder="Enter your password"
                                                id="password"
                                                onChange={(e) => { this.setState({ password: e.target.value }) }}
                                            />
                                            {this.state.token}
                                        </FormGroup>

                                        <FormGroup className={classes.formGroup}>
                                            <Button id="login" onClick={this.handleLogin} style={{ marginTop: 20 }} color="primary" variant="raised">Login</Button>
                                        </FormGroup>

                                    </Paper>
                                </Grid>

                            </Grid>
                            <Grid container style={{ marginTop: 20 }} justify="center">
                                <Grid item>
                                    <Typography component="p" style={{ color: '#ffffff' }}>Having trouble logging in ? <a style={{ color: '#ffcc00' }} href="#">Click here</a></Typography>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
                {this.state.isLoggedIn ? (<Dialog
                    open={this.state.isLoggedIn}
                    onOpen={this.openDialog}
                    onClose={this.closeDialog}>
                    <DialogTitle><span style={{color:'#ffcc00'}}>KUPhSA</span> Admin Login</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Login successful. Welcome {this.state.name})</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick={() => { window.location.href = 'http://192.168.0.17:3000' }} variant="flat">OK</Button>
                    </DialogActions>
                </Dialog>) : null}
                
            </Fragment>
        )
    }

}


const styles = (theme) => ({
    root: {
        paddingTop: 100,
        marginLeft: -10,
        marginRight: -10
    },
    paper: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        width: '40vh',
        height: '45vh',
        marginTop: 50
    },
    formGroup: {
        padding: 20,
        margin: 5
    },
    content: {
        position: 'relative',
        marginLeft: -10,
        marginRight: -15
    },
    background: {
        position: 'absolute',
        height: '100vh',
        width: '100vw',
        background: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(85%)',
        zIndex: -1
    },
    overlay: {
        position: 'absolute',
        zIndex: 1,
        height: '100vh',
        width: '100vw',
    }
})


export default withStyles(styles)(Login)
