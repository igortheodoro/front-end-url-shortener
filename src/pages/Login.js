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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class Login extends Component {
  state = {
    credentials: {
      email: null,
      password: null,
    },
    token: null,
  };

  loginHandler = () => {
    const url = "https://shortenerapi.azurewebsites.net/entrar";
    axios
      .post(url, this.state.credentials)
      .then((res) => {
        let token = res.data.mensagem;

        localStorage.setItem("Authorization", "Bearer " + token);

        this.setState({
          token: token,
          credentials: { password: null },
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
            Conecte-se
          </Typography>
          <Grid className={classes.form} container spacing={2}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => this.inputHandler(e, "email")}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => this.inputHandler(e, "password")}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar minhas credenciais."
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.loginHandler}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu sua senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#/registrar" variant="body2">
                  {"Ainda não tem uma conta? Registre-se"}
                </Link>
                {this.state.token ? <Redirect to="/perfil" /> : null}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Login);

// import React, { Component } from "react";
// import axios from "axios";
// import { Redirect } from "react-router";

// import { Input } from "../components/Input/InputComponent";
// import Button from "@material-ui/core/Button";

// class Login extends Component {
//

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

//         <a style={{ padding: "10px" }} href="/registrar">
//           Ainda não tenho uma conta.
//         </a>

//         <Button variant="contained" color="primary" onClick={this.loginHandler}>
//           Entrar
//         </Button>

//         {this.state.token ? <Redirect to="/perfil" /> : null}
//       </div>
//     );
//   }
// }

// export default Login;
