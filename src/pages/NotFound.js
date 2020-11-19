import React from 'react';
import styled from 'styled-components';

export const NotFound = () => {
  return (
    <Container>
      <p>The page you're looking for is not found</p>
      <a href="/">Take me home 🏡</a>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: 'linear-gradient(#ebfffb,#f9f8eb)';
`;