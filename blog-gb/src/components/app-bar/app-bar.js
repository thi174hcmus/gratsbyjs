import React from 'react';
import { Link } from "gatsby";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import './app-bar.css';

const appBarStyles = theme => ({
    root: {
        width: '100%',
        position: 'relative',
        zIndex: 2000
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
        color: "#fff"
    },
    title: {
        display: 'none',
        paddingRight: '5px',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
    menuItem: {
        display: 'inline'
    },
    menuItemText: {
        color: '#fff',
        textDecoration: 'none'
    }
});


class SearchAppBar extends React.Component {
    state = {
        toggle: false
    };

    toggleDrawer = (open = undefined) => () => {
        if (open !== undefined) {
            this.setState({
                toggle: open
            });
        } else {
            this.setState({
                toggle: !this.state.toggle
            });
        }

    };
    render() {
        let { classes } = this.props;
        const fullList = (
            <div>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );
        return (
            <div className={classes.root}>
                <AppBar>
                    <Toolbar>
                        <Hidden mdUp>
                            <Button onClick={this.toggleDrawer()} className={classes.menuButton} color="inherit" aria-label="Open drawer">
                                <MenuIcon />
                            </Button>
                            <Drawer anchor="top" open={this.state.toggle} onClose={this.toggleDrawer(false)}>
                                <div
                                    tabIndex={0}
                                    role="button"
                                    onClick={this.toggleDrawer(false)}
                                    onKeyDown={this.toggleDrawer(false)}
                                >
                                    {fullList}
                                </div>
                            </Drawer>
                        </Hidden>
                        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                            Blog
                        </Typography>
                        <Hidden smDown>
                            <MenuList>
                                <MenuItem className={classes.menuItem}>
                                    <Link to={'/'}>
                                        <span className={classes.menuItemText}> Trang chủ </span>
                                    </Link>
                                </MenuItem>
                                <MenuItem className={classes.menuItem}>
                                    <Link to={'/lien-he/'}>
                                        <span className={classes.menuItemText}> Liên hệ </span>
                                    </Link>
                                </MenuItem>
                                <MenuItem className={classes.menuItem}>
                                    <Link to={'/'}>
                                        <span className={classes.menuItemText}> Giới thiệu </span>
                                    </Link>
                                </MenuItem>
                            </MenuList>
                        </Hidden>
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>

                        {/* https://icons8.com/icon/set/social-media/color */}
                        <Button color="inherit">
                            <a href="https://github.com/thi174hcmus">
                                <img src="https://img.icons8.com/color/36/000000/github.png" />
                            </a>
                        </Button>
                        <Button color="inherit">
                            <a href="https://www.facebook.com/reality4rever">
                                <img src="https://img.icons8.com/clouds/36/000000/facebook-f.png"></img>
                            </a>
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    };
}


SearchAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(appBarStyles)(SearchAppBar);