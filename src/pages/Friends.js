import React from 'react';
import styled from 'styled-components';

import { getUserFriends } from '../api';
import { User } from '../components/User';

export const Friends = ({ match }) => {
  const [friends, setFriends] = React.useState([]);

  const { userId } = match.params;

  React.useEffect(() => {
    const fetchFriends = async () => {
      const response = await getUserFriends(userId);
      setFriends(response.data);
    }
    fetchFriends();
  })

  const noFriends = friends.length === 0;

  return (
    <>
    <Title>Friends</Title>
    <Container>
      {noFriends
      ? <Message>{'There are no friends to display'}</Message>
      : friends.map(friend => (
        <User data={friend} />
      ))} 
    </Container>
    </>
  );
}

const Title = styled.h2`
  font-weight: 600;
  font-size: 22px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Message = styled.h3`
  font-weight: 22px;
  text-align: center;
`;