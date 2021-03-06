import React from 'react';

const GithubRepositories = ({ data: { loading, error, organization } }) =>
  loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>{error.toString()}</p>
  ) : (
    <ul>
      {organization.repositories.nodes.map(repo => (
        <li key={repo.id}>
          <a href={repo.url}>{repo.name}</a>
          <button>{repo.stargazers.totalCount} Star</button>
        </li>
      ))}
    </ul>
  );

export default GithubRepositories;
