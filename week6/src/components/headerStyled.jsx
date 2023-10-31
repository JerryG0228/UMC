import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const headerContainer = styled.div`
  background: rgba(34, 37, 75, 1);
`;

export const header = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  img {
    margin-right: 20px;
    margin-left: 250px;
  }

  ul {
    list-style: none;
  }
  li {
    margin-right: 20px;
    float: left;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: white;
`;
