import { useState, useContext } from "react";
import { PostStateContext } from "../App";

import Header from "../components/Header";
import Button from "../components/Button";
import PostList from "../components/PostList";

const Home = () => {
  const data = useContext(PostStateContext);

  return (
    <div>
      <Header
        title={"못난이호랑이처럼 게시판"}
        leftchild={<Button text={"<"} />}
        rightchild={<Button text={">"} />}
      />
      <PostList data={data} />
    </div>
  );
};

export default Home;
