import React from "react";

import { Btn } from "./Styles";

export default function Button(props) {
  return (
    <Btn onClick={props.click} background={props.background}>
      {props.children}
    </Btn>
  );
}
