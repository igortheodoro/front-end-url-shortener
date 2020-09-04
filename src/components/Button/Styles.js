import Styled from "styled-components";

export const Btn = Styled.button`
  display: flex;
  justify-content: center;
  border: none;
  margin: 5px;
  padding: 10px;
  border-radius: 8px;
  height: 200%;
  width: 4rem;
  letter-spacing: .3px;
  background-color: ${(props) => props.background};
  color: white;
  outline: none;
  cursor: pointer;
  }
`;
