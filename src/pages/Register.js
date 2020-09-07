import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { Redirect } from "react-router";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class Register extends Component {
  state = {
    credentials: {
      email: null,
      password: null,
      confirmPassword: null,
    },
    success: false,
  };

  inputHandler = (e, key) => {
    let state = this.state.credentials;

    state[key] = e.target.value;

    this.setState({ credentials: state });
  };

  registerHandler = () => {
    const url = "https://shortenerapi.azurewebsites.net/registrar";
    axios
      .post(url, this.state.credentials)
      .then((res) => {
        console.log(res.data.success);

        this.setState({
          success: res.data.success,
          credentials: { password: null, confirmPassword: null },
        });
      })
      .catch((err) => console.log(err));
  };

  inputHandler = (e, key) => {
    let state = this.state.credentials;

    state[key] = e.target.value;

    this.setState({ credentials: state });
  };

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registre-se
          </Typography>
          <Grid className={classes.form} container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Endereço de e-mail"
                name="email"
                autoComplete="email"
                onChange={(e) => this.inputHandler(e, "email")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => this.inputHandler(e, "password")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Confirme sua senha"
                type="password"
                id="confirm-password"
                autoComplete="current-password"
                onChange={(e) => this.inputHandler(e, "confirmPassword")}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#/entrar" variant="body2">
                Já possui uma conta? Conecte-se
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Register);

// import React, { Component } from "react";
// import axios from "axios";

// import { Redirect } from "react-router";

// import { Input } from "../components/Input/InputComponent";
// import Button from "@material-ui/core/Button";

// class Register extends Component {
//   state = {
//     credentials: {
//       email: null,
//       password: null,
//       confirmPassword: null,
//     },
//     success: false,
//   };

//   inputHandler = (e, key) => {
//     let state = this.state.credentials;

//     state[key] = e.target.value;

//     this.setState({ credentials: state });
//   };

//   registerHandler = () => {
//     const url = "https://shortenerapi.azurewebsites.net/registrar";
//     axios
//       .post(url, this.state.credentials)
//       .then((res) => {
//         console.log(res.data.success);

//         this.setState({
//           success: res.data.success,
//           credentials: { password: null, confirmPassword: null },
//         });
//       })
//       .catch((err) => console.log(err));
//   };

//   inputHandler = (e, key) => {
//     let state = this.state.credentials;

//     state[key] = e.target.value;

//     this.setState({ credentials: state });
//   };

//   render() {
//     return (
//       <div
//         style={{
//           display: "flex",
//           "flex-direction": "column",
//           "align-items": "center",
//           "margin-top": "13%",
//         }}
//       >
//         <Input
//           label="Insira seu e-mail:"
//           change={(e) => this.inputHandler(e, "email")}
//           type="email"
//           placeholder="email"
//         />

//         <Input
//           label="Insira sua senha:"
//           change={(e) => this.inputHandler(e, "password")}
//           type="password"
//           placeholder="password"
//         />

//         <Input
//           label="Confirme sua senha:"
//           change={(e) => this.inputHandler(e, "confirmPassword")}
//           type="password"
//           placeholder="password"
//         />

//         <Button
//           variant="contained"
//           color="primary"
//           onClick={this.registerHandler}
//         >
//           Registrar
//         </Button>

//         {this.state.success ? <Redirect to="/entrar" /> : null}
//       </div>
//     );
//   }
// }

// export default Register;
