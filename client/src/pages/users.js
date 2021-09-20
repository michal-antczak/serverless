import React, {useState, useEffect} from 'react'
import { SectionNarrow, Heading1 } from '../styles'
import UserCard from '../components/userCard'
import UserCreateForm from '../components/userCreateForm'

export default function UsersPage() {

  const [users, setUsers] = useState([])

  useEffect(()=>{

    (async () =>{
      try{
        const data = await fetch('https://f41bmwcu05.execute-api.eu-central-1.amazonaws.com/test/users')
        const fetchedUsers = await data.json()
        setUsers(fetchedUsers)

      }catch(error){
        console.error(error)
      }
    })()

  },[])

  return (
    <SectionNarrow>

      <Heading1>Users</Heading1>
      {users.map(user=>{
        return(
          <UserCard user={user} />
        )
      })}

      <Heading1>Register User:</Heading1>
      <UserCreateForm/>
    </SectionNarrow>
  )
}


