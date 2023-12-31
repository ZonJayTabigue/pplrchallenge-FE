import React from 'react'
import { gql, useQuery } from '@apollo/client'

const GET_PROPERTIES = gql`
  query getUsers {
    properties {
    id
    street
    city
    state
    rent
    user {
        id
        firstName
        lastName
      }
    }
  }
`

export const Property = ({task, toggleComplete, deleteTodo, editTodo}) => {
  const { loading, error, data } = useQuery(GET_PROPERTIES)
  

  console.log("Data: ", data);

  return (
    <div>
      { (loading) ? <p>Loading...</p> : (
          data.properties.map((property, index) => (
            <div className='user-items' key={index} >
                <div onClick={() => toggleComplete(task)} className='user-names' >
                    <span> Owner: {property.user.firstName} {property.user.lastName} </span>
                    <br />
                    <span> Street: {property.street}</span>
                    <br />
                    <span> City: {property.city}</span>
                    <br />
                    <span> State: {property.state}</span>
                    <br />
                    <span> Rent: {property.rent}</span>
                </div>
            </div>
          ))
        )
      }
    </div>
  )
}
