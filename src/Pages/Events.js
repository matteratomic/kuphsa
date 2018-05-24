

import React, { Component, Fragment } from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import nyamachoma from '../Assets/nyamachoma.jpg'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
//import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';


const Event = (props) => {
    console.log(props)
    const { classes } = props
    return (
        <Grid item md={4}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={`${nyamachoma}`}
                    title="Event image"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline">KUPHSA Choma Festival</Typography>
                    <Typography component="P">If you have an appetite for roasted meat then lets meet this Saturday 5th</Typography>
                </CardContent>
                <CardActions>
                    <Link to="/events" className={classes.link}><Button size="small" color="primary">Read More</Button></Link>
                </CardActions>
            </Card>
        </Grid>
    )
}

class Events extends Component {

    constructor(props) {
        super(props)
        this.state = {
            events: []
        }
    }

    render() {
        const { classes } = this.props
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
                <div className={classes.root}>
                    <Typography className={classes.title} variant="display2">KUPhSA Events</Typography>
                    <Grid container justify="center">
                        <Event classes={classes} />
                        <Event classes={classes} />
                        <Event classes={classes} />
                        <Event classes={classes} />
                        <Event classes={classes} />
                        <Event classes={classes} />
                    </Grid>
                </div>
            </Fragment>
        )
    }
}

const styles = (theme) => ({
    root: {
        paddingTop: 70,
        paddingLeft: 5,
        paddingRight: 5
    },
    card: {
        minWidth: 320,
        maxWidth: 320,
        maxHeight: 350,
        minHeight: 350,
        margin: 10,
        paddingBottom: 10
    },
    cardMedia: {
        height: 200,
        maxHeight: 200
    },
    title: {
        marginTop: 10,
        marginBottom: 10
    },
    link: {
        textDecoration: 'none'
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



export default withStyles(styles)(Events)