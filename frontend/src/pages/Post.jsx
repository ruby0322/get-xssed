import React from 'react';
import { Card } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;

const Post = ({ title, content, index }) => {
    const navigate = useNavigate();
    const handleIconClick = () => {
        const postUrl = `/posts/${index}`;
        navigate(postUrl);
    };
    return (
        <Card style={{ width: 1000 }} actions={[
            <button
                style={{
                    border: 'none',
                    background: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    width: '1000px',
                    height: '40px'
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
