import classes from './ProfileForm.module.css';
import { useContext, useRef } from 'react';
import Auth from '../../store/auth';
const ProfileForm = () => {
  const authctx=useContext(Auth);

  const Inputpassword=useRef();
  const submitHandler=(e)=>{
    e.preventDefault();
    const enteredpass=Inputpassword.current.value;
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCuh7-IOQf7EvfysZe7Kf7bewepEyNN1VE',
    {method:'POST',
    body:JSON.stringify({
      idToken:authctx.token,
      password:enteredpass,
      returnSecureToken:false
    }),
    headers:{
      'Content-Type':'application/json'
       },
  }
    
    ).then(res=>{})
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={Inputpassword} minLength="7"/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
