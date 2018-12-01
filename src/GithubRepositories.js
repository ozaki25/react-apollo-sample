import React from 'react';

const GithubRepositories = ({ data: { loading, organization } }) =>
  loading ? (
    <p>Loading...</p>
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
