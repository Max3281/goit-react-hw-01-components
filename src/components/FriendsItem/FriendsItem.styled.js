import styled from '@emotion/styled';

export const OneFriend = styled.li`
  width: 300px;
  height: 75px;
  background-color: aliceblue;

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;

  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
`;

export const FriendsOnline = styled.div`
  margin-left: 25px;

  width: 15px;
  height: 15px;
  border-radius: 10px;

  background-color: ${checkOnline};
`;

function checkOnline({ online }) {
  return online ? `green` : 'red';
}

export const FriendsAvatar = styled.img`
  width: 50px;
  height: 50px;
`;

export const FriendsName = styled.span`
  font-weight: 500;
`;
