import "./Editor.css";

const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};

const Editor = ({ input, setInput }) => {
  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h3>{getStringedDate(input.createdDate)}</h3>
      </section>
      <section className="title_section">
        <textarea
          name="title"
          value={input.title}
          onChange={onChangeInput}
          placeholder="제목을 입력해주세요."
        />
      </section>
      <hr></hr>
      <section className="content_section">
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="내용을 입력해주세요."
        />
      </section>
    </div>
  );
};

export default Editor;
