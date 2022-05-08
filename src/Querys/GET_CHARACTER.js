import { gql } from "@apollo/client";

export const GET_CHARACTER = gql`
  query SearchCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      species
      gender
      type

      origin {
        name
      }
      location {
        name
      }
      created
    }
  }
`;