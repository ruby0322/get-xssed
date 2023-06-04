import React from 'react';
import Post from './Post.jsx'


const postsData = [
    { title: 'Fuck 1', content: 'yay 1' },
    { title: 'Fuck 2', content: 'yay 2' },
    { title: 'Fuck 3', content: 'yay 3' },
];

const Posts = () => {
    return (
        <>
            <div style={{
                width: 1000,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 100,
                flexWrap: 'wrap'
            }}>
                {postsData.map((post, index) => (
                    <Post title={post.title} content={post.content} index={index} key={index} />
                ))}
            </div >
        </>
    )
}

export default Posts;