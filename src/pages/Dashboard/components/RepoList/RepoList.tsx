import React from 'react';

// Styles
import { Container, RepoName, RepoDescription } from './RepoList.styles';

// Interfaces
import { RepoProps } from '../../Dashboard';

interface RepoListProps {
  repo: RepoProps;
}

const RepoList: React.FC<RepoListProps> = ({ repo }) => (
  <Container to={`/details/${repo.name}`}>
    <li key={repo.id}>
      <div>
        <RepoName>{repo.name}</RepoName>
        <RepoDescription>{repo.description}</RepoDescription>
      </div>
      <img src={repo.owner.avatar_url} alt="Avatar" />
    </li>
  </Container>
);

export default RepoList;
