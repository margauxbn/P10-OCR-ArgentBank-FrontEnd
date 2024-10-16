import './balanceArray.css';
import { useState } from 'react';  

interface BalanceArrayProps {
  date: string;
  description: string;
  amount: string;
  balance: string;
  type: string;
  category: string;
  note: string;
}

function BalanceArray(props: BalanceArrayProps) {
  const [collapseOpen, setCollapseOpen] = useState(false);

  const toggleCollapse = () => {
    setCollapseOpen(!collapseOpen); 
  };

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
        <div className='array-chevron' onClick={toggleCollapse}>
          <i className={`fa-solid ${collapseOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </div>
      </div>

      {collapseOpen && (
        <div className='balance-collapse'>
          <div className='collapse-section'>
            <h3 className='collapse-title'>Transaction Type</h3>
            <p className='collapse-information'>{props.type}</p>
          </div>
          <div className='collapse-section'>
            <h3 className='collapse-title'>Category</h3>
            <p className='collapse-information'>{props.category}</p>
            <i className="fa-solid fa-pencil"></i>
          </div>
          <div className='collapse-section'>
            <h3 className='collapse-title'>Note</h3>
            <p className='collapse-information'>{props.note}</p>
            <i className="fa-solid fa-pencil"></i>
          </div>
        </div>
      )}
    </>
  );
}

export default BalanceArray;
