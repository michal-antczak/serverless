import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { ButtonPrimary } from "../../styles";
import { logout } from "../../store/reducers/currentUserReducer";

export default function NavComponent() {
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  function logoutUser() {
    dispatch(logout());
  }

  return (
    <Nav>
      {currentUser.isLogged ? (
        <ButtonPrimary onClick={logoutUser}>Logout</ButtonPrimary>
      ) : (
        <ButtonPrimary>Login</ButtonPrimary>
      )}
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0.9rem 1.4rem;
  background-color: #222;
  color: white;
`;
