import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button } from '@material-ui/core';
import NavBar from './NavBar';

// import BarChart from './barChart'

const useStyles = makeStyles((theme) => ({
 
 
  paper: {
    width: 300,
    margin: '0 auto',
    marginTop: 45,
    textAlign: 'center',
    padding: 15,


  },

  input: {
    width: '95%',
    marginBottom: 10,
    
    
  }

}));



function App() {
  const classes = useStyles();
    

  return (
    <div className={classes.root}>
      <NavBar />
      
      <Paper elevation={3} className={classes.paper}>
        <h1>Login</h1>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField label="Enter Email" className={classes.input} />

          <TextField label="Enter password" className={classes.input}/>
          <Button variant="contained" color="primary" className={classes.input}>
            Login
        </Button>
        </form>
      
      </Paper>
     
    </div>
  );
}

export default App;
