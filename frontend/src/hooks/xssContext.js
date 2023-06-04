import { useContext, createContext, useState } from "react";
import instance from "../axios.js";

const XssContext = createContext({
  username: '',
  displayText: '',
  imgUrl: '',
  hyperlink: '',
  posts: [],
  updateDisplayText: () => { },
  updateUsername: () => { },
  updateImgUrl: () => { },
  updateHyperlink: () => {},
});

const XssProvider = (props) => {

  const [username, setUsername] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [hyperlink, setHyperlink] = useState('');

  const [posts, setPosts] = useState([]);

  const login = async () => {
    const { data: user } = await instance.get('/user');
    setDisplayText(user.displayText);
    setHyperlink(user.hyperlink);
    setImgUrl(user.imgUrl);
    setUsername(user.username);
    
    const { data: token } = await instance.post('/login');
    console.log(token);
    document.cookie = `xss-token=${token}`;

    console.log('logged in successfully!');

    const { data } = await instance.get('/posts');
    setPosts(data.posts);
  };

  const updateDisplayText = async (newVal) => {
    setDisplayText(newVal);
    await instance.put('/user', {
      username,
      imgUrl,
      displayText: newVal,
      hyperlink
    });
  };
  
  const updateHyperlink = async (newVal) => {
    setHyperlink(newVal);
    await instance.put('/user', {
      username,
      imgUrl,
      displayText,
      hyperlink: newVal
    });
  }

  const updateImgUrl = async (newVal) => {
    setImgUrl(newVal);
    await instance.put('/user', {
      username,
      imgUrl: newVal,
      displayText,
      hyperlink
    });
  }

  const updateUsername = async (newVal) => {
    setUsername(newVal);
    await instance.put('/user', {
      username: newVal,
      imgUrl,
      displayText,
      hyperlink
    });
  }

  return (
    <XssContext.Provider value={{
        username,
        displayText,
        imgUrl,
        hyperlink,
        updateDisplayText,
        updateUsername,
        updateImgUrl,
        updateHyperlink,
        login,
        posts,
      }} 
      { ...props }  
    />
  )

};

const useXss = () => useContext(XssContext);

export { XssProvider, useXss };


