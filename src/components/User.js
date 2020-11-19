import React from 'react';
import styled from 'styled-components';

export const User = ({ data }) => {

  return (
    <UserCard>
      <Avatar src={data.avatar} width={70} />
      <Info>
        <table>
          <tr>
            <p><b>First Name: </b>{data.firstName}</p>
          </tr>
          <tr>
            <p><b>Last Name: </b>{data.lastName}</p>
          </tr>
        </table>
        <Links>
        <button><a href={`/friends/${data.id}`} style={{textAlign: 'center'}}>Direct Friends</a></button>
        <button><a href={`/friends/indirect/${data.id}`} style={{textAlign: 'center'}}>Indirect Friends</a></button>
        </Links>
      </Info>
    </UserCard>
  );
}

const UserCard = styled.div`
  width: 15%;
  height: 250px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin: 20px 30px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.11), 0 6px 6px rgba(0,0,0,0.13);
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
`;

const Avatar = styled.img`
  border-radius: 50%;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
`;