import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";

import { Input } from "../components/Input/InputComponent";
import Btn from "../components/Button/ButtonComponent";

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

  // profile = () => {
  //   const url =
  //     "https://shortenerapi.azurewebsites.net/perfil";
  //   axios
  //     .get(url, {
  //       headers: {
  //         Authorization: "Bearer " + this.state.token,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       this.setState({ redirect: true });
  //     })
  //     .catch((err) => console.log(err));
  // };

  render() {
    return (
      <div
        style={{
          display: "flex",
          "flex-direction": "column",
          "align-items": "center",
          "margin-top": "13%",
        }}
      >
        <Input
          label="Insira seu e-mail:"
          change={(e) => this.inputHandler(e, "email")}
          type="email"
          placeholder="email"
        />

        <Input
          label="Insira sua senha:"
          change={(e) => this.inputHandler(e, "password")}
          type="password"
          placeholder="password"
        />

        <a style={{ padding: "10px" }} href="/registrar">
          Ainda não tenho uma conta.
        </a>

        <Btn background="#1390fc" click={this.loginHandler}>
          Entrar
        </Btn>

        {this.state.token ? <Redirect to="/perfil" /> : null}
      </div>
    );
  }
}

export default Login;
