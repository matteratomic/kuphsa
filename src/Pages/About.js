import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles = (theme) => {
    console.log(theme)
    return (
        {
            root: {
                paddingTop: 30,
                paddingLeft:10,
                paddingRight:10,
                marginLeft: -10,
                marginRight: -10,
                color: theme.palette.text.primary,
            },
            title: {
                marginLeft: 20,
                marginTop: 10
            },
            paragraph: {
                paddingLeft: 10,
                paddingRight: 10,
                marginTop: 10,
                marginBottom: 10


            },
            banner: {
                height: 370,
                backgroundColor: '#000000',
                marginLeft: -10,
                marginRight: -10,
                background:"url('http://complaints.ku.ac.ke/images/newscentre/gate.jpg')",
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundAttatchment:'fixed'
            }
        })
}

class About extends Component {
    render() {
        const { classes } = this.props
        return (
            <Fragment>
                <div className={classes.banner}></div>
                <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} md={6} lg={6}>
                            <Typography className={classes.title} variant="display2">About Us</Typography>
                            <Typography className={classes.paragraph} component="p">
                                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                </Typography>
                    </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <Typography className={classes.title} variant="display2">Our Mission</Typography>
                            <Typography className={classes.paragraph} component="p">
                                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                </Typography>
                        </Grid>
                </Grid>
                <Grid container style={{marginTop:10}}>
                        <Grid item xs={12} md={12} lg={12}>
                            <Typography className={classes.title} variant="display2">Our Vision</Typography>
                            <Typography className={classes.paragraph} component="p">
                                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                </Typography>
                        </Grid>
                </Grid>
                   

                </div>
            </Fragment>
        )
    }
}

export default withStyles(styles)(About)