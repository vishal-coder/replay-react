import { useState } from "react";

function Counter() {
  const [like, setLike] = useState(10);
  const [dislike, setDislike] = useState(10);

  return (
    <div>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        Like
      </button>
      <p>Count of like is {like} </p>

      <button
        onClick={() => {
          setDislike(dislike + 1);
        }}
      >
        DisLike
      </button>
      <p>Count of disLike is {dislike} </p>
    </div>
  );
}
