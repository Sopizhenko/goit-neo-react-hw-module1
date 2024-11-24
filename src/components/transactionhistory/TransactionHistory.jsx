import css from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <table className={css.transactions}>
      <thead>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id} className={css.transaction_line}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
