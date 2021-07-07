import React, { useState, useEffect } from 'react';

// Api
import api from '../../services/api';

// Components
import RepoList from './components/RepoList';

// Interfaces
interface OwnerProps {
  avatar_url: string;
}

export interface RepoProps {
  id: string;
  name: string;
  owner: OwnerProps;
  description: string;
  full_name: string;
  stargazers_count: number;
  forks_count: number;
  open_issues: number;
}

const Dashboard: React.FC = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        const { data } = await api.get('/orgs/facebook/repos');

        setRepos(data);
      } catch (error) {
        // Não foi possível carregar as informações
      }
    };

    loadRepos();
  }, []);

  return (
    <>
      <h1>Repositórios</h1>
      <ul>
        {repos.length &&
          repos.map((repo: RepoProps) => <RepoList repo={repo} />)}
      </ul>
    </>
  );
};

export default Dashboard;
