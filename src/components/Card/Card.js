import React from "react";
import { Div, Span } from "./Styles";

import Aux from "../../hoc/Auxiliary";

export default function Card(props) {
  return (
    <Aux>
      <Div>
        <p>
          <Span color="#032d38">Código do endpoint:</Span>
          {props.urlEncurtada}
        </p>
        <p>
          <Span color="#032d38">Url Real:</Span> {props.urlReal}
        </p>
        <p>
          <Span color="#032d38">Acessos Redirecionados:</Span>
          <Span color="#068bb8">{props.acessos}</Span>
        </p>
      </Div>
    </Aux>
  );
}
