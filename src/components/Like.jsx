import emptyHeart from "../assets/empty_heart.png";
import filledHeart from "../assets/filled_heart.png";

const Like = ({ count = 0, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src={count > 0 ? filledHeart : emptyHeart}
        alt="like"
        style={{ width: "30px", height: "30px", marginRight: "8px" }}
      />
      <span>{count}</span>
    </button>
  );
};

export default Like;
