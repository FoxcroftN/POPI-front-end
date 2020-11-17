import React from "react";
import { Button, TextField, Grid, Paper, AppBar, Typography, Toolbar, Link,} from "@material-ui/core";
import './Register.css';


class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = { username: "", password:"", authflag:1 };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ username: event.state.username, password: event.state.password });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.username === 'admin@littech.in' && this.state.password === 'secret') {
            this.props.history.push("/home");
        } else {
            alert('Incorrect Credntials!');
        }
    }

    render() {
        return (
            <div>
                <AppBar position="static" alignitems="center" color="primary">
                    <Toolbar>
                        <Grid container justify="center" wrap="wrap">
                        <Grid item>
                        <Typography variant="h6">POPI DataClass - Neil Foxcroft</Typography>
                        </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                
            <Grid container spacing={0} justify="center" direction="row">
                <Grid item>
                    <Grid
                    container
                    direction="column"
                    justify="center"
                    spacing={2}
                    className="register-form">
                        <Paper
                            variant="elevation"
                            elevation={2}
                            className="register-background">

                        <Grid item>
                            <Typography id="RegisterHeading" component="h1" variant="h5">
                            Register
                            </Typography>
                        </Grid>
            <Grid item>
                <form onSubmit={this.handleSubmit}>
            <Grid container direction="column" spacing={2}>
            <Grid item>
                <TextField
                    type="email"
                    placeholder="Email"
                    fullWidth
                    name="username"
                    variant="outlined"
                    value={this.state.username}
                    onChange={(event) =>
                        this.setState({[event.target.name]: event.target.value,})}
                    required
                    autoFocus
                />
            </Grid>
            <Grid item>
                <TextField
                    type="password"
                    placeholder="Password"
                    fullWidth
                    name="password"
                    variant="outlined"
                    value={this.state.password}
                    onChange={(event) =>
                        this.setState({[event.target.name]: event.target.value,})}
                    required
            />
            </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className="button-block">
                    Submit
                    </Button>
                </Grid>
            </Grid>
            </form>
            </Grid>
                <Grid item>
                    <Link id="registerlink" href="#" variant="body2">
                        Sign in?
                    </Link>
                </Grid>
                </Paper>
                </Grid>
                </Grid>
                </Grid>
            </div>
        );
    }
}
export default Register;