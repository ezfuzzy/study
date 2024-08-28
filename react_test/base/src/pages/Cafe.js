import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Pagination, Table } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";

function range(start, end) {
  const nums = [];
  for (let i = start; i <= end; i++) {
    nums.push(i);
  }
  return nums;
}

function Cafe(props) {
  const [pageInfo, setPageInfo] = useState({
    list: [],
  });
  const [pageArray, setPageArray] = useState([]);
  const [searchState, setSearchState] = useState({});
  const [params, setParams] = useSearchParams({ pageNum: 1 });

  const refresh = (pageNum) => {
    const query = new URLSearchParams(searchState).toString();
    console.log(`query : ${query}`);

    axios
      .get(`/api/cafes?pageNum=${pageNum}&${query}`)
      .then((res) => {
        console.log(res.data);
        //API 서버로 부터 받아온 데이터를 state 로 관리 하기
        setPageInfo(res.data);
        //startPageNum, endPageNum 을 이용해서 pageArray 만들기 (state변경)
        setPageArray(range(res.data.startPageNum, res.data.endPageNum));
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const pageNum = params.get("pageNum");
    refresh(pageNum);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <>
      <h1>카페</h1>
      <Button className="my-3" variant="success" as={Link} to="/cafe/new">
        새글 작성
      </Button>
      <Table striped bordered size="sm">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>조회수</th>
            <th>등록일</th>
          </tr>
        </thead>
        <tbody>
          {pageInfo.list.map((item) => (
            <tr key={item.num}>
              <td>{item.num}</td>
              <td>{item.title}</td>
              <td>{item.writer}</td>
              <td>{item.viewCount}</td>
              <td>{item.regdate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination className="mt-3">
        <Pagination.Item
          onClick={() => {
            //setParams() 함수를 이용해서 search parameter 값을 변경
            setParams({ pageNum: pageInfo.startPageNum - 1 });
          }}
          disabled={pageInfo.startPageNum === 1}>
          &laquo;
        </Pagination.Item>
        {pageArray.map((num) => (
          <Pagination.Item
            onClick={() => {
              //setParams() 함수를 이용해서 search parameter 값을 변경한다
              setParams({ pageNum: num });
            }}
            key={num}
            active={num === pageInfo.pageNum}>
            {num}
          </Pagination.Item>
        ))}
        <Pagination.Item
          onClick={() => {
            setParams({ pageNum: pageInfo.endPageNum + 1 });
          }}
          disabled={pageInfo.endPageNum === pageInfo.totalPageCount}>
          &raquo;
        </Pagination.Item>
      </Pagination>
    </>
  );
}

export default Cafe;
