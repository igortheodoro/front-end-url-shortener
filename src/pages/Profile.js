import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import { spacing } from "@material-ui/system";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
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
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      error: false,
      loading: true,
      urlReal: null,
      ultimaUrlEncurtada: null,
    };
  }

  state = {};

  componentDidMount() {
    const url = "https://shortenerapi.azurewebsites.net/perfil";

    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      })
      .then((res) => {
        this.setState({ loading: false, data: res.data });
      })
      .catch((err) => this.setState({ error: true }));
  }

  inputHandler = (e) => {
    let state = this.state.urlReal;

    state = e.target.value;

    this.setState({ urlReal: state });
  };

  urlHandler = () => {
    const url = "https://shortenerapi.azurewebsites.net/encurtar";

    let data = JSON.stringify({
      urlReal: this.state.urlReal,
    });

    axios
      .post(url, data, {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        let data = [...this.state.data, res.data];

        this.setState({
          urlReal: null,
          data,
          ultimaUrlEncurtada: res.data.urlEncurtada,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { classes } = this.props;

    let allLinks = this.state.data
      ? this.state.data.map((item) => {
          return (
            <Grid style={{ padding: "5px" }} lg={4} sm={6} xs={12}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    EndPoint: {item.urlEncurtada}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Redirecionar para: {item.urlReal}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Acessos redirecionados: {item.acessos}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })
      : null;

    let page = (
      <div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Encurte um novo link
            </Typography>
            <Grid className={classes.form} container spacing={2}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="text"
                label="Url"
                name="text"
                autoComplete="text"
                autoFocus
                onChange={(e) => this.inputHandler(e)}
              />
            </Grid>
            {this.state.ultimaUrlEncurtada ? (
              <a
                target={"blank"}
                href={`https://igortheodoro.github.io/front-end-url-shortener/#/${this.state.ultimaUrlEncurtada}`}
              >
                https://igortheodoro.github.io/front-end-url-shortener/#/
                {this.state.ultimaUrlEncurtada}
              </a>
            ) : null}
          </div>
        </Container>

        <Grid className={classes.form} container>
          {allLinks}
        </Grid>
      </div>
    );

    return (
      <div>
        {this.state.loading ? null : page}
        {this.state.error ? <Redirect to="/entrar" /> : null}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Profile);

// import React, { Component } from "react";
// import axios from "axios";

// import { Redirect } from "react-router";

// import Card from "../components/Card/Card";
// import { Input } from "../components/Input/InputComponent";
// import Button from "@material-ui/core/Button";

// class Profile extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: null,
//       error: false,
//       loading: true,
//       urlReal: null,
//       ultimaUrlEncurtada: null,
//     };
//   }

//   state = {};

//   componentDidMount() {
//     const url = "https://shortenerapi.azurewebsites.net/perfil";

//     axios
//       .get(url, {
//         headers: {
//           Authorization: localStorage.getItem("Authorization"),
//         },
//       })
//       .then((res) => {
//         this.setState({ loading: false, data: res.data });
//       })
//       .catch((err) => this.setState({ error: true }));
//   }

//   inputHandler = (e) => {
//     let state = this.state.urlReal;

//     state = e.target.value;

//     this.setState({ urlReal: state });
//   };

//   urlHandler = () => {
//     const url = "https://shortenerapi.azurewebsites.net/encurtar";

//     let data = JSON.stringify({
//       urlReal: this.state.urlReal,
//     });

//     axios
//       .post(url, data, {
//         headers: {
//           Authorization: localStorage.getItem("Authorization"),
//           "Content-Type": "application/json",
//         },
//       })
//       .then((res) => {
//         let data = [...this.state.data, res.data];

//         this.setState({
//           urlReal: null,
//           data,
//           ultimaUrlEncurtada: res.data.urlEncurtada,
//         });
//       })
//       .catch((err) => console.log(err));
//   };

//   render() {
//     let allUrlShortened = this.state.data
//       ? this.state.data.map((item) => {
//           return (
//             <Card
//               urlEncurtada={item.urlEncurtada}
//               urlReal={item.urlReal}
//               acessos={item.acessos}
//             />
//           );
//         })
//       : null;

//     let page = (
//       <div>
//         <div
//           style={{
//             display: "flex",
//             "align-items": "center",
//             "flex-direction": "column",
//           }}
//         >
//           <h2 style={{ "text-align": "center" }}>Encurte uma nova URL</h2>
//           <Input
//             change={(e) => this.inputHandler(e)}
//             type="text"
//             label="Insira a URL que irá encurtar:"
//             placeholder="https://igortheodoro.tech"
//           />
//           {this.state.ultimaUrlEncurtada ? (
//             <a
//               target={"blank"}
//               href={`https://igortheodoro.github.io/front-end-url-shortener/#/${this.state.ultimaUrlEncurtada}`}
//             >
//               https://igortheodoro.github.io/front-end-url-shortener/#/
//               {this.state.ultimaUrlEncurtada}
//             </a>
//           ) : null}
//           <Button variant="contained" color="primary" onClick={this.urlHandler}>
//             {" "}
//             Encurtar{" "}
//           </Button>
//         </div>
//         <div
//           style={{
//             width: "100%",
//             display: "flex",
//             "flex-wrap": "wrap",
//           }}
//         >
//           {allUrlShortened}
//         </div>
//       </div>
//     );

//     return (
//       <div>
//         {this.state.loading ? null : page}
//         {this.state.error ? <Redirect to="/entrar" /> : null}
//       </div>
//     );
//   }
// }

// export default Profile;
