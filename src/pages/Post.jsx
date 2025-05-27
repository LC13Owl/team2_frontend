import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import { PostDispatchContext, PostStateContext } from "../App";

const Post = () => {
  const data = useContext(PostStateContext);
  const { onUpdateLike } = useContext(PostDispatchContext);
  const { id } = useParams();
  const nav = useNavigate();

  const [curPostItem, setCurPostItem] = useState();

  useEffect(() => {
    const targetPost = data.find((item) => String(item.id) === String(id));

    if (!targetPost) {
      window.alert("존재하지 않는 게시글입니다.");
      nav("/", { replace: true });
    } else {
      setCurPostItem(targetPost);
    }
  }, [data, id, nav]);

  if (!curPostItem) return <div>데이터 로딩중...!</div>;

  return (
    <div>
      <Header
        title={new Date(curPostItem.createdDate).toLocaleDateString()}
        leftchild={<Button onClick={() => nav(-1)} text={"<"} />}
        rightchild={
          <Button
            className="edit-button"
            onClick={() => nav(`/edit/${id}`)}
            text={"수정"}
          />
        }
      />
      <Viewer
        title={curPostItem.title}
        content={curPostItem.content}
        likeCount={curPostItem.likeCount || 0}
        onLike={() => onUpdateLike(curPostItem.id)}
      />
    </div>
  );
};

export default Post;
