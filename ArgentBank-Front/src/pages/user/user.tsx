import './user.css';
import UserAccount from '../../components/userAccount/UserAccount';
import BalanceBlock from '../../components/balanceBlock/BalanceBlock';

function User() {
  return (
    <>
        <div className='user-page'>
            <UserAccount />
            <BalanceBlock />
            <BalanceBlock />
            <BalanceBlock />
        </div>
     
    </>
  )
}

export default User
