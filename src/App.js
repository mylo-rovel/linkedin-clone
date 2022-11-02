import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './Components/Feed/Feed';
import { Header } from './Components/Header/Header';
import Login from './Components/Login/Login';
import Sidebar from './Components/Sidebar/Sidebar';
import Widgets from './Components/Widgets/Widgets';
import { login, logout, selectUser } from './features/user/userSlice';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      // if the user logged in
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }));
        return;
      }
      // if the user logged out
      dispatch(logout())
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const JSXContent = <>
    <Header />
    <div className="app__body">
      <Sidebar />
      <Feed/>
      <Widgets/>
    </div>
  </>;

  return (
    <div className="app">
      {(user) ? JSXContent : <Login/>}
    </div>
  );
}

export default App;
