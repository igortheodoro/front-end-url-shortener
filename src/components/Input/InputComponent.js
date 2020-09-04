import React from "react";

import { InputStyled, Paragraph } from "./Styles";
import Aux from "../../hoc/Auxiliary";

export function Input(props) {
  return (
    <Aux>
      <Paragraph>{props.label}</Paragraph>
      <InputStyled
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.change}
      />
    </Aux>
  );
}
