import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const footerStyles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class Footer extends React.Component {
    render() {
        let { classes } = this.props;
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={12} className={classes.paper}>
                        Logo
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.paper}>
                        Giới thiệu
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.paper}>
                        Liên kết
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.paper}>
                        Liên hệ
                    </Grid>
                </Grid>
            </div>
        );
    };
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(footerStyles)(Footer);