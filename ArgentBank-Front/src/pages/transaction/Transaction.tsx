import './transaction.css';
import BalanceTitle from '../../components/balanceTitle/BalanceTitle';
import BalanceArray from '../../components/balanceArray/BalanceArray';

function Transaction() {
  return (
    <>
        <div className='transaction-block'>
            <BalanceTitle />
            <BalanceArray />
            <BalanceArray />
            <BalanceArray />
            <BalanceArray />
            <BalanceArray />
            <BalanceArray />
            <BalanceArray />
        </div>
    </>
  )
}

export default Transaction