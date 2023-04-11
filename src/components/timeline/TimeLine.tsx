import React, { useEffect, useState } from "react";
import "./TimeLine.css";
import Share from "../share/Share";
import Post from "../post/Post";
import axios, { AxiosResponse } from "axios";
// import { Posts } from "../../dummyData";

type PostData = {
  id: number;
  desc: string;
  photo: string;
  date: string;
  userId: number;
  like: number;
  comment: number;
};

export default function TimeLine() {
  const [posts, setPosts] = useState<PostData[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response: AxiosResponse<PostData[]> = await axios.get(
        "/posts/timeline/6423a3c906b3bd8e515d67ab"
      );
      console.log(response);
      setPosts(response.data)
    };
    fetchPosts();
  }, []); // 一度だけタイムラインを読み込むための、useEffect。第二引数を空にすると、中に書いたものが一度だけ読み込まれる。

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => ( // postsは自分の投稿と自分がフォローしているユーザーの投稿内容全てを含んだもの。
          <Post post={post} key={post.id} /> 
        ))}
      </div>
    </div>
  );
}
