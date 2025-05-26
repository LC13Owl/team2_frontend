import "./PostList.css";
import Button from "./Button";
import PostItem from "./PostItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PostList = ({ data }) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest");

  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    });
  };

  const sortedData = getSortedData();

  return (
    <div className="PostList">
      <div className="menu_bar">
        <Button onClick={() => nav("/newpost")} text={"새 게시글 작성하기"} />
      </div>
      <div className="list_wrapper">
        {sortedData.map((item) => (
          <PostItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
