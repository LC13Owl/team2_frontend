import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { PostDispatchContext, PostStateContext } from "../App";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(PostDispatchContext);
  const data = useContext(PostStateContext);

  const [input, setInput] = useState({
    createdDate: new Date(),
    title: "",
    content: "",
  });

  const [curPostItem, setCurPostItem] = useState(null);

  useEffect(() => {
    const currentPostItem = data.find(
      (item) => String(item.id) === String(params.id)
    );
    if (!currentPostItem) {
      window.alert("삭제되었습니다.");
      nav("/", { replace: true });
    } else {
      setCurPostItem(currentPostItem);
      setInput({
        ...currentPostItem,
        createdDate: new Date(Number(currentPostItem.createdDate)),
      });
    }
  }, [params.id, data]);

  const onClickDelete = () => {
    if (window.confirm("게시글을 정말 삭제할까요? 다시 복구되지 않습니다!")) {
      onDelete(Number(params.id));
      nav(`/`, { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(
        input.createdDate.getTime(),
        Number(params.id),
        input.title,
        input.content
      );
      nav(`/post/${params.id}`, { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"글 수정하기"}
        leftchild={<Button text={"<"} onClick={() => nav(-1)} />}
        rightchild={
          <Button
            text={"삭제"}
            className="delete-button"
            onClick={onClickDelete}
          />
        }
      />
      {curPostItem && (
        <>
          <Editor input={input} setInput={setInput} initData={curPostItem} />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "10px",
            }}
          >
            <Button
              className="edit-button"
              text="수정"
              onClick={() => onSubmit(input)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Edit;
