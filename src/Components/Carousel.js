import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import Fade from 'material-ui/transitions/Fade'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { Link } from 'react-router-dom'
import heisenberg from '../Assets/heisenberg.png'
import bacteria from '../Assets/bacteria.jpg'
import virus from '../Assets/virus.jpg'


const AutoPlaySwipeableViews = autoPlay(SwipeableViews)


class Carousel extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
            window.scrollTo(0, 0)
    }
    render() {
        const { classes, heading, subHeading } = this.props
        return (
            <div style={{ marginLeft: -20, marginRight: -25}}>
                <AutoPlaySwipeableViews enableMouseEvents interval={10000}>
                    <div className={classes.content}>
                        <div className={classes.background1}></div>
                        <div className={classes.overlay}>
                            <Grid alignItems="content" alignItems="center" container justify="center">

                                <Grid item xs={12}>
                                    <Typography className={classes.bannerHeader}>Welcome to <span style={{ fontFamily: "Oswald", color: "#ffcc00" }}>KUPhSA</span></Typography>
                                </Grid>

                                <Grid style={{ paddingBottom: 50 }} item xs={12}>
                                    <Typography align="center" className={classes.bannerSubHeader}>{subHeading}</Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Button onClick={()=>{alert(window.localStorage.getItem('token'))}} style={{}} color="primary" size="large" variant="raised"><Link className={classes.link} to="/">SIGN UP</Link></Button>
                                </Grid>

                            </Grid>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.background2}></div>
                        <div className={classes.overlay}>
                            <Grid alignItems="content" alignItems="center" container justify="center">

                                <Grid item xs={12}>
                                    <Typography className={classes.bannerHeader}>Welcome to <span style={{ fontFamily: "Oswald", color: "#ffcc00" }}>KUPhSA</span></Typography>
                                </Grid>

                                <Grid style={{ paddingBottom: 50 }} item xs={12}>
                                    <Typography align="center" className={classes.bannerSubHeader}>{subHeading}</Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Button style={{}} color="primary" size="large" variant="raised"><Link className={classes.link} to="/">SIGN UP</Link></Button>
                                </Grid>

                            </Grid>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.background3}></div>
                        <div className={classes.overlay} style={{textAlign:'left'}}>
                            <Grid alignItems="left" alignItems="left" container justify="left">

                                <Grid item xs={12}>
                                    <Typography style={{}} align="left" className={classes.bannerHeader}>Check out our <span style={{color:'#ffcc00'}}>blog</span></Typography>
                                </Grid>

                                <Grid style={{ paddingBottom: 50 }} item xs={12}>
                                    <Typography align="left" className={classes.bannerSubHeader}>Our editorial team sources current trends plus the latest developments in the dynamic pharmaceutical world and posts it on the KUPhSA blog. Feel free to check it out.</Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Button  style={{marginLeft:55}} color="primary" size="large" variant="raised"><Link className={classes.link} to="/blog">GO TO BLOG</Link></Button>
                                </Grid>

                            </Grid>
                        </div>
                    </div>
                </AutoPlaySwipeableViews>
            </div>

        )
    }
}

const styles = (theme) => (
    {
        content: {
            position: 'relative',
        },
        background1: {
            minHeight: 720,
            height: 720,
            maxHeight: 720,
            zIndex: -1,
            backgroundImage: `url(${bacteria})`,
            backgroundPosition: "center",
            backgroundSize: 'cover',
            filter: 'brightness(70%)'
        },
        background2: {
            minHeight: 720,
            height: 720,
            maxHeight: 720,
            zIndex: -1,
            backgroundImage: `url(${virus})`,
            backgroundPosition: "center",
            backgroundSize: 'cover',
            filter: 'brightness(70%)'
        },
        background3: {
            minHeight: 720,
            height: 720,
            maxHeight: 720,
            zIndex: -1,
            backgroundImage: `url(${heisenberg})`,
            backgroundPosition: "center",
            backgroundSize: 'cover',
            filter: 'brightness(70%)'
        },
        overlay: {
            textAlign: 'center',
            minHeight: 720,
            height: 720,
            maxHeight: 720,
            position: 'absolute',
            top: 0,
            left: 0,
            color: '#ffffff',
            fontSize: 30,
            zIndex: 1,
            paddingTop: 100,
            paddingleft: 20,
            paddingRight: 20,
            paddingBottom: 20,
        },
        bannerHeader: {
            paddingTop: 70,
            fontSize: "10vh",
            color: '#fff',
            marginLeft: 60,
            marginRight: 10,
        },
        bannerSubHeader: {
            fontSize: "3vh",
            color: '#fff',
            paddingleft: 20,
            paddingRight: 20,
            marginLeft: 60,
            marginRight: 10,
        },
        link: {
            textDecoration: "none",
            color: theme.palette.common.white
        },
        mybutton: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
        }
    })




Carousel.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Carousel)
