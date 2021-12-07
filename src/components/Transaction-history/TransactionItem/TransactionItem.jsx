import { transactions } from '../../../data/transactions.json';
import PropTypes from 'prop-types';

const TransactionItem = () => {
  return transactions.map(({ id, type, amount, currency }) => {
    return (
      <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
  });
};

TransactionItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};

export default TransactionItem;
