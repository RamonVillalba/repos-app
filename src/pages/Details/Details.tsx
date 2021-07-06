import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

// Api
import api from '../../services/api';

// Styles
import { Container, DescriptionContent, InfosContent } from './Details.styles';

// Interfaces
import { RepoProps } from '../Dashboard/Dashboard';

interface RouteParams {
  name: string;
}

interface IssuesProps {
  id: number;
  title: string;
  html_url: string;
}

const Details: React.FC<RouteComponentProps<RouteParams>> = ({ match }) => {
  const [repo, setRepo] = useState({} as RepoProps);
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

  return repo?.id ? (
    <Container>
      <h1>Detalhes do repositório</h1>
      <DescriptionContent>
        <img src={repo.owner.avatar_url} alt="Avatar" />
        <InfosContent>
          <h4>Nome</h4>
          <p>{repo.full_name}</p>
          <h4>Descrição</h4>
          <p>{repo.description}</p>
          <h4>Estrelas</h4>
          <p>{repo.stargazers_count}</p>
          <h4>Forks</h4>
          <p>{repo.forks_count}</p>
          <h4>Issues</h4>
          <p>{repo.open_issues}</p>
        </InfosContent>
      </DescriptionContent>
      <h3>Issues abertas</h3>
      <ul>
        {!!issues.length &&
          issues.map((issue: IssuesProps) => (
            <a href={issue.html_url} target="_blank" rel="noreferrer">
              <li key={issue.id}>{issue.title}</li>
            </a>
          ))}
      </ul>
    </Container>
  ) : (
    <span>Carregando...</span>
  );
};

export default Details;
