import tiger from "./../assets/tiger_img.png";
import pinIcon from "./../assets/pin_button_before.png";
import "./PostItem.css";
import { useNavigate } from "react-router-dom";

const PostItem = ({ id, title, content }) => {
  const nav = useNavigate();
  return (
    <div className="PostItem">
      <div onClick={() => nav("/post/${id}")} className="img_section">
        <img src={tiger} alt="호랑이" />
      </div>
      <div onClick={() => nav("/post/${id}")} className="info_section">
        <div className="title">{title}</div>
        <div className="content">{content}</div>
      </div>
      <div className="pin_section">
        <button className="pin_button">
          <img src={pinIcon} alt="핀 아이콘" />
        </button>
      </div>
    </div>
  );
};

export default PostItem;
