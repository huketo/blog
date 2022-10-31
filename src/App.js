/* eslint-disable */

import { useState } from "react";
import "./App.css";

function App() {
  // Destructuring 문법
  const [postTitle, setPostTitle] = useState([
    "Post Title 3",
    "Post Title 1",
    "Post Title 2",
  ]);

  const [postTimestamp] = useState(["2022.10.31", "2022.10.31", "2022.10.31"]);

  const [likes, setLikes] = useState(0);

  const [modal, setModal] = useState(false);

  function pushPostTitle() {
    // 원본보다 카피를 변경하는 게 좋음 shallow copy
    const _postTitle = [...postTitle];
    _postTitle[0] = "몰?루";
    setPostTitle(_postTitle);
  }

  function sortPostTitle() {
    const _postTitle = [...postTitle];
    _postTitle.sort();
    setPostTitle(_postTitle);
  }

  function pushLikes() {
    setLikes(likes++);
  }

  return (
    // JSX 임
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "white" }}>Huke Blog</h4>
      </div>
      <div className="post-list">
        <div className="post">
          <button onClick={pushPostTitle}>몰?루</button>
          <button onClick={sortPostTitle}>정렬</button>
          <h4>
            {postTitle[0]} <span onClick={pushLikes}>👍 {likes}</span>
          </h4>
          <p>{postTimestamp[0]}</p>
        </div>
        <div className="post">
          <h4>{postTitle[1]}</h4>
          <p>{postTimestamp[1]}</p>
        </div>
        <div className="post">
          <h4
            onClick={() => {
              setModal(!modal);
            }}
          >
            {postTitle[2]}
          </h4>
          <p>{postTimestamp[2]}</p>
        </div>
      </div>
      {modal ? <Modal /> : null}
    </div>
  );
}

const Modal = () => {
  return (
    <div className="modal">
      <h4>Title</h4>
      <p>Date</p>
      <p>Description</p>
    </div>
  );
};

export default App;
