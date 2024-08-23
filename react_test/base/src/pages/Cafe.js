import { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cafe(props) {
  useEffect(() => {
    console.log("cafe page is loading");
  }, []);

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
        <tbody></tbody>
      </Table>
    </>
  );
}

export default Cafe;
