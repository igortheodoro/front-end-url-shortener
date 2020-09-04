import React, { Component } from "react";
import axios from "axios";

import { Redirect } from "react-router";

import { Input } from "../components/Input/InputComponent";
import Btn from "../components/Button/ButtonComponent";

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

        <Input
          label="Confirme sua senha:"
          change={(e) => this.inputHandler(e, "confirmPassword")}
          type="password"
          placeholder="password"
        />

        <Btn background="#1390fc" click={this.registerHandler}>
          Registrar
        </Btn>

        {this.state.success ? <Redirect to="/entrar" /> : null}
      </div>
    );
  }
}

export default Register;
