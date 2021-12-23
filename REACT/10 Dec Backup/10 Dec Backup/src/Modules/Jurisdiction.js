import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
// import "../pages/Styles.module.css";
import { Paper, Button, ButtonGroup, Grid, RadioGroup, Radio, FormControlLabel, FormGroup, Checkbox, TextField, Typography, Container, Divider } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Box from '@material-ui/core/Box';


function Jurisdiction() {
    const { register, watch, control, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = values => {
        //form is valid
        console.log(values);
    }
    console.log("errors", errors);
    // console.log("watch", watch('firstName'));
    const [value, setValue] = React.useState('female');
    const handleChange = (event) => {
        setValue(event.target.value);
        console.log(event.target.value);
    };
    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
    ];
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
            justifyContent: 'center'
        },
        container: {
            display: "flex",
            justifyContent: "center",
            // textAlign: "center"
        },
        form: {
            // display: "flex",
            justifyContent: "center",
            alignItems: "center"

            // height: "100vh"

        },
        textField: {
            backgroundColor: "white",
            width: 150,
            margin: theme.spacing(1)
        }
    }));
    // const theme = createTheme({
    //     overrides: {
    //         TextField: {
    //             width: 350
    //         },
    //     },
    // });
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: false,
    });
    const handleCheckboxChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    return (
        <Paper elevation={2}>
            <Typography align="center" variant="h4"> Jurisdiction Form </Typography>
            <Container className={classes.container}>


                <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                    <Grid container spacing={4}>
                        <Grid container item xs={12} md={6} direction="column" spacing={2}>

                            <Box border={1} borderColor="grey.500" width={1} boxShadow={2} bgcolor="grey.100" p={1} my={0.5} component="span">

                                <Controller name="firstName" control={control} defaultValue=""
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <TextField {...field} lg={4} label="First Name" variant="outlined" margin="dense" className={classes.textField} size="small" error={!!errors.firstName}
                                            helperText={errors.firstName && errors.firstName?.message &&
                                                <span className="invalid-feedback">{errors.firstName.message}</span>
                                            } />
                                    )} />

                                <Controller name="lastName" control={control} defaultValue=""
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <TextField {...field} label="Last Name" variant="outlined" margin="dense" size="small" className={classes.textField} error={!!errors.lastName}
                                            helperText={errors.lastName && errors.lastName?.message &&
                                                <span className="invalid-feedback">{errors.lastName.message}</span>
                                            } />
                                    )} />
                                <Controller name="email" control={control} defaultValue=""
                                    rules={{
                                        required: true, pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: 'Invalid email address format',
                                        },
                                    }}
                                    render={({ field }) => (
                                        <TextField {...field} type="email" label="Email" variant="outlined" margin="dense" size="small" className={classes.textField} error={!!errors.email}
                                            helperText={errors.email && errors.email?.message &&
                                                <span className="invalid-feedback">{errors.email.message}</span>
                                            }
                                        />
                                    )}
                                />
                                <Controller name="jurisdictionType" control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field }) => (
                                        <Autocomplete {...field}
                                            id="combo-box-demo"
                                            options={top100Films}
                                            getOptionLabel={(option) => option.title}
                                            style={{ width: 300 }}
                                            renderInput={(params) => <TextField {...params} label="Jurisdiction Type" margin="dense" variant="outlined" size="small" className={classes.textField} />}
                                        />
                                    )}
                                />
                            </Box>
                            <Box border={0.5} borderColor="grey.600" width={1} boxShadow={2} p={1} my={0.5} component="span">
                                <FormGroup row className={classes.textField}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={state.checkedA}
                                                onChange={handleCheckboxChange}
                                                name="checkedA" />}
                                        label="Secondary"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={state.checkedB}
                                                onChange={handleCheckboxChange}
                                                name="checkedB"
                                                color="primary"
                                            />
                                        }
                                        label="Primary"
                                    />
                                </FormGroup>
                                <Controller name="siteSurvey" control={control} defaultValue=""
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field }) => (
                                        <TextField {...field} type="text" label="Site Survey" variant="outlined" margin="dense" size="small" className={classes.textField} error={!!errors.siteSurvey}
                                            helperText={errors.siteSurvey && errors.siteSurvey?.message &&
                                                <span className="invalid-feedback">{errors.siteSurvey.message}</span>
                                            }
                                        />
                                    )}
                                />
                                <Controller name="permitFee" control={control} defaultValue=""
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field }) => (
                                        <TextField {...field} type="text" label="Permit Fee" variant="outlined" margin="dense" size="small" className={classes.textField} error={!!errors.permitFee}
                                            helperText={errors.permitFee && errors.permitFee?.message &&
                                                <span className="invalid-feedback">{errors.permitFee.message}</span>
                                            }
                                        />
                                    )}
                                />
                                <Controller name="permitFee" control={control} defaultValue=""
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field }) => (
                                        <TextField {...field} type="text" label="Permit Fee" variant="outlined" margin="dense" size="small" className={classes.textField} error={!!errors.permitFee}
                                            helperText={errors.permitFee && errors.permitFee?.message &&
                                                <span className="invalid-feedback">{errors.permitFee.message}</span>
                                            }
                                        />
                                    )}
                                />
                                <Controller name="permitFee" control={control} defaultValue=""
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field }) => (
                                        <TextField {...field} type="text" label="Permit Fee" variant="outlined" margin="dense" size="small" className={classes.textField} error={!!errors.permitFee}
                                            helperText={errors.permitFee && errors.permitFee?.message &&
                                                <span className="invalid-feedback">{errors.permitFee.message}</span>
                                            }
                                        />
                                    )}
                                />
                            </Box>
                            <Box border={0.5} borderColor="grey.600" width={1} boxShadow={2} p={1} my={0.5} component="span">
                                <Controller name="permitFee" control={control} defaultValue=""
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field }) => (
                                        <TextField {...field} type="text" label="Permit Fee" variant="outlined" margin="dense" size="small" className={classes.textField} error={!!errors.permitFee}
                                            helperText={errors.permitFee && errors.permitFee?.message &&
                                                <span className="invalid-feedback">{errors.permitFee.message}</span>
                                            }
                                        />
                                    )}
                                />
                                <Controller name="permitFee" control={control} defaultValue=""
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field }) => (
                                        <TextField {...field} type="text" label="Permit Fee" variant="outlined" margin="dense" size="small" className={classes.textField} error={!!errors.permitFee}
                                            helperText={errors.permitFee && errors.permitFee?.message &&
                                                <span className="invalid-feedback">{errors.permitFee.message}</span>
                                            }
                                        />
                                    )}
                                />
                            </Box>
                        </Grid>

                        <Grid container item xs={12} md={6} direction="column" spacing={2}>
                            <Box  ml={2}  border={1.5} borderColor="grey.600" width={1} boxShadow={2} p={1} my={0.5} component="span">
                                <Controller name="password" control={control} defaultValue=""
                                    rules={{
                                        required: true, minLength: {
                                            value: 6,
                                            message: "Your password must be at least 6 characters"
                                        },
                                    }}
                                    render={({ field }) => (
                                        <TextField {...field} type="password" label="Password" variant="outlined" margin="dense" size="small" className={classes.textField} error={!!errors.password}
                                            helperText={errors.password && errors.password?.message &&
                                                <span className="invalid-feedback">{errors.password.message}</span>
                                            }
                                        />
                                    )}
                                />

                                <Controller name="address" control={control} defaultValue=""
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field }) => (
                                        <TextField {...field} type="address" label="Address" variant="outlined" margin="dense" size="small" multiline className={classes.textField} error={!!errors.address}
                                            helperText={errors.address && errors.address?.message &&
                                                <span className="invalid-feedback">{errors.address.message}</span>
                                            }
                                        />
                                    )}
                                />
                                <Controller name="gender" control={control} defaultValue=""
                                    render={({ field }) => (
                                        <RadioGroup {...field} className={classes.textField} style={{ flexDirection: "row" }} aria-label="gender" name="gender" value={value} onChange={handleChange}>
                                            <FormControlLabel value="female" control={<Radio className="form-check-input" />} label="Female" />
                                            <FormControlLabel value="male" control={<Radio className="form-check-input" />} label="Male" />
                                        </RadioGroup>
                                    )}
                                />
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>

                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Date picker inline"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        className={classes.textField}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />

                                </MuiPickersUtilsProvider>
                                <Controller name="jurisdictionName" control={control} defaultValue=""
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field }) => (
                                        <TextField {...field} type="text" label="JurisdictionName" variant="outlined" margin="dense" size="small" className={classes.textField} error={!!errors.jurisdictionName}
                                            helperText={errors.jurisdictionName && errors.jurisdictionName?.message &&
                                                <span className="invalid-feedback">{errors.jurisdictionName.message}</span>
                                            }
                                        />
                                    )}
                                />
                            {/* </Box>
                            <Box border={1} borderColor="grey.600" width={1} boxShadow={2} p={1} my={0.5} component="span"> */}
                                <Controller name="permitFee" control={control} defaultValue=""
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field }) => (
                                        <TextField {...field} type="text" label="Permit Fee" variant="outlined" margin="dense" size="small" className={classes.textField} error={!!errors.permitFee}
                                            helperText={errors.permitFee && errors.permitFee?.message &&
                                                <span className="invalid-feedback">{errors.permitFee.message}</span>
                                            }
                                        />
                                    )}
                                />
                                <Controller name="permitFee" control={control} defaultValue=""
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field }) => (
                                        <TextField {...field} type="text" label="Permit Fee" variant="outlined" margin="dense" size="small" className={classes.textField} error={!!errors.permitFee}
                                            helperText={errors.permitFee && errors.permitFee?.message &&
                                                <span className="invalid-feedback">{errors.permitFee.message}</span>
                                            }
                                        />
                                    )}
                                />
                                <Controller name="Ad" control={control} defaultValue=""
                                    render={({ field }) => (
                                        <RadioGroup {...field} className={classes.textField} style={{ flexDirection: "row" }} aria-label="Ad" name="Ad" value={value} onChange={handleChange}>
                                            <FormControlLabel value="Yes" control={<Radio className="form-check-input" />} label="Yes" />
                                            <FormControlLabel value="No" control={<Radio className="form-check-input" />} label="No" />
                                        </RadioGroup>
                                    )}
                                />
                                <Controller name="permitFee" control={control} defaultValue=""
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field }) => (
                                        <TextField {...field} type="text" label="Permit Fee" variant="outlined" margin="dense" size="small" className={classes.textField} error={!!errors.permitFee}
                                            helperText={errors.permitFee && errors.permitFee?.message &&
                                                <span className="invalid-feedback">{errors.permitFee.message}</span>
                                            }
                                        />
                                    )}
                                />
                                <Controller name="permitFee" control={control} defaultValue=""
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field }) => (
                                        <TextField {...field} type="text" label="Permit Fee" variant="outlined" margin="dense" size="small" className={classes.textField} error={!!errors.permitFee}
                                            helperText={errors.permitFee && errors.permitFee?.message &&
                                                <span className="invalid-feedback">{errors.permitFee.message}</span>
                                            }
                                        />
                                    )}
                                />
                                <Controller name="permitFee" control={control} defaultValue=""
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field }) => (
                                        <TextField {...field} type="text" label="Permit Fee" variant="outlined" margin="dense" size="small" className={classes.textField} error={!!errors.permitFee}
                                            helperText={errors.permitFee && errors.permitFee?.message &&
                                                <span className="invalid-feedback">{errors.permitFee.message}</span>
                                            }
                                        />
                                    )}
                                />
                                <Controller name="permitFee" control={control} defaultValue=""
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field }) => (
                                        <TextField {...field} type="text" label="Permit Fee" variant="outlined" margin="dense" size="small" className={classes.textField} error={!!errors.permitFee}
                                            helperText={errors.permitFee && errors.permitFee?.message &&
                                                <span className="invalid-feedback">{errors.permitFee.message}</span>
                                            }
                                        />
                                    )}
                                />
                            {/* </Box>
                            <Box border={1} borderColor="grey.600" width={1} boxShadow={2} p={1} my={0.5} component="span"> */}
                                <Controller name="permitFee" control={control} defaultValue=""
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field }) => (
                                        <TextField {...field} type="text" label="Permit Fee" variant="outlined" margin="dense" size="small" className={classes.textField} error={!!errors.permitFee}
                                            helperText={errors.permitFee && errors.permitFee?.message &&
                                                <span className="invalid-feedback">{errors.permitFee.message}</span>
                                            }
                                        />
                                    )}
                                />
                                <Controller name="permitFee" control={control} defaultValue=""
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field }) => (
                                        <TextField {...field} type="text" label="Permit Fee" variant="outlined" margin="dense" size="small" className={classes.textField} error={!!errors.permitFee}
                                            helperText={errors.permitFee && errors.permitFee?.message &&
                                                <span className="invalid-feedback">{errors.permitFee.message}</span>
                                            }
                                        />
                                    )}
                                />
                            </Box>
                        </Grid>
                        {/* <FormGroup>
                    <FormControlLabel control={<Checkbox {...register("checkbox")} defaultChecked />} label="Label" />
                    <FormControlLabel disabled control={<Checkbox {...register("checkbox")} />} label="Disabled" />
                </FormGroup>


                <FormControl>
                    <input {...register("radio")} type="radio" value="Male" />
                    <input {...register("radio")} type="radio" value="Female" />

                </FormControl> */}
                    </Grid>
                    <br />
                    <Container className={classes.container}>
                        <ButtonGroup size="small" style={{ display: "flex", justifyContent: "center" }}>
                            <Typography variant="h4"
                                color="primary"
                                align="center">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    className={classes.button}
                                    type="submit"
                                    startIcon={<SaveIcon />}
                                >Submit
                                </Button>
                            </Typography>

                            <Typography color="primary" variant="h4" align="center">
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="small"
                                    className={classes.button}
                                    startIcon={<DeleteIcon />}>
                                    Clear
                                </Button>
                            </Typography>
                        </ButtonGroup>
                    </Container>
                </form>
            </Container>
        </Paper >
    )
}

export default Jurisdiction;
