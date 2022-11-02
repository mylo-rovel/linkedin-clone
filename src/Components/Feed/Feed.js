import React from 'react';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from '../InputOption/InputOption';
import Post from '../Post/Post';
import { db } from '../../firebase';
import firebase from 'firebase/compat/app';
import './Feed.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
  const user = useSelector(selectUser);
  const [inputMssg, setInputMssg] = React.useState('');
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    // we are accesing firebase collection called 'posts'
    // onSnapshot() -> Attaches a listener for QuerySnapshot events.
    // when a new entry is added to the collection, trigger the handler
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        const postsToDisplay = snapshot.docs.map((postDoc) => ({
          id: postDoc.id,
          data: postDoc.data(),
        }));
        setPosts(postsToDisplay);
    });
  }, [])

  const updateInputMssg = (e) => setInputMssg(e.target.value);

  const sendPost = (e) => {
    if (inputMssg === '') return;
    e.preventDefault();
    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: inputMssg,
      photoUrl: user.photoUrl || '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInputMssg('');
  }

  const postsArrJSX = posts.map(({id, data: {name, description, message, photoUrl}}) => (
    <Post key={id} name={name} description={description}
          message={message} photoUrl={photoUrl}/>));

  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input value={inputMssg} onChange={updateInputMssg} type="text" />
                    <button onClick={sendPost} type="submit">Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
              <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9'/>
              <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E'/>
              <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD'/>
              <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E'/>
            </div>
        </div>
        <FlipMove>
          {postsArrJSX}
        </FlipMove>
    </div>
  )
}

export default Feed;