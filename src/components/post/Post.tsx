import React, { useEffect, useState } from "react";
import "./Post.css";
import { MoreVert } from "@mui/icons-material";
import axios from "axios";
// import { Users } from "../../dummyData";

type PostData = {
  post: {
    id: number;
    desc?: string;
    photo: string;
    date: string;
    userId: number;
    like: number;
    comment: number;
  };
};

type UserData = {
  
    id: number;
    username: string;
    email: string;
    password: string;
    profilePicture: string;
    coverPicture: string;
    followers: string[];
    followings: string[];
    isAdmin: boolean;
    desc: string;
    city: string;
  
};

export default function Post({ post }: PostData) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  // const user = Users.filter((user) => user.id === 1)
  // console.log(user[0].username)
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false); // falseはまだ押されていない状態
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users/${post.userId}`); // 投稿した人
      console.log(response);
      setUser(response.data);
    };
    fetchUser();
  }, []);

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1); // trueの場合は押されているから-1する falseで押してない場合は+1する
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={
                // PUBLIC_FOLDER +
                // Users.filter((user) => user.id === post.id)[0].profilePicture
                // user.profilePicture
                user ? user.profilePicture : "default-profile-picture.jpg"
              }
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">
              {
                /* {Users.filter((user) => user.id === post.id)[0].username} */
                // 
                user ? user.username : "Unknown User"
              }
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={PUBLIC_FOLDER + post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={PUBLIC_FOLDER + "/heart.png"}
              alt=""
              className="likeIcon"
              onClick={() => handleLike()}
            />
            <span className="postLikeCounter">
              {like}人がいいねを押しました
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}:コメント</span>
          </div>
        </div>
      </div>
    </div>
  );
}
