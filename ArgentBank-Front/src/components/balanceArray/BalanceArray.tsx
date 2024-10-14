import './balanceArray.css';

interface BalanceArrayProps {
  date: string;
  description: string;
  amount: string;
  balance: string;
}

function BalanceArray(props:BalanceArrayProps) {
  return (
    <>
      <div className='balance-array'>
        <div className='array-date'>
          <p>{props.date}</p>
        </div>
        <div className='array-description'>
          <p>{props.description}</p>
        </div>
        <div className='array-price'>
          <p>{props.amount}</p>
        </div>
        <div className='array-balance'>
          <p>{props.balance}</p>
        </div>
        <div className='array-chevron'>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </>
  )
}

export default BalanceArray;
