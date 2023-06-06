import React, { useState, useEffect } from "react";
import Post from "./Post.jsx";
import { useXss } from "../hooks/xssContext.js";
import instance from "../axios.js";
import DOMPurify from "dompurify";

const Posts = () => {
  // const { posts } = useXss();
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [searchResult, setSearchResult] = useState(null);

  const fetchPosts = async () => {
    try {
      const res = await instance.get("/posts");
      console.log("hey", res.data.posts);
      setPosts(res.data.posts);
      setFilteredPosts(res.data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [setPosts]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResult(`Result of "${searchTerm}":`);
      setFilteredPosts(filtered);
    }
  };

  const sanitizedBlog = DOMPurify.sanitize(searchResult);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          style={{
            display: "box",
          }}
        />
        <div
          dangerouslySetInnerHTML={{
            // __html: searchResult,
            __html: sanitizedBlog,
          }}
        />
        {/* {searchResult && <div>{searchResult}</div>} */}
        <div
          style={{
            maxWidth: "80vw",
            width: "45rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            height: "100%",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          {filteredPosts.map((post, index) => (
            <Post
              title={post.title}
              content={post.content}
              index={post.postId}
              key={post.postId}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;
