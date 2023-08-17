import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import Auth from '../../store/auth';
import { useContext } from 'react';

const MainNavigation = () => {
  const authctx=useContext(Auth)
  console.log(authctx.islogedin)
  const History=useHistory();
  const islogedin=authctx.islogedin;
  function logoutHandler(e){
e.preventDefault();
console.log("logout")
History.replace('/auth');
authctx.login(null)
  }
  return (
    <header className={classes.header}>
    <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
              {!islogedin && <li>
            <Link to='/auth'>Login</Link>
          </li>}

      {islogedin && <li>
            <Link to='/profile'>Profile</Link>
          </li>}
          {islogedin &&    <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
