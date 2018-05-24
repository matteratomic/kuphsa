
import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Grid from '@material-ui/core/Grid'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { Link } from "react-router-dom";
import logo from '../Assets/logo.png'

const styles = (theme) => ({
    drawer: {
        width: 80,
        minWidth: 80
    },
    drawerLogo: {
        width: 90,
        height: 35,
        margin: 30
    },
    link: {
        textDecoration: "none",
        outline:'none'
    },
    logo: {
        width: 90,
        height: 35,
        marginLeft:10
    }
})

class NavBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isDrawerOpen: false,
            anchorEl: null

        }
    }

    openDrawer = () => {
        this.setState({
            isDrawerOpen: true
        })
    }

    closeDrawer = () => {
        this.setState({
            isDrawerOpen: false
        })
    }

    openMenu = (e) => {
        this.setState({ anchorEl: e.currentTarget})
    }
    closeMenu = (e)=>{
        this.setState({ anchorEl:null,isDrawerOpen:false})
    }
    render() {
        const { classes } = this.props
        return (
            <Fragment>
                <AppBar>
                    <Toolbar color="primary">
                        <IconButton onClick={this.openDrawer} color="inherit">
                            <Grid container>
                            <Grid item  xs={12}>
                                    <div style={{ marginLeft: 12 ,width:25,height:3,backgroundColor:'white'}}></div>
                            </Grid>
                                <Grid style={{ marginLeft: 12, marginTop: 5 }} item xs={12}>
                            <div style={{width:25,height:3,backgroundColor:'white'}}></div>
                            </Grid>
                                <Grid style={{ marginLeft: 12, marginTop: 5 }} item xs={12}>
                                    <div style={{ width: 25, height: 3, backgroundColor: 'white' }}></div>
                                </Grid>
                            </Grid>
                        </IconButton>
                        <img
                            className={classes.logo}
                            src={logo} />
                        <div style={{ flex: 1 }}></div>
                     
                        <Tooltip title="log in as admin">
                            <Link style={{ color: 'white' }} className={classes.link} to="/login">
                                <Button color="inherit">LOG IN</Button>
                            </Link>
                        </Tooltip>

                    </Toolbar>
                </AppBar>
                <SwipeableDrawer onOpen={this.openDrawer} open={this.state.isDrawerOpen} onClose={this.closeDrawer}>
                    <div>
                        <List>
                            <img
                                className={classes.drawerLogo}
                                src={logo} />
                            <Link className={classes.link} to="/">
                                <ListItem onClick={this.closeDrawer} button>
                                    <ListItemText align="center">Home</ListItemText>
                                </ListItem>
                            </Link>
                            <Divider />
                            <Link className={classes.link} to="/about">
                                <ListItem onClick={this.closeDrawer} button>
                                    <ListItemText align="center">About Us</ListItemText>
                                </ListItem>
                            </Link>
                            <Divider />
                            <Link className={classes.link} to="/blog">
                                <ListItem onClick={this.closeDrawer} button>
                                    <ListItemText align="center">KUPhSA Blog</ListItemText>
                                </ListItem>
                            </Link>
                            <Divider />
                            <Link className={classes.link} to="/events">
                                <ListItem onClick={this.closeDrawer} button>
                                    <ListItemText align="center">Events</ListItemText>
                                </ListItem>
                            </Link>
                            <Divider />
                            <Link className={classes.link} to="/gallery">
                                <ListItem onClick={this.closeDrawer} button>
                                    <ListItemText align="center">Gallery</ListItemText>
                                </ListItem>
                            </Link>
                            <Divider />
                            <Link className={classes.link} to="/chat">
                                <ListItem onClick={this.closeDrawer} button>
                                    <ListItemText align="center">Live Chat</ListItemText>
                                </ListItem>
                            </Link>
                            <Divider />
                            <ListItem onClick={this.openMenu} button>
                                <ListItemText align="center">More</ListItemText>
                            </ListItem>
                            <Divider />
                            <Menu
                                open={Boolean(this.state.anchorEl)}
                                anchorEl={this.state.anchorEl}
                                onClose ={this.closeMenu}>
                                <Link className={classes.link} to="/addpost"><MenuItem onClick={this.closeMenu}>Add Post</MenuItem></Link>
                                <MenuItem onClick={this.closeMenu}>Undergraduate</MenuItem>
                                <MenuItem onClick={this.closeMenu}>Graduate</MenuItem>
                                <MenuItem onClick={this.closeMenu}>Resources</MenuItem>
                                <MenuItem onClick={this.closeMenu}>Contact Us</MenuItem>
                            </Menu>
                        </List>
                    </div>
                </SwipeableDrawer>
            </Fragment>
        );
    }
}

export default withStyles(styles)(NavBar);
