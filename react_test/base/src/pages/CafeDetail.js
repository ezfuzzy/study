import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";

import myCss from "./css/cafe_detail.module.css";
import binder from "classnames/bind";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import ConfirmModal from "../components/ConfirmModal";
const cx = binder.bind(myCss);

function CafeDetail(props) {
  const { num } = useParams();
  const navigate = useNavigate();
  const userName = useSelector((state) => state.userName);
  const [params, setParams] = useSearchParams();
  const [state, setState] = useState({});
  const [confirmShow, setConfirmShow] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/cafes/${num}?${new URLSearchParams(params).toString()}`)
      .then((res) => {
        console.log(res.data);
        setState(res.data.dto);
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

  return (
    <div>
      <ConfirmModal show={confirmShow} message="삭제하시겠습니까?" yes={handleYes} no={handleNo} />
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
    </div>
  );
}

export default CafeDetail;
