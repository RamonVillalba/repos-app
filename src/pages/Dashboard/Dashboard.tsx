import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Api
import api from '../../services/api';

// Interfaces
interface RepoProps {
  id: string;
  name: string;
}

const Dashboard: React.FC = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        const { data } = await api.get('/orgs/facebook/repos');

        setRepos(data);
      } catch (error) {
        console.log('Não foi possível carregar as informações');
      }
    };

    loadRepos();
  }, []);

  return (
    <>
      <div>Repositorios</div>
      <ul>
        {repos.length &&
          repos.map((repo: RepoProps) => (
            <Link to={`/details/${repo.name}`}>
              <li key={repo.id}>{repo.name}</li>
            </Link>
          ))}
      </ul>
    </>
  );
};

export default Dashboard;
