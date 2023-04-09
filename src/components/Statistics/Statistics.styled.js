import styled from '@emotion/styled';

export const StatisticsCard = styled.section`
  text-align: center;
  width: 500px;
  margin: 0 auto;
  padding: 50px 0px;
  background-color: bisque;
`;

export const StatisticsTitle = styled.h2`
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.5);
  margin: 0 auto;
  padding: 50px 0px;
  width: 400px;
  background-color: white;
  border-radius: 10px 10px 0px 0px;
`;

export const StatisticsUnit = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;

  list-style: none;

  padding: 0px;
  margin: 0 auto;
  width: 400px;

  :first-of-type {
    border-radius: 0px 0px 0px 10px;
  }

  :last-of-type {
    border-radius: 0px 0px 10px 0px;
  }
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 50px;
  padding: 15px;
  background-color: ${getRandomHexColor()};
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatisticsLabel = styled.span``;

export const StatisticsQuantity = styled.span`
  font-size: 20px;
`;
