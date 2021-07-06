import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  li {
    padding: 10px 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    img {
      height: 45px;
      width: 45px;
      border-radius: 22.5px;
    }

    &:hover {
      border: 1px solid #999;
      border-radius: 8px;
    }
  }
`;

export const RepoName = styled.div`
  color: #222;
  font-size: 18px;
  font-weight: bold;
`;

export const RepoDescription = styled.div`
  color: #666;
  font-size: 14px;
`;
