import React from 'react';
import './Login.css';
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../../features/user/userSlice';

function Login() {
  const [name, setName] = React.useState('');
  const [picUrl, setPicUrl] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();

  const onChangeUpdate = (setter) => (e) => {
    setter(e.target.value);
  }

  const loginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then(userAuth => {          
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoUrl: userAuth.user.photoURL
        }))
      })
      .catch(err => alert(err));
  };

  const registerToApp = () => {
    if (!name || !email || !password) return;
    auth.createUserWithEmailAndPassword(email, password)
      .then(userAuth => {
        // completing the profile with other data
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: picUrl
        })
        // after filling all the fields in the db, use the user
      .then(() => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoUrl: picUrl
      }))})
      .catch(err => alert(err));
    });
    alert('sucess');
  };

  return (
    <div className='login'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" alt="linkedinLogo" />

      <form>
        <input value={name}     onChange={onChangeUpdate(setName)}     placeholder='Full name (required if registering)' type="text" />
        <input value={picUrl}   onChange={onChangeUpdate(setPicUrl)}   placeholder='Profile pic URL (optional)' type="text" />
        <input value={email}    onChange={onChangeUpdate(setEmail)}    placeholder='Email' type="email" />
        <input value={password} onChange={onChangeUpdate(setPassword)} placeholder='Password' type="password" />
        <button onClick={loginToApp}>Sign In</button>
      </form>

      <p>
        Not a member?
        <span className='login__register' onClick={registerToApp}> Register Now</span>
      </p>
    </div>
  )
}

export default Login;