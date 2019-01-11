import gql from 'graphql-tag';

export default gql`
query 
listNotes{
    listNotes{
      items{
        __typename
        id
        note
      }
    }
  }`;