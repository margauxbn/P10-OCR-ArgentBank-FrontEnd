import './balanceTitle.css';
import { Link } from 'react-router-dom';

function BalanceTitle() {
  return (
    <>
        <div className='balance-title-block'>
            <div className='balance-information'>
                <h3 className='balance-title'>Argent Bank Checking x8349</h3>
                <p className='balance-amount'>$2,082.79</p>
                <p className='balance-information'>Available Balance</p>    
            </div>
            <div>
                <Link to ='/user'>
                    <button className='btn-cross'>X</button>
                </Link>
            </div>        
        </div>
    </>
  )
}

export default BalanceTitle