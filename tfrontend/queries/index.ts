import gql from 'graphql-tag';

export const DRUG_QUERY = gql`
  query Drugs($input: String) {
    drugs(input: $input) {
      id
      name
      diseases
      description
      released
    }
  }
`;
