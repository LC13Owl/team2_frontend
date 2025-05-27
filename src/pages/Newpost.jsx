import { useContext, useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { PostDispatchContext } from "../App";

const Newpost = () => {
  const { onCreate } = useContext(PostDispatchContext);
  const nav = useNavigate();

  const [input, setInput] = useState({
    createdDate: new Date(),
    title: "",
    content: "",
  });

  const onSubmit = () => {
    if (!input.title.trim() || !input.content.trim()) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    onCreate(input.title, input.content);
    nav(`/`, { replace: true });
  };

  return (
    <div>
      <Header
        title={"글 쓰기"}
        leftchild={<Button onClick={() => nav(-1)} text={"<"} />}
        rightchild={
          <Button
            text={"완료"}
            className="complete-button"
            onClick={onSubmit}
          />
        }
      />
      <Editor input={input} setInput={setInput} />
    </div>
  );
};

export default Newpost;
