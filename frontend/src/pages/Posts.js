import React, { useState, useEffect } from 'react';
import Post from './Post.jsx';
import { useXss } from '../hooks/xssContext.js';

// const postsData = [
//     { title: 'Fuck 1', content: 'yay 1' },
//     { title: 'Fuck 2', content: 'yay 2' },
//     { title: 'Fuck 3', content: 'yay 3' },
// ];

const Posts = () => {
    const { posts } = useXss();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState(posts);
    const [searchResult, setSearchResult] = React.useState(null);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            const filtered = postsData.filter((post) =>
                post.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResult(`Result of "${searchTerm}":`);
            setFilteredPosts(filtered);
        }
    };
    
    return (
        <>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            flexDirection: 'column',
            gap: '1rem'
        }}>
            <input
                type="text"
                placeholder="Search by title"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                style={{
                    display: 'box'
                }}
                />
            {searchResult && <div>{searchResult}</div>}
            <div
            style={{
                maxWidth: '80vw',
                width: '45rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                height: '100%',
                flexWrap: 'wrap',
                gap: '0.5rem'
            }}
            >
                {
                    filteredPosts.map((post, index) => (
                        <Post title={post.title} content={post.content} index={index} key={post.postId} />
                        ))
                    }
            </div>
        </div>
        </>
    );

};

export default Posts;
