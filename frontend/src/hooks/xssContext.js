import { useContext, createContext, useState } from "react";
import instance from "../axios.js";

const XssContext = createContext({
  username: '',
  displayText: '',
  imgUrl: '',
  hyperlink: '',
  posts: [],
  updateUsername: async () => { },
  updateImgUrl: async () => { },
  updateWebsite: async () => {},
  getPost: () => {},
});

const XssProvider = (props) => {

  const [username, setUsername] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [hyperlink, setHyperlink] = useState('');

  const [posts, setPosts] = useState([]);
  const [postDict, setPostDict] = useState({});

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
    const dict = {};
    data.posts.forEach(({postId, ...post}) => {
      dict[postId] = post;
    });
    setPostDict(dict);
  };

  const updateWebsite = async (newDisplayText, newHyperlink) => {
    console.log('我被呼叫了', newDisplayText, newHyperlink);
    setDisplayText(newDisplayText);
    setHyperlink(newHyperlink);
    await instance.put('/user', {
      username,
      imgUrl,
      displayText: newDisplayText,
      hyperlink: newHyperlink,
    });
  };

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

  const getPost = (postId) => {
    return postDict[postId];
  }

  return (
    <XssContext.Provider value={{
        username,
        displayText,
        imgUrl,
        hyperlink,
        updateUsername,
        updateImgUrl,
        updateWebsite,
        login,
        posts,
        getPost,
      }} 
      { ...props }  
    />
  )

};

const useXss = () => useContext(XssContext);

export { XssProvider, useXss };


