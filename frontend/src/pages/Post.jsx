import React from 'react';
import { Card } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';

const { Meta } = Card;

const Post = ({ title, content, index }) => {

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const handleIconClick = () => {
        console.log(window.location);
        const postUrl = `/posts/${index}?prev=${window.location}`;
        navigate(postUrl);
    };
    return (
        <Card style={{ width: '100%' }} actions={[
            <button
                style={{
                    border: 'none',
                    background: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    width: '100%',
                    height: '10px'
                }}
                onClick={handleIconClick}
            >
                <RightCircleOutlined key="goto" />
            </button>
        ]}>
            <Meta title={title} description={content} />
        </Card>
    );
};

export default Post;
