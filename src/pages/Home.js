import React from 'react';
import styled from 'styled-components';

import { User } from '../components/User';
import { getUsers } from '../api';

export const Home = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUsers();
      setUsers(response.data.data);
    }
    fetchUsers();
  })

  const noUsers = users.length === 0;

  return (
    <MainContainer>
      <div style={{height: '100px'}} />
      <Container>
        {noUsers
        ? <Message>{'There are no users to display. Add through API'}</Message>
        : users.map(user => (
          <User data={user} />
        ))}         
      </Container>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: 'linear-gradient(#ebfffb,#f9f8eb)';
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const Message = styled.h3`
  font-weight: 22px;
  text-align: center;
`;
