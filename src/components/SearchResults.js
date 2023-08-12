import { gql, useQuery } from '@apollo/client';

export const SearchResults = ({ searchKey }) => {
  const SEARCH = gql`  
    query search($query: String!) {
      search(query: $query) {
        users {
          id
          firstName
          lastName
          properties {
              id
              street
              city
              state
              zip
              rent
          }
        }
        properties {
          id
          street
          city
          state
          zip
          rent
          user {
              id
              firstName
              lastName
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(SEARCH, { variables: { query: searchKey } });


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const results = data.search[0];
  console.log(results);
  return (
    <div>
      {results.users ? (
        results.users.map(user => (
          <div key={user.id}>
            {user.properties ? (
              user.properties.map(property => (
                <div className='user-items' key={property.id}>
                  <div className='user-names'>
                    <h3>Owner: {user.firstName} {user.lastName}</h3>
                    <h3>$ {property.rent}</h3>
                    <span>
                      {property.street} {property.city}, {property.state}, {property.zip}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p>No properties available</p>
            )}
          </div>
        ))
      ) : results.properties ? (
        results.properties.map(property => (
          <div className='user-items' key={property.id}>
            <div className='user-names'>
              <h3>Owner: {property.user.firstName} {property.user.lastName}</h3>
              <h3>$ {property.rent}</h3>
              <span>
                {property.street} {property.city}, {property.state}, {property.zip}
              </span>
            </div>
          </div>
        ))
      ) : (
        <p>No data found</p>
      )}
    </div>
  );  
};
