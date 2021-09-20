import React, {useState} from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
import {colors} from '../../styles'


export default function UserCreateFormComponent() {

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [title, setTitle] = useState("")
  const [status, setStatus] = useState("emloyed")
  const [price, setPrice] = useState(0)

  async function createUser(e){

    e.preventDefault()

    const user = {
      id: uuidv4(),
      firstname,
      lastname,
      title,
      price: Number(price),
      status
    }

    console.log(user)

    try{
      const response = await fetch('https://f41bmwcu05.execute-api.eu-central-1.amazonaws.com/test/user',{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
  
      const data = response.json()
  
      console.log(data)
    }catch(error){
      console.error(error)
    }

  }

  return (
    <UserCreateForm onSubmit={createUser}>
      <Field>
        <label htmlFor="firstname">First Name:</label>
        <input type="text" name='firstname' value={firstname} onChange={(e)=>setFirstname(e.target.value)} />
      </Field>
      <Field>
        <label htmlFor="lastname">Last Name:</label>
        <input type="text" name='lastname' value={lastname} onChange={(e)=>setLastname(e.target.value)} />
      </Field>
      <Field>
        <label htmlFor="title">Title:</label>
        <input type="text" name='title' value={title} onChange={(e)=>setTitle(e.target.value)} />
      </Field>
      <Field>
        <label htmlFor="status">Status:</label>
        <select name="status" onChange={(e)=>setStatus(e.target.value)}>
          <option value="emloyed">Employed</option>
          <option value="on leave">On leave</option>
          <option value="ex-employed">Ex-employed</option>
        </select>
      </Field>
      <Field>
        <label htmlFor="price">Price:</label>
        <input type="number" name="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
      </Field>
      <Field>
        <ButtonPrimary>Submit</ButtonPrimary>
      </Field>
    </UserCreateForm>
  )
}

const UserCreateForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1.9rem;
  border: 1px solid #aaa;
`
const Field = styled.div`
  display: flex;
  margin: .9rem 0;

  label{
    font-size: 1.9rem;
    color: #222;
    margin-right: 1.4rem;
  }
  input{
    padding: .3rem .9rem;
    border: 1px solid #aaa;
    background-color: #ddd;
  }
`
const ButtonPrimary = styled.button`

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
`