import styled from "styled-components";
import { colors } from "./colors";

export const SectionNarrow = styled.section`
  max-width: 1385px;
  margin: ${(p) => (p.margin ? p.margin : "0 auto")};
  background-color: ${(p) => (p.color ? p.color : "transparent")};
  padding: 1.4rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1.9rem;
  border: 1px solid #aaa;
`;
export const Field = styled.div`
  display: flex;
  margin: 0.9rem 0;

  label {
    font-size: 1.9rem;
    color: #222;
    margin-right: 1.4rem;
  }
  input {
    padding: 0.3rem 0.9rem;
    border: 1px solid #aaa;
    background-color: #ddd;
  }
`;
export const ButtonPrimary = styled.button`
  padding: 0.9rem 1.4rem;
  background-color: ${colors.primary};
  color: snow;
  font-size: 1.9rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 0.3rem 0.4rem rgba(0, 0, 0, 0.4);
  transition: all 0.3s;

  &:hover {
    transform: translateY(-0.2rem);
    box-shadow: 0 0.4rem 0.6rem rgba(0, 0, 0, 0.2);
  }
`;
