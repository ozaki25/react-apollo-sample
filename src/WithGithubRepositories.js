import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import GithubRepositories from './GithubRepositories';

const query = gql`
  {
    organization(login: "apollographql") {
      repositories(first: 5) {
        nodes {
          id
          name
          url
          viewerHasStarred
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;

export default graphql(query)(GithubRepositories);
