import React, { useState } from "react";
const Auth=React.createContext({
    token:'',
    islogedin:false,
    login:(token)=>{},
    logout:()=>{}
})
export function AuthContext(props){
   let initial=localStorage.getItem('token')
   const [token,settoken]=useState(initial);
  
   const loginHandler=(token)=>{
settoken(token);
localStorage.setItem('token',token);
setTimeout(()=>{
   settoken(null);
   localStorage.removeItem('token')
},50000);
   }
   const userIsLogedin=!!token;
   const logoutHandler=()=>{
settoken(null);
localStorage.removeItem('token')
   }
   const context={
token:token,
islogedin:userIsLogedin,
login:loginHandler,
logout:logoutHandler
   };
return(
<Auth.Provider value={context}>{props.children}</Auth.Provider>
)
}
export default Auth;