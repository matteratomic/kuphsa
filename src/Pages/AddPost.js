import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import DropZone from 'react-dropzone'
import RichTextEditor from 'react-rte'
import lines from '../Assets/lines.png'
import Typography from '@material-ui/core/Typography';
import background from '../Assets/hills.png'


const styles = (theme) => {
    return ({
        root: {
            marginLeft: -10,
            marginRight: -10,
            position: 'relative',
            paddingTop: 150,
            paddingRight: 20,
            paddingLeft: 20,
            paddingBottom: 20,
            background: `url('http://buysellgraphic.com/images/graphic_preview/large/space_background_colored_repeating_icons_sketch_29546.jpg')`
        },
        dropzone: {
            width: 270,
            height: 300,
            borderStyle: 'dotted',
            borderWidth: 4,
            textAlign: 'center',
            borderColor: '#007bff',
            backgroundColor: "#fafafa",
        },
        paper: {
            width: '65vw',
            height: 265,
            padding: 20,
            backgroundColor: '#007bff',
            color: 'white',
            borderColor: 'white',
            borderStyle: 'solid',
            borderWidth: 2,
            borderRadius: 5
        },
        formGroup: {
            padding: 20
        },
        papercontent: {
            minHeight: 120,
            marginTop: 50,
            padding: 20,
        },
        textarea: {
            marginTop: 10,
            height: 300,
            borderRadius: 5,
            padding: 20,
            marginBottom: 10,
            fontSize: 15,
            fontFamily: 'Roboto',
            borderWidth: 0.6,
            borderColor: '#007bff',
            outline: 'none',
            borderWidth: 2
        },
    })
}


class AddPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            acceptedFiles: [],
            content:"",
            title: '',
            description: '',
            estimatedTime: '',
            value: RichTextEditor.createEmptyValue()
        }
    }

    onDrop = (accepted) => {
        this.setState({ acceptedFiles: accepted })
    }

    onChange = (value) => {
        this.setState({ value, content: value.toString('html')})
        if(this.props.onChange){
            this.props.onChange(value.toString('html'))
        }
    }

    render() {
        const { classes } = this.props
        return (
            <Fragment>
                <div className={classes.root}>
                    <Grid container justify="center">
                        <Grid item>
                            <DropZone
                                className={classes.dropzone}
                                onDrop={this.onDrop}>
                                {this.state.acceptedFiles[0] ?
                                    <img style={{ width: 275, height: 300 }}
                                        src={this.state.acceptedFiles[0].preview}>
                                    </img> :
                                    <Typography style={{ marginTop: 100, marginLeft: 10, marginRight: 10 }} variant="headline">Drag and drop the featured post image here</Typography>}
                            </DropZone>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <FormGroup className={classes.formGroup}>
                                    <InputLabel style={{ color: 'white' }} htmlFor="postTitle">Post Title</InputLabel>
                                    <Input style={{ color: 'white' }} placeholder="A post needs a good title" type="text" id="postTitle" />
                                </FormGroup>
                                <FormGroup className={classes.formGroup}>
                                    <InputLabel style={{ color: 'white' }} htmlFor="postDescription">Post Description</InputLabel>
                                    <Input style={{ color: 'white' }} placeholder="and a good description" type="text" id="postDescription" />
                                </FormGroup>
                                <FormGroup className={classes.formGroup}>
                                    <InputLabel style={{ color: 'white' }} htmlFor="readTime">Estimated time to read post</InputLabel>
                                    <Input style={{ color: 'white' }} placeholder="10min, 1hr, End of Time?" type="text" id="postDescription" />
                                </FormGroup>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Grid item xs={12}>
                            <Paper style={{
                                minHeight: 120,
                                marginTop: 120,
                                paddingTop: 20,
                                paddingBottom: 20,
                                paddingLeft: 20,
                                paddingRight: 20,
                            }}>

                                <Grid item xs={12}>
                                    <FormGroup style={{ ...styles.formGroup, marginTop: 20 }}>
                                        <InputLabel style={{ marginBottom: 10 }} htmlFor="textarea"><Typography color="primary" variant="headline">Your post goes here...</Typography></InputLabel>
                                        <Typography component="p">P.S: Don't forget to let loose and have fun : )</Typography>
                                        <RichTextEditor
                                            value={this.state.value}
                                            onChange={this.onChange} />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormGroup style={{ marginTop: 50 }}>
                                        <Tooltip
                                            title="Click me when you're done typing"
                                        ><Button style={{ width: 150, marginBottom: 10 }} color="primary" variant="raised">Submit Post</Button>
                                        </Tooltip>
                                        <Button style={{ width: 150, marginBottom: 10 }} color="primary" variant="raised">Clear</Button>
                                    </FormGroup>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </Fragment>)
    }
}


export default withStyles(styles)(AddPost)