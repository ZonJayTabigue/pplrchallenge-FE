import React from 'react'
import { gql, useQuery } from '@apollo/client'



export const Users = ({task, toggleComplete, deleteTodo, editTodo}) => {
  const GET_USERS = gql`
  query getUsers {
    users {
      id
      firstName
      lastName
    }
  }
`
  
  const { loading, error, data } = useQuery(GET_USERS)

  // console.log("Data: ", data);

  return (
    <div>
      { (loading) ? <p>Loading...</p> : (
          data.users.map((user, index) => (
            <div className='user-items' key={index} >
                <div onClick={() => toggleComplete(task)} className='user-names' >
                    <span>
                      First Name: {user.firstName}
                    </span>
                    <br />
                    <span>
                      Last Name: {user.lastName}
                    </span>
                </div>
            </div>
          ))
        )
      }
    </div>
  )
}
