import React, { useState } from 'react';
import Post from './Post.jsx';

const postsData = [
    { title: 'Fuck 1', content: 'yay 1' },
    { title: 'Fuck 2', content: 'yay 2' },
    { title: 'Fuck 3', content: 'yay 3' },
];

const Posts = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState(postsData);
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
            <div
                style={{
                    width: 1000,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 100,
                    flexWrap: 'wrap',
                }}
            >
                <input
                    type="text"
                    placeholder="Search by title"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                {searchResult && <div>{searchResult}</div>}
                {filteredPosts.map((post, index) => (
                    <Post title={post.title} content={post.content} index={index} key={index} />
                ))}
            </div>
        </>
    );

};

export default Posts;
