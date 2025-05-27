import { useReducer, useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Newpost from "./pages/Newpost";
import Edit from "./pages/Edit";
import Post from "./pages/Post";
import Notfound from "./pages/Notfound";

// 1. "/" : 모든 게시글을 보여주는 게시글 리스트 Home 페이지
// 2. "/newpost" : 새로운 게시글을 작성하는 create 페이지
// 3. "/post" : 게시글을 상세히 조회하는 read 페이지

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    title: "title1",
    content: "1번 게시글",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    title: "title2",
    content: "2번 게시글",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

export const PostStateContext = createContext();
export const PostDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const [nextId, setNextId] = useState(3);

  // 새로운 게시글 추가
  const onCreate = (title, content) => {
    const createdDate = Date.now();
    const newId = nextId;

    dispatch({
      type: "CREATE",
      data: {
        id: newId,
        createdDate,
        title,
        content,
      },
    });

    setNextId(nextId + 1);
  };

  // 기존 게시글 수정
  const onUpdate = (createdDate, id, newTitle, newContent) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        title: newTitle,
        content: newContent,
      },
    });
  };

  // 기존 게시글 삭제
  const onDelete = (id) => {
    console.log("onDelete 실행됨 id: ", id);
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <>
      <PostStateContext.Provider value={data}>
        <PostDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newpost" element={<Newpost />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </PostDispatchContext.Provider>
      </PostStateContext.Provider>
    </>
  );
}

export default App;
