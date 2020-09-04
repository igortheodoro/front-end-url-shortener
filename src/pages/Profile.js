import React, { Component } from "react";
import axios from "axios";

import { Redirect } from "react-router";

import Card from "../components/Card/Card";
import { Input } from "../components/Input/InputComponent";
import Btn from "../components/Button/ButtonComponent";

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
    let allUrlShortened = this.state.data
      ? this.state.data.map((item) => {
          return (
            <Card
              urlEncurtada={item.urlEncurtada}
              urlReal={item.urlReal}
              acessos={item.acessos}
            />
          );
        })
      : null;

    let page = (
      <div>
        <div
          style={{
            display: "flex",
            "align-items": "center",
            "flex-direction": "column",
          }}
        >
          <h2 style={{ "text-align": "center" }}>Encurte uma nova URL</h2>
          <Input
            change={(e) => this.inputHandler(e)}
            type="text"
            label="Insira a URL que irá encurtar:"
            placeholder="http://localhost:3000/"
          />
          {this.state.ultimaUrlEncurtada ? (
            <a
              target={"blank"}
              href={`https://igortheodoro.github.io/front-end-url-shortener/#/front-end-url-shortener/${this.state.ultimaUrlEncurtada}`}
            >
              https://igortheodoro.github.io/front-end-url-shortener/#/front-end-url-shortener/
              {this.state.ultimaUrlEncurtada}
            </a>
          ) : null}
          <Btn click={this.urlHandler} background="#00a0cc">
            {" "}
            Encurtar{" "}
          </Btn>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            "flex-wrap": "wrap",
          }}
        >
          {allUrlShortened}
        </div>
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

export default Profile;
