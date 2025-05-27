import "./PostList.css";
import Button from "./Button";
import PostItem from "./PostItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PostList = ({ data }) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest");
  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const sortedData =
    sortType === "oldest"
      ? [...filteredData].sort((a, b) => a.createdDate - b.createdDate)
      : [...filteredData].sort((a, b) => b.createdDate - a.createdDate);

  return (
    <div className="PostList">
      <div className="menu_bar">
        <Button onClick={() => nav(`/newpost`)} text={"새 게시글 작성하기"} />
      </div>
      <div className="menu_filter">
        <div className="left">
          <Button
            text={sortType === "latest" ? "최신순" : "오래된순"}
            onClick={() =>
              setSortType((prev) => (prev === "latest" ? "oldest" : "latest"))
            }
          />
        </div>
        <div className="right">
          <input
            type="text"
            placeholder="제목 검색"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="list_wrapper">
        {sortedData.length === 0 ? (
          <div className="no_post">아직 게시글이 없습니다.</div>
        ) : (
          sortedData.map((item) => <PostItem key={item.id} {...item} />)
        )}
      </div>
    </div>
  );
};

export default PostList;
