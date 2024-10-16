import './transaction.css';
import BalanceTitle from '../../components/balanceTitle/BalanceTitle';
import BalanceArray from '../../components/balanceArray/BalanceArray';
import data from "../../database.json";

function Transaction() {
  return (
    <>
        <div className='transaction-block'>
            <BalanceTitle />
            {data.transaction.map((transaction, index) => (
              <BalanceArray 
                key={index} 
                date={transaction.date} 
                description={transaction.description} 
                amount={transaction.amount}
                balance={transaction.balance}
                type={transaction.type}
                category={transaction.category}
                note={transaction.note}
          />
        ))}

        </div>
    </>
  )
}

export default Transaction