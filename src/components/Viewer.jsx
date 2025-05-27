import "./Viewer.css";

const Viewer = ({ title, content }) => {
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
      <section className="comment_section"></section>
    </div>
  );
};

export default Viewer;
