import React from 'react';
import styled from 'styled-components';

export const Navbar = () => {
  return (
    <Bar>
      <Title href="/">The Office</Title>
    </Bar>
  );
}

const Bar = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c3e50;
`;

const Title = styled.a`
  font-size: 25px;
  font-weight: 600;
  text-decoration: none;
  color: white;
`;