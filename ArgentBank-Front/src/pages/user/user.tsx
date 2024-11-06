import './user.css';
import UserAccount from '../../components/userAccount/UserAccount';
import BalanceBlock from '../../components/balanceBlock/BalanceBlock';
import data from "../../database.json"; 

function User() {

  return (
    <>
        <div className='user-page'>
          <UserAccount />
          {data.balance.map((balance, index) => (
            <BalanceBlock
            key={index} 
            title={balance.title} 
            amount={balance.amount} 
            status={balance.status} 
          />
          ))}
        </div>
    </>
  )
}

export default User;
