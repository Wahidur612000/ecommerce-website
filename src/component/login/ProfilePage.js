import React,{useRef,useContext} from 'react';
import styles from './ProfilePage.module.css';
import CartContext from '../Context/Cart-Context';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const newPasswordRef=useRef();
    const profilectx=useContext(CartContext);
    console.log(profilectx.token);
    const navigate = useNavigate();

    const submitHandler=(event)=>{
        event.preventDefault();

        const enteredNewPassword=newPasswordRef.current.value;

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyABaG4S_aphDMO1LCWGC_o8rfNrqtaDdgw',{
            method: 'POST',
            body:JSON.stringify({
                idToken: profilectx.token,
                Password: enteredNewPassword,
                returnSecureToken: false
            }),
            headers: {
                'Content-Type':'applicaion/json'
            }
        }).then(res=>{
            navigate('/Login');
        });
    };

  return (
    <section className={styles.profile}>
      <h1>Your User Profile</h1>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor='new-password'>New Password</label>
          <input type='password' id='new-password' minLength="6" ref={newPasswordRef} />
        </div>
        <div className={styles.action}>
          <button>Change Password</button>
        </div>
      </form>
    </section>
  );
};

export default ProfilePage;
