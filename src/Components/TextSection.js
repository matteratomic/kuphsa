import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    section: {
    width:1024,
    minWidth:1024,
    backgroundColor:'#000000',
    height:250,
    }
})

class TextSection extends Component {
    render() {
        return (
            <Fragment>
                About
            </Fragment>
        )
    }
}

export default withStyles(styles)(TextSection)