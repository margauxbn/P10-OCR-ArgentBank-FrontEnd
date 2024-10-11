import './balanceBlock.css';
import { Link } from 'react-router-dom';

function BalanceBlock() {
  return (
    <>
        <div className='balance-block'>
            <div className='balance-information'>
                <h3 className='balance-title'>Argent Bank Checking x8349</h3>
                <p className='balance-amount'>$2,082.79</p>
                <p className='balance-information'>Available Balance</p>    
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
