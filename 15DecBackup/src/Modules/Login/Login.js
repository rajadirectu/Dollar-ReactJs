import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
//import { createStore, applyMiddleware } from 'redux';
import { useForm, Controller } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button,  Grid,  FormControlLabel, FormGroup,  TextField, Typography, Container, Divider } from '@material-ui/core';
import { login } from "actions/auth";

function Login(props) {
    // const { register, watch, control, formState: { errors }, handleSubmit } = useForm();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();
  
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

 const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
            justifyContent: 'center'
        },
        container: {
            // display: "flex",
            // justifyContent: "center",
            // textAlign: "center"
        },
        form: {
            // display: "flex",
            // justifyContent: "center",
            // alignItems:"center"
            
            // height: "100vh"
          
        },
textField: {
    // width: 350,
    // margin: theme.spacing(1)
}
    }));
const classes = useStyles();


    const { control, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = values => {
        //form is valid        
        console.log(values);
        setLoading(true);
        dispatch(login(username, password))
        .then(() => {
          props.history.push("Modules/Jurisdiction");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });     
    }
    setLoading(false);
    console.log("errors", errors);    

    if (isLoggedIn) {
    return <Navigate to="Modules/Jurisdiction"/>;
  }
    
   

return (
    <Paper elevation={2}>
         
        <Container className={classes.container}>
           
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                <Grid container spacing={4}>
                    <Grid container item xs={12} md={6} direction="column" spacing={2}>
                        <Typography align="center" variant="h4"> Login Form </Typography>
                        <Controller name="username" control={control} defaultValue=""
                            rules={{ required: true }}
                            render={({ field }) => (
                                <TextField {...field} lg={4} label="Username" variant="outlined" autoComplete="off" margin="dense" className={classes.textField} size="small" error={!!errors.username}
                                    value={username}
                                    onChange={onChangeUsername}
                                    helperText={errors.username && errors.username?.message &&
                                        <span className="invalid-feedback">{errors.username.message}</span>
                                    } />
                            )} />

                        <Controller name="password" control={control} defaultValue=""
                            rules={{ required: true }}
                            render={({ field }) => (
                                <TextField {...field} label="Password" variant="outlined" margin="dense"  autoComplete="off" size="small" className={classes.textField} error={!!errors.password}
                                    value={password}
                                    onChange={onChangePassword}
                                    helperText={errors.password && errors.password?.message &&
                                        <span className="invalid-feedback">{errors.password.message}</span>
                                    } />
                            )} />
                         {/* <Divider light /> */}
                        <Typography variant="h4"
                            color="primary"
                            align="center">
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                className={classes.button}
                                type="submit"
                                disabled={loading}
                             //   startIcon={<SaveIcon />}
                            >
                            {loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>Submit</span>
                            </Button>
            {message && (           
              <div className="invalid-feedback">
                {message}
              </div>           
          )}
                        </Typography>
                            
                      </Grid> 
                      
                </Grid>
                   
                   
                           </form>
        </Container>
    </Paper >
)
}

export default Login
