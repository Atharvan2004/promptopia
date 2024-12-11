"use client";

import React from "react";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {!data.message &&
        data.map((post) => {
          return (
            <PromptCard
              key={post._id}
              post={post}
              creator={post.creator}
              tag={post.tag}
              handleTagClick={handleTagClick}
            />
          );
        })}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const handleSearchChange = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearchText(searchText);

    const searched = posts.filter(
      (post) =>
        post.prompt.toLowerCase().includes(searchText) ||
        post.creator.username.toLowerCase().includes(searchText)
    );

    setFilteredPosts(searched);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/prompt");
      const data = await res.json();
      setPosts(data);
      setFilteredPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        ></input>
      </form>

      <PromptCardList
        data={filteredPosts}
        handleTagClick={(tag) => {
          const filtered = posts.filter((post) => post.tag.includes(tag));
          setFilteredPosts(filtered);
        }}
      />
    </section>
  );
};

export default Feed;
