import React from 'react'
import { AppBar,Toolbar,Typography,Button,IconButton,makeStyles  } from '@material-ui/core'






const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));


const Appbar = () => {
const classes = useStyles();
    return (
        <div className={classes.root}>
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
        </div>
    )
}

export default Appbar
