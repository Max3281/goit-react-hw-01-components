import propTypes from 'prop-types';
import {
  TransactionCard,
  TransactionTable,
  TransactionHeader,
  TransactionLine,
  TransactionCell,
  TransactionTableBody,
} from './TransactionHistory.styled';

export default function TransactionHistory({ data }) {
  return (
    <TransactionCard>
      <TransactionTable className="transaction-history">
        <thead>
          <TransactionLine>
            <TransactionHeader>Type</TransactionHeader>
            <TransactionHeader>Amount</TransactionHeader>
            <TransactionHeader>Currency</TransactionHeader>
          </TransactionLine>
        </thead>

        <TransactionTableBody>
          {data.map(value => {
            return (
              <TransactionLine key={value.id}>
                <TransactionCell>{value.type}</TransactionCell>
                <TransactionCell>{value.amount}</TransactionCell>
                <TransactionCell>{value.currency}</TransactionCell>
              </TransactionLine>
            );
          })}
        </TransactionTableBody>
      </TransactionTable>
    </TransactionCard>
  );
}

TransactionHistory.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    })
  ).isRequired,
};
