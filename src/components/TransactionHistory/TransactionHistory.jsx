import PropTypes from "prop-types";
import css from './TransactionHistory.module.css'
export const TransactionHistory=({data})=>{

return (
    <table className={css.transaction_history}>
        <thead className={css.transaction_tableHeader}>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody className={css.transaction_tableBody}>
            {data.map((action)=>{
                return (
                <tr key={action.id}>
                    <td>{action.type}</td>
                    <td>{action.amount}</td>
                    <td>{action.currency}</td>
                </tr>);
            })}
        </tbody>
    </table>
);}

TransactionHistory.propTypes={
    data:   PropTypes.array,
};