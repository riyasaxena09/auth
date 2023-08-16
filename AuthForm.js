import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
 const[loading,setloading]=useState(false);
  const emailInput=useRef();
  const passwordInput=useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
const submitHandler=(e)=>{
  
e.preventDefault();
const emailAmount=emailInput.current.value;
const passAmount=passwordInput.current.value;
setloading(true);
if(isLogin){

}else{
 fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCuh7-IOQf7EvfysZe7Kf7bewepEyNN1VE',
 {
  method:'POST',
  body:JSON.stringify({
    email:emailAmount,
    password:passAmount,
    returnSecureToken:true,
  }),
 
 headers:{
'Content-Type':'application/json'
 }
}
 ).then(res=>{
  if(res.ok){

  }else{
    setloading(false);
    res.json().then((data)=>{
let errormsg='Authentication Failed';
if(data && data.error && data.error.message){
  errormsg=data.error.message;
}
alert(errormsg)
    })
  }
 })
    
  }
}

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInput}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
          ref={passwordInput}
          />
        </div>
        <div className={classes.actions}>
          {!loading && <button>{isLogin?'Login':'Create Account'} </button>}
          {loading && <p>loading...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
