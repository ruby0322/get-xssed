import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import instance from "../axios";
import { Descriptions } from "antd";
import { LeftOutlined } from '@ant-design/icons';
import { useXss } from "../hooks/xssContext";

const PostPage = (props) => {
  const { postId } = useParams();
  // const { getPost } = useXss();

  // const back = () => {
  //   console.log(window.location);
  // }

  const [postPage, setPostPage] = useState({});

  const fetchPostPage = async () => {
    try {
      console.log(postId);
      const res = await instance.get(`/post/${postId}`);
      // console.log(res);
      setPostPage(res.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

<<<<<<< HEAD
  const back = () => {
    const params = new URLSearchParams(window.location);
    
=======
  useEffect(() => {
    fetchPostPage();
  }, [setPostPage]);

  const parseQuery = (queryString) => {
    var query = {};
    var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
>>>>>>> e1001f37b7425bee39da54ecf601d6f775121d88
  }

  const location = useLocation();
  const navigate = useNavigate();
  const goBack = () => {
    const newUrl = parseQuery(location.search).prev;
    console.log(newUrl);
    window.location = newUrl;
  };

  return (
    <>
      <Descriptions title="Article" layout="vertical" bordered column={1}>
        <Descriptions.Item label="Title" contentStyle={{"font-size": "40px"}}>
          {postPage.title}
        </Descriptions.Item>
        <Descriptions.Item label="Content" contentStyle={{"font-size": "18px"}} >
          {postPage.content}
        </Descriptions.Item>
      </Descriptions>
      <div style={{padding: "20px", cursor: 'pointer'}} onClick={goBack}>
        <LeftOutlined style={{ fontSize: '30px', color: '#08c' }}/>
      </div>
      {/* <a style={{padding: "20px", cursor: 'pointer'}} href={parseQuery(location.search).prev}>
        <LeftOutlined style={{ fontSize: '30px', color: '#08c' }}/>
      </a> */}
    </>
  );
};

export default PostPage;
