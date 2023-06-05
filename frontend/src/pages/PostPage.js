import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

// import instance from "../axios";
import { Descriptions } from "antd";
import { LeftOutlined } from '@ant-design/icons';
import { useXss } from "../hooks/xssContext";

const PostPage = (props) => {
  const { postId } = useParams();
  const { getPost } = useXss();

  const back = () => {
    const params = new URLSearchParams(window.location);
    
  }

  return (
    <>
      <Descriptions title="Article" layout="vertical" bordered column={1}>
        <Descriptions.Item label="Title" contentStyle={{"font-size": "40px"}}>
          {getPost(postId) && getPost(postId).title}
        </Descriptions.Item>
        <Descriptions.Item label="Content" contentStyle={{"font-size": "18px"}} >
          {getPost(postId) && getPost(postId).content}
        </Descriptions.Item>
      </Descriptions>
      <div style={{padding: "20px", cursor: 'pointer'}} onClick={back}>
        <LeftOutlined style={{ fontSize: '30px', color: '#08c' }}/>
      </div>
    </>
  );
};

export default PostPage;
