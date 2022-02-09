import PropTypes from 'prop-types';
import s from "./Transaction.module.css"

function TransactionHistory({items}) {
  return (
    <div className={s.holderTable}>  
      <table className={s.table}>
        <thead className={s.headTable}>
          <tr>
            <th className={s.titleTable}>Type</th>
            <th className={s.titleTable}>Amount</th>
            <th className={s.titleTable}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => 
              <tr key={item.id} className={s.tableLine}>
                  <td className={s.lineText}>{item.amount}</td>
                  <td className={s.lineText}>{item.type}</td>
                  <td className={s.lineText}>{item.currency}</td>
              </tr>
          )}
        </tbody>
      </table>
    </div> 
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
  }))
}
    
export default TransactionHistory;