import {
  Bookmark,
  Home,
  MessageRounded,
  Notifications,
  Person,
  Search,
  Settings,
} from "@mui/icons-material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Home className="sidebaricon" />
            <span className="sidebarListItemText">ホーム</span>
          </li>

          <li className="sidebarListItem">
            <Search className="sidebaricon" />
            <span className="sidebarListItemText">検索</span>
          </li>

          <li className="sidebarListItem">
            <Notifications className="sidebaricon" />
            <span className="sidebarListItemText">通知</span>
          </li>

          <li className="sidebarListItem">
            <MessageRounded className="sidebaricon" />
            <span className="sidebarListItemText">メッセージ</span>
          </li>

          <li className="sidebarListItem">
            <Bookmark className="sidebaricon" />
            <span className="sidebarListItemText">ブックマーク</span>
          </li>

          <li className="sidebarListItem">
            <Person className="sidebaricon" />
            <span className="sidebarListItemText">プロフィール</span>
          </li>

          <li className="sidebarListItem">
            <Settings className="sidebaricon" />
            <span className="sidebarListItemText">設定</span>
          </li>
        </ul>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Yasuda</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/3.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Fujiwara</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/4.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Masukawa</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
