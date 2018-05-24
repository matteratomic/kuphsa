import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import a from '../Assets/heisenberg.png'
import b from '../Assets/virus.jpg'
import c from '../Assets/hills.png'
import d from '../Assets/bacteria.jpg'
import e from '../Assets/heisenberg.png'
import f from '../Assets/virus.jpg'
import g from '../Assets/hills.png'
import h from '../Assets/bacteria.jpg'
import IconButton from '@material-ui/core/IconButton'
//import AccountCircle from '@material-ui/icons/AccountCircle'

const styles = (theme) => ({
    root: {
        paddingTop: 50,
        marginLeft: -10,
        marginRight: -10
    }
})

const images = [
    { title: "KUPhSA members visiting a children's home", image: a },
    { title: "ImageTwo", image: b },
    { title: "ImageThree", image: c, cols: 2 },
    { title: "ImageFour", image: d },
    { title: "ImageFive", image: e },
    { title: "ImageSix", image: f, cols: 2 },
    { title: "ImageSeven", image: g },
    { title: "ImageEight", image: h },
]

class Gallery extends Component {
    render() {
        const { classes } = this.props
        return (
            <Fragment>
                <div className={classes.root}>
                    <GridList cellHeight={300}>
                        {images.map((image, index) => {
                            return (
                                <GridListTile
                                    cols={image.cols || 1}
                                    key={index}>
                                    <img src={image.image} />
                                    <GridListTileBar
                                        title={image.title}
                                        subtitle={image.title}
                                        actionIcon={
                                            <IconButton style={{ color: 'white' }}>
                                                
                                            </IconButton>
                                        } />
                                </GridListTile>
                            )
                        })}
                    </GridList>
                </div>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Gallery)


