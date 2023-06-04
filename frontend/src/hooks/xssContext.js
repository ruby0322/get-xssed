import { useContext, createContext, useState } from "react";
import instance from "../axios.js";

const XssContext = createContext({
  username: '',
  displayText: '',
  imgUrl: '',
  hyperlink: '',
  posts: [],
  setUsername: () => {},
  setDisplayText: () => { },
  setImgUrl: () => { },
  setHyperlink: () => { },
  login: () => { },
  setPosts: () => {},
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

  return (
    <XssContext.Provider value={{
        username,
        displayText,
        imgUrl,
        hyperlink,
        setUsername,
        setDisplayText,
        setImgUrl,
        setHyperlink,
        login,
        posts,
      }} 
      { ...props }  
    />
  )

};

const useXss = () => useContext(XssContext);

export { XssProvider, useXss };


