import { useState, useRef,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Login.module.css';
import CartContext from '../Context/Cart-Context';


const Login = () => {

   const emailInputRef=useRef();
   const passwordInputRef=useRef();
   const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const loginctx=useContext(CartContext)
 

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const sumbitHandler=(event)=>{
    event.preventDefault();

    const enteredEmail=emailInputRef.current.value;
    const enteredPassword=passwordInputRef.current.value;

    setIsLoading(true);
    console.log("before loading",isLoading);
    let url;
    if(isLogin){
       url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyABaG4S_aphDMO1LCWGC_o8rfNrqtaDdgw';

    }else{
        url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyABaG4S_aphDMO1LCWGC_o8rfNrqtaDdgw';        
    }
    fetch(url,
        {
            method: 'POST',
            body:JSON.stringify({
                email:enteredEmail,
                password:enteredPassword,
                returnSecureToken: true
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        }
      ).then(res =>{
        setIsLoading(false);
        console.log("loading",isLoading);
        if(res.ok){
            return res.json();
        } else{
           return res.json().then(data =>{
                let errorMessage='Authenticate failed';
                // if(data && data.error && data.error.message){
                //     errorMessage=data.error.message;
                // }
                throw new Error (errorMessage);
            });
        }
      }).then(data =>{
        loginctx.token=data.idToken;
        loginctx.login(data.idToken);
        loginctx.profile(data.idToken);
        emailInputRef.current.value = '';
        passwordInputRef.current.value = '';
        navigate('/Store');
      })
      .catch((err)=>{
        alert(err);
      });

  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form  onSubmit={sumbitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
        {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>} 
        {isLoading && <p>Loading...........</p> }{console.log("after loading",isLoading)}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
