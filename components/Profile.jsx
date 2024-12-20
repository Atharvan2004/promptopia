import React from "react";
import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  const handleTagClick = async () => {};

  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name}'s Profile </span>
        <p className="desc text-left">{desc}</p>

        <div className="mt-16 prompt_layout">
          {data &&
            data.map((post) => {
              return (
                <PromptCard
                  key={post._id}
                  post={post}
                  creator={post.creator}
                  tag={post.tag}
                  handleEdit={() => {
                    handleEdit && handleEdit(post);
                  }}
                  handleDelete={() => {
                    handleDelete && handleDelete(post);
                  }}
                />
              );
            })}
        </div>
      </h1>
    </section>
  );
};

export default Profile;
