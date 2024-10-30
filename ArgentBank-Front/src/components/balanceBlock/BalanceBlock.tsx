import './balanceBlock.css';

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
                <button className='btn-view-transaction'>View transactions</button>
            </div>        
        </div>
    </>
  )
}

export default BalanceBlock
