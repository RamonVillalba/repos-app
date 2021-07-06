import React, { useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

// Api
import api from '../../services/api';

// Interfaces
interface RouteParams {
  name: string;
}

interface ReposProps {
  name: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues: number;
}

interface IssuesProps {
  id: number;
  title: string;
  url: string;
}

const Details: React.FC<RouteComponentProps<RouteParams>> = ({ match }) => {
  const [repo, setRepo] = useState({} as ReposProps);
  const [issues, setIssues] = useState([] as IssuesProps[]);

  useEffect(() => {
    const loadRepo = async () => {
      try {
        const { data } = await api.get(`/repos/facebook/${match.params.name}`);

        setRepo(data);
      } catch (error) {
        console.log('Não foi possível carregar os detalhes do respositório');
      }
    };

    loadRepo();
  }, [match.params.name]);

  useEffect(() => {
    const loadIssues = async () => {
      try {
        const { data } = await api.get(
          `/repos/facebook/${match.params.name}/issues`,
        );

        setIssues(data);
      } catch (error) {
        console.log('Não foi possível carregar as issues');
      }
    };

    loadIssues();
  }, [match.params.name]);

  return (
    <>
      <div>{repo.full_name}</div>
      <div>{repo.description}</div>
      <div>{repo.stargazers_count}</div>
      <div>{repo.forks_count}</div>
      <div>{repo.open_issues}</div>
      <div>
        <ul>
          {!!issues.length &&
            issues.map((issue: IssuesProps) => (
              <Link to={issue.url}>
                <li key={issue.id}>{issue.title}</li>
              </Link>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Details;
