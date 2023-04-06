import React from "react";
import "./TimeLine.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../dummyData";

// type PostData = {
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
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
