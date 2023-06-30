import React from "react";
import { Link } from "react-router-dom";
import Like from "./Like";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

const PostItem = ({ post }) => {
  // const timeAgo = new TimeAgo('en-US')
  TimeAgo.addLocale(en)
  // TimeAgo.addDefaultLocale(en)
  const timeAgo = new TimeAgo('en-US')
  return (
    <div className=" bg-gradient-to-r from-[#351c49] to-[#432b4d] m-8  ">
      <div>
        <p className="text-[#ed7474] font-semibold">{post.user}</p>
        <p>
        {timeAgo.format(Date.parse(post.datecreated),'round')}
        </p>
      <Link to={`/post/${post.id}/`}>
        <div className="text-white">{post.title}</div>
      </Link>
      </div>
      <img className="w-full h-1/3 " src={post.image} alt="post not loaded" />
      <p>{post.desc.slice(0, 50)}</p>
      <Like post={post} />
    </div>
  );
};

export default PostItem;
