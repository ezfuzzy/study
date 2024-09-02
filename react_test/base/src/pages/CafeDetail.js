import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";


import myCss from './css/cafe_detail.module.css'
import binder from 'classnames/bind';
const cx = binder.bind(myCss)

function CafeDetail(props) {
  const { num } = useParams();
  const [params, setParams] = useSearchParams();

  const [state, setState] = useState({});

  useEffect(() => {
    const query = new URLSearchParams(params).toString();

    axios
      .get(`/api/cafes/${num}?${query}`)
      .then((res) => {
        console.log(res.data);
        setState(res.data.dto);
      })
      .catch((error) => console.log(error));
  }, []);

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
        <h1>{state.title}</h1>
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
