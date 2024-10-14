import './balanceBlock.css';
import { Link } from 'react-router-dom';

interface BalanceBlockProps {
    title: string;
    amount: string;
    status: string;
}

function BalanceBlock(props:BalanceBlockProps) {
  return (
    <>
        <div className='balance-block'>
            <div className='balance-information'>
                <h3 className='balance-title'>{props.title}</h3>
                <p className='balance-amount'>{props.amount}</p>
                <p className='balance-information'>{props.status}</p>    
            </div>
            <div>
                <Link to ='/transaction'>
                    <button className='btn-view-transaction'>View transactions</button>
                </Link>
            </div>        
        </div>
    </>
  )
}

export default BalanceBlock
