import styled from '@emotion/styled';

export const TransactionCard = styled.section`
  text-align: center;
  width: 500px;
  margin: 0 auto;
  background-color: cadetblue;
  padding: 50px 0px;
`;

export const TransactionTable = styled.table`
  margin: 0 auto;
  width: 450px;
`;

export const TransactionHeader = styled.th`
  width: 100px;
  padding: 10px 25px;
  background-color: cyan;
  text-transform: uppercase;
`;

export const TransactionTableBody = styled.tbody`
  :nth-of-type(even) {
    background-color: cyan;
  }
`;

export const TransactionLine = styled.tr`
  background-color: bisque;
`;

export const TransactionCell = styled.td`
  width: 100px;
  padding: 10px 25px;
`;
