import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import heisenberg from '../Assets/heisenberg.png';
//import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import IconButton from '@material-ui/core/IconButton'



class Post extends Component {

    constructor(props){
        super(props)
        this.state = {
            name:'',
            comment:''
        }
    }

    handleCommentSubmit = () =>{ 
     this.refs.textarea.value = ''
    }
    
    componentDidMount(){
        window.scrollTo(0, 0)
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
                <div className={classes.content}>
                    <div className={classes.background}></div>
                    <div className={classes.overlay}>
                        <Grid container style={{ marginTop: 75 }}>
                            <Grid xs={12} item>
                                <Typography gutterBottom style={{ color: '#ffcc00' }} component="p">March 23rd 2018 - Ian Macharia</Typography>
                            </Grid>
                            <Grid xs={12} item>
                                <Typography gutterBottom style={{ color: '#ffffff' }} variant="display2">I am the one who knocks</Typography>
                            </Grid>
                            <Grid xs={10} item>
                                <Typography gutterBottom style={{ color: '#ffffff' }} component="p">Let's talk about all the crazy chemistry that goes down in Breaking Bad and also debunk some of the myths</Typography>
                            </Grid>
                            <Grid xs={12} item>
                                <Typography align="left" gutterBottom style={{ color: '#ffcc00', fontSize: 10 }}>4 min read</Typography>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <PostItem heading="Breaking Bad Breakdown" paragraph="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" />
                <PostItem heading="So is all of it really possible?" paragraph="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" />
                <Comments />
                <Grid container>
                    <Grid item>
                        <input style={{ fontFamily: 'Roboto'}} className={classes.nameField} placeholder="What's your name ?" type="text" />
                    </Grid>
                    <Grid item>
                        <textarea ref="textarea" style={{fontFamily:'Roboto'}} placeholder="Place your comment here...." className={classes.textarea} />
                    </Grid>
                </Grid>
                <Grid item>
                    <Button onClick={this.handleCommentSubmit} size="small" style={{ marginLeft: 20 }} variant="raised" color="primary">Add comment</Button>
                </Grid>
            </Fragment>
        )
    }
}

const PostItem = (props) => {
    const { heading, paragraph } = props
    return (
        <div><Typography gutterBottom style={{ marginTop: 50, marginLeft: 20 }} variant="display1">
            {heading}
        </Typography>
            <Typography gutterBottom style={{ paddingRight: 20, paddingLeft: 20 }} component="p">{paragraph}</Typography>
        </div>
    )
}

class Comments extends Component {
    render() {
        return (
            <div>
                <Typography style={{ marginTop: 50, marginLeft: 10 }} variant="headline">Comments</Typography>
                <hr style={{ marginRight: 40, marginLeft: 10 }} />
                <Comment name="Ian Macharia" timestamp={`   Today at 5:42pm`} comment="Good article on Heisenberg....although what happened to Saul?" />
                <Comment name="Ian Macharia" timestamp={`   Today at 5:42pm`} comment="Good article on Heisenberg....although what happened to Saul?" />
                <Comment name="Ian Macharia" timestamp={`   Today at 5:42pm`} comment="Good article on Heisenberg....although what happened to Saul?" />
                <Comment name="Ian Macharia" timestamp={`   Today at 5:42pm`} comment="Good article on Heisenberg....although what happened to Saul?" />

            </div>)
    }
}

const Comment = (props) => {
    const { name, timestamp, comment } = props
    return (
        <Grid container justify="space-around" style={{ marginLeft: 10, marginTop: 20, paddingRight: 10 }}>
            <Grid item xs={2} sm={1} md={1} lg={1}>
                <Avatar
                    style={styles.avatar}
                    src={heisenberg}
                />
            </Grid>
            <Grid item xs={10} sm={11} md={11} lg={11}>
                <Typography align="left" variant="subheading">{name}<span style={{ color: 'grey', fontSize: 12 }}>{timestamp}</span></Typography>
                <Typography align='left' style={{ marginTop: -1 }} component="p">{comment}</Typography>
            </Grid>
        </Grid>
    )
}

const styles = (theme) => ({
    content: {
        position: 'relative',
        marginTop: 50,
        marginLeft: -10,
        marginRight: -10,
        marginBottom: -5,
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
        filter: 'brightness(70%)'
    },
    overlay: {
        marginTop: -5,
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
        borderBottomColor: '#ffcc00',
        borderBottomWidth: 5,
    },
    avatar: {
        width: 70,
        height: 70,
    },
    nameField: {
        width: '76vw',
        marginTop: 30,
        marginLeft: 20,
        paddingTop:10,
        paddingLeft: 20,
        paddingRight:10,
        paddingBottom:10,
        borderStyle:'solid',
        borderWidth: 0.5,
        borderColor:'grey',
        fontSize: 15,
        borderRadius: 5
    },
    textarea: {
        marginTop: 10,
        width: '75vw',
        height: 120,
        borderRadius: 5,
        padding: 20,
        marginLeft: 20,
        marginBottom: 10,
        fontSize: 15,
        borderWidth: 0.6
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

export default withStyles(styles)(Post)