import TransactionItem from './TransactionItem/TransactionItem';
import './TransactionHistory.scss';

const TransactionHistory = () => {
  return (
    <section className="section-table">
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          <TransactionItem />
        </tbody>
      </table>
    </section>
  );
};

export default TransactionHistory;
