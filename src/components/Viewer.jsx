import "./Viewer.css";
import Like from "./Like";

const Viewer = ({ title, content, likeCount, onLike }) => {
  return (
    <div className="Viewer">
      <section className="title_section">
        <div className="title_wrapper">
          <p>{title}</p>
        </div>
      </section>
      <hr></hr>
      <section className="content_section">
        <div className="content_wrapper">
          <p>{content}</p>
        </div>
      </section>
      <div className="like_section">
        <Like count={likeCount} onClick={onLike} />
      </div>
    </div>
  );
};

export default Viewer;
