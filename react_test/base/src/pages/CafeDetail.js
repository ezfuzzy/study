import axios from "axios";
import React, { createRef, useEffect, useState } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";

import myCss from "./css/cafe_detail.module.css";
import binder from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import ConfirmModal from "../components/ConfirmModal";
const cx = binder.bind(myCss);

let commentIndex = 0;

function CafeDetail(props) {
  const { num } = useParams();
  const navigate = useNavigate();
  const userName = useSelector((state) => state.userName);
  const [params, setParams] = useSearchParams();
  const dispatch = useDispatch();

  const [state, setState] = useState({});
  const [confirmShow, setConfirmShow] = useState(false);
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/cafes/${num}?${new URLSearchParams(params).toString()}`)
      .then((res) => {
        console.log(res.data);
        setState(res.data.dto);
        const list = res.data.commentList.map((item) => {
          item.ref = createRef();
          return item;
        });
        setCommentList(list);
      })
      .catch((error) => console.log(error));
  }, [num]);

  const handelUpdate = () => {
    navigate(`/cafe/${num}/update`);
  };

  const handelDelete = () => {
    setConfirmShow(true);
  };

  const handleYes = () => {
    axios
      .delete(`/api/cafes/${num}`)
      .then((res) => {
        console.log(res.data);
        navigate("/cafe");
      })
      .catch((error) => console.log(error));
  };

  const handleNo = () => {
    setConfirmShow(false);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    if (!userName) {
      const payload = { show: true, message: "로그인한 사용자만 댓글을 작성할 수 있습니다." };
      dispatch({ type: "LOGIN_MODAL", payload });
      return;
    }

    const action = e.target.action;
    const method = e.target.method;
    const formData = new FormData(e.target);

    //const json = Object.fromEntries(formData.entries)

    axios[method](action, formData)
      .then((res) => {
        const newComment = res.data;
        newComment.ref = createRef();

        commentList.splice(commentIndex, 0, newComment);
        setCommentList([...commentList]);
        e.target.content.value = "";
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/cafe">Cafe</Link>
          </li>
          <li className="breadcrumb-item active">Detail</li>
        </ol>
        {state.prevNum !== 0 ? (
          <Link to={`/cafe/${state.prevNum}?${new URLSearchParams(params).toString()}`}>이전 글</Link>
        ) : (
          ""
        )}
        {state.nextNum !== 0 ? (
          <Link to={`/cafe/${state.nextNum}?${new URLSearchParams(params).toString()}`}>다음 글</Link>
        ) : (
          ""
        )}
        <h1>{state.title}</h1>
        {state.writer === userName ? (
          <>
            <Button onClick={handelUpdate} variant="success">
              수정
            </Button>
            <Button onClick={handelDelete} variant="danger">
              삭제
            </Button>
          </>
        ) : (
          ""
        )}
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <td>{state.num}</td>
            </tr>
            <tr>
              <th>작성자</th>
              <td>{state.writer}</td>
            </tr>
            <tr>
              <th>조회수</th>
              <td>{state.viewCount}</td>
            </tr>
          </thead>
        </table>
        <div className={cx("content")} dangerouslySetInnerHTML={{ __html: state.content }}></div>
      </nav>
      <ConfirmModal show={confirmShow} message="삭제하시겠습니까?" yes={handleYes} no={handleNo} />
      <h3>댓글</h3>
      <form
        action={`/api/cafes/${num}/comments`}
        method="post"
        className={cx("comment-form")}
        onSubmit={handleCommentSubmit}>
        <input type="hidden" name="ref_group" defaultValue={state.num} />
        <input type="hidden" name="target_id" defaultValue={state.writer} />
        <textarea name="content"></textarea>
        <Button variant="success" type="submit">
          등록
        </Button>
      </form>
      <div className={cx("comments")}>
        <ul>
          {commentList.map((item, index) => (
            <li key={item.num} ref={item.ref} className={cx({ indent: item.num !== item.comment_group })}>
              <svg
                style={{
                  display: item.num !== item.comment_group ? "inline" : "none",
                }}
                className={cx("reply-icon")}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"
                />
              </svg>
              <dl>
                <dt>
                  {item.profile === null ? (
                    <svg
                      className={cx("profile-image")}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16">
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path
                        fillRule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      />
                    </svg>
                  ) : (
                    <img className={cx("profile-image")} src={`/upload/images/${item.profile}`} alt="프로필 이미지" />
                  )}
                  <span>{item.writer}</span>
                  {item.num !== item.comment_group ? <i>@{item.target_id}</i> : null}
                  <small>{item.regdate}</small>
                  <Button
                    variant="outline-success"
                    size="sm"
                    className="answer-btn"
                    onClick={(e) => {
                      if (e.target.innerText === "답글") {
                        e.target.innerText = "취소";
                        item.ref.current.querySelector("." + cx("re-insert-form")).style.display = "flex";
                      } else {
                        e.target.innerText = "답글";
                        item.ref.current.querySelector("." + cx("re-insert-form")).style.display = "none";
                      }
                    }}>
                    답글
                  </Button>
                </dt>
                <dd>
                  <pre>{item.content}</pre>
                </dd>
              </dl>
              <form
                action={`/api/cafes/${num}/comments`}
                className={cx("re-insert-form")}
                onSubmit={handleCommentSubmit}
                method="post">
                <input type="hidden" name="ref_group" defaultValue={state.num} />
                <input type="hidden" name="target_id" defaultValue={item.writer} />
                <input type="hidden" name="comment_group" defaultValue={item.comment_group} />
                <textarea name="content"></textarea>
                <Button
                  variant="success"
                  type="submit"
                  onClick={() => {
                    item.ref.current.querySelector("." + cx("re-insert-form")).style.display = "none";
                    item.ref.current.querySelector(".answer-btn").innerText = "답글";
                    commentIndex = index + 1;
                  }}>
                  등록
                </Button>
              </form>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CafeDetail;
