import './user.css';
import UserAccount from '../../components/userAccount/UserAccount';
import BalanceBlock from '../../components/balanceBlock/BalanceBlock';
import data from "../../database.json"; 

function User() {
  const user = data.user[0];

  return (
    <>
        <div className='user-page'>
          <UserAccount firstname={user.firstname} lastname={user.lastname} />
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
