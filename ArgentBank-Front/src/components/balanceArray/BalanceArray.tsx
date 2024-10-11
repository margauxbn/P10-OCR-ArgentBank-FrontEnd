import './balanceArray.css';

function BalanceArray() {
  return (
    <>
      <div className='balance-array'>
        <div className='array-date'>
          <p>28/02/20</p>
        </div>
        <div className='array-description'>
          <p>Golden Sun Bakery</p>
        </div>
        <div className='array-price'>
          <p>$8.00</p>
        </div>
        <div className='array-balance'>
          <p>$298.00</p>
        </div>
        <div className='array-chevron'>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </>
  )
}

export default BalanceArray;
