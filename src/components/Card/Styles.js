import Styled from "styled-components";

export const Div = Styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 8px;
  width: 20%;
  margin: 15px auto;
  padding: 10px;
  background-color: #f5f5f5;
  box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.1);

  @media(max-width: 800px){
    width: 100%;
    align-items: center;
  }
`;

export const Span = Styled.span`
  font-size: 1.02rem;
  font-weight: 600; 
  padding: 2px;
  color: ${(props) => props.color};
`;
