import React, { useState } from "react";
import { Form, Field, ButtonPrimary } from "../../styles";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/reducers/currentUserReducer"; //action from the slice

export default function LoginComponent() {
  const [email, setEmail] = useState();

  const currentUser = useSelector((state) => state.currentUser);

  const dispatch = useDispatch();

  console.log(currentUser);

  async function loginUser(e) {
    e.preventDefault();

    const response = await fetch(
      `https://f41bmwcu05.execute-api.eu-central-1.amazonaws.com/test/user?email=${email}`
    );
    const data = await response.json();
    const user = data[0];

    dispatch(login(user));
  }

  return (
    <div>
      <Form onSubmit={loginUser}>
        <Field>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            name="lastname"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field>

        <ButtonPrimary type="submit">Login</ButtonPrimary>
      </Form>
    </div>
  );
}
