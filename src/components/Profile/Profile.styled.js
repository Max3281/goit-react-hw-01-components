import styled from '@emotion/styled';

export const UserProfile = styled.section`
  position: relative;

  text-align: center;
  width: 500px;
  margin: 0 auto;
  background-color: gray;
  padding: 50px 0px;

  &::after {
    content: '';

    position: absolute;
    bottom: 125px;
    right: 100px;

    width: 300px;
    height: 1px;

    background-color: black;
  }
`;

export const UserDescription = styled.div`
  position: relative;

  background-color: aliceblue;
  width: 300px;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 25px;
  border-radius: 10px 10px 0px 0px;
`;

export const UserAvatar = styled.img`
  width: 100px;
  height: 100px;
`;

export const UserName = styled.h1`
  margin: 0 auto;
  margin-top: 15px;
`;

export const UserTag = styled.p`
  margin: 0 auto;
  margin-top: 15px;
  color: rgba(0, 0, 0, 0.5);
`;

export const UserLocation = styled.p`
  margin: 0 auto;
  margin-top: 15px;
  color: rgba(0, 0, 0, 0.5);
`;

export const UserStats = styled.ul`
  position: relative;

  list-style: none;
  background-color: gainsboro;
  width: 300px;
  margin: 0 auto;
  padding: 15px 0px;
  border-radius: 0px 0px 10px 10px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  &::before {
    content: '';

    position: absolute;
    left: 120px;

    width: 1px;
    height: 75px;

    background-color: black;
  }

  &::after {
    content: '';

    position: absolute;
    right: 90px;

    width: 1px;
    height: 75px;

    background-color: black;
  }
`;

export const UserStatsUnit = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const UserStatsLabel = styled.span`
  color: rgba(0, 0, 0, 0.5);
`;

export const UserStatsQuantity = styled.span`
  font-weight: 700;
`;
