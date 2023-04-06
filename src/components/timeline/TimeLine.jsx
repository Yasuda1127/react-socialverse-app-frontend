import React from "react";
import "./TimeLine.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../dummyData";

// type PostType = {
//   id: number;
//   desc: string;
//   photo: string;
//   date: string;
//   userId: number;
//   like: number;
//   comment: number;
// };

export default function TimeLine() {
  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {Posts.map((post) => (
          <Post post={post} key={post.key} />
        ))}
      </div>
    </div>
  );
}
