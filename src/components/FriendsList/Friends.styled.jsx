import styled from '@emotion/styled';

export const FriendsCard = styled.section`
  text-align: center;
  width: 500px;
  margin: 0 auto;
  background-color: aquamarine;
  padding: 50px 0px;
`;

export const FriendsUnit = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  padding: 0px;
`;

export const OneFriend = styled.li`
  width: 300px;
  height: 75px;
  background-color: aliceblue;

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;

  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3)
`;

export const FriendsOnline = styled.div`
  margin-left: 25px;

  width: 15px;
  height: 15px;
  border-radius: 10px;

  background-color: ${checkOnline};
`;

function checkOnline({online}) {
 return online ? `green` : 'red'
}

export const FriendsAvatar = styled.img`
  width: 50px;
  height: 50px;
`;

export const FriendsName = styled.span`
  font-weight: 500;
`;
