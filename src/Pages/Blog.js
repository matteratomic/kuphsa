import React, { Component, Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import heisenberg from '../Assets/heisenberg.png'
import bacteria from '../Assets/bacteria.jpg'
import polka from '../Assets/polka.png'
import { withStyles } from '@material-ui/core/styles';
//import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import { Link } from 'react-router-dom'
import css from '../blog.css'



class Blog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }
    render() {
        const { classes } = this.props
        const Post = () => {
            return (
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <div className={classes.content}>
                        <div className={classes.background2}></div>
                        <div className={classes.overlay}>
                            <Grid container style={{ marginTop: 50 }}>
                                <Grid xs={12} item>
                                    <Typography gutterBottom style={{ color: '#ffcc00' }} component="p">March 25th 2018 - Ian Macharia</Typography>
                                </Grid>
                                <Grid xs={12} item>
                                    <Typography gutterBottom style={{ color: '#ffffff' }} variant="display2">The Antibiotic Problem</Typography>
                                </Grid>
                                <Grid xs={12} item>
                                    <Typography gutterBottom style={{ color: '#ffffff' }} component="p">Constant misuse of antibiotics has led to the rise of multi-drug resistant bacteria that now pose a real threat</Typography>
                                </Grid>
                                <Grid xs={12} item>
                                    <Link className={classes.link} to="/post"><Button size="small" variant="flat" style={{ color: "#ffcc00" }}>Read More</Button></Link>
                                </Grid>
                            </Grid>
                        </div>

                    </div>
                </Grid>
            )
        }
        const FullLengthPost = () => {
            return (
                < Grid item xs={12} lg={12} >
                    <div className={classes.content}>
                        <div className={classes.background}></div>
                        <div className={classes.overlay}>
                            <Grid container style={{ marginTop: 50 }}>
                                <Grid xs={12} item>
                                    <Typography gutterBottom style={{ color: '#ffcc00' }} component="p">March 23rd 2018 - Ian Macharia</Typography>
                                </Grid>
                                <Grid xs={12} item>
                                    <Typography gutterBottom style={{ color: '#ffffff' }} variant="display2">I am the one who knocks</Typography>
                                </Grid>
                                <Grid xs={12} item>
                                    <Typography gutterBottom style={{ color: '#ffffff' }} component="p">Let's talk about all the crazy chemistry that goes down in Breaking Bad and also debunk some of the myths</Typography>
                                </Grid>
                                <Grid xs={12} item>
                                    <Link className={classes.link} to="/post"><Button size="small" variant="flat" style={{ color: "#ffcc00" }}>Read More</Button></Link>
                                </Grid>
                            </Grid>
                        </div>

                    </div>
                </Grid >
            )
        }
        const TwoThirdsPost = () => {
            return (
                < Grid item xs={12} lg={8} >
                    <div className={classes.content}>
                        <div className={classes.background}></div>
                        <div className={classes.overlay}>
                            <Grid container style={{ marginTop: 50 }}>
                                <Grid xs={12} item>
                                    <Typography gutterBottom style={{ color: '#ffcc00' }} component="p">March 23rd 2018 - Ian Macharia</Typography>
                                </Grid>
                                <Grid xs={12} item>
                                    <Typography gutterBottom style={{ color: '#ffffff' }} variant="display2">I am the one who knocks</Typography>
                                </Grid>
                                <Grid xs={12} item>
                                    <Typography gutterBottom style={{ color: '#ffffff' }} component="p">Let's talk about all the crazy chemistry that goes down in Breaking Bad and also debunk some of the myths</Typography>
                                </Grid>
                                <Grid xs={12} item>
                                    <Link className={classes.link} to="/post"><Button size="small" variant="flat" style={{ color: "#ffcc00" }}>Read More</Button></Link>
                                </Grid>
                            </Grid>
                        </div>

                    </div>
                </Grid >
            )
        }
        return (
            <Fragment>
                {1 ? (<div className={classes.scrollToTop}>
                    <IconButton
                        onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}
                        style={{ color: 'white' }}>
                        <div style={{ marginRight: 2, height: 10, width: 3, backgroundColor: 'white', transform: 'rotate(45deg)' }}></div>
                        <div style={{ marginLeft: 2, height: 10, width: 3, backgroundColor: 'white', transform: 'rotate(315deg)' }}></div>

                    </IconButton>
                </div>) : null}
                <div style={{ background: `url(${polka})` }} className={classes.root}>
                    <Grid container>
                        <TwoThirdsPost />
                        {Array.of(1, 2).map((post) => {
                            return <Post />
                        })}
                        {Array.of(1, 2).map((post) => {
                            return <TwoThirdsPost />
                        })}
                        {Array.of(1, 2).map((post) => {
                            return <Post />
                        })}
                        <TwoThirdsPost />
                        {Array.of(1, 2, 3, 4).map((post) => {
                            return <Post />
                        })}
                        <TwoThirdsPost />
                    </Grid>
                </div>
            </Fragment>
        )
    }
}

const styles = (theme) => ({
    root: {
        marginTop: 50,
        marginLeft: -10,
        marginRight: -10
    },
    content: {
        position: 'relative',
        overflow: 'hidden'
    },
    background: {
        minHeight: 300,
        height: 300,
        maxHeight: 300,
        zIndex: -1,
        background: `url(${heisenberg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttatchment: 'fixed',
        filter: 'brightness(70%)',
    }, background2: {
        minHeight: 300,
        height: 300,
        maxHeight: 300,
        zIndex: -1,
        background: `url(${bacteria})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttatchment: 'fixed',
        filter: 'brightness(70%)'
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.primary.main
    },
    overlay: {
        minHeight: 300,
        height: 300,
        maxHeight: 300,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        borderStyle: 'solid',
        borderColor: '#ffcc00',
        borderBottomWidth: 5,
        overflow: 'hidden'
    },
    scrollToTop: {
        borderRadius: 50,
        minHeight: 50,
        minWidth: 50,
        width: 50,
        height: 50,
        position: 'fixed',
        bottom: 0,
        right: 0,
        zIndex: 20,
        margin: 20,
        backgroundColor: '#007bff'
    }
})

export default withStyles(styles)(Blog)
