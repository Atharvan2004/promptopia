"use client";

import { useState } from "react";
import Image from "@node_modules/next/image";
import React from "react";
import { useSession } from "@node_modules/next-auth/react";
import { usePathname, useRouter } from "@node_modules/next/navigation";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const [copied, setCopied] = useState(false);
  const { data: session } = useSession();
  const pathName = usePathname();
  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <Image
          src={post.creator.image}
          alt="image"
          width={40}
          height={40}
          className="rounded-full object-contain"
        />
        <div className="flex flex-col">
          <h3 className="text-sm font-bold">{post.creator.username}</h3>
          <p className="font-inter text-sm text-gray-400">
            {post.creator.email}
          </p>
        </div>
      </div>
      <div
        className="copy_btn"
        onClick={() => {
          handleCopy();
        }}
      >
        <Image
          src={
            copied === true
              ? "/assets/icons/tick.svg"
              : "/assets/icons/copy.svg"
          }
          alt="Tick"
          width={12}
          height={12}
        />
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
      <p
        className="font-inter cursor-pointer text-sm blue_gradient"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        {post.tag}{" "}
      </p>
      {session?.user.id === post.creator._id && pathName == "/profile" && (
        <div className="flex mt-5 flex-center gap-4 border-gray-100 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>

          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
