import gql from 'graphql-tag';

export default gql`
mutation createNote($note: String!){
  createNote(input:{
    note: $note
  }){
    __typename
    id
    note
  }
}`;