import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";
import ConfirmModal from "../components/ConfirmModal";

function GalleryDetail(props) {
  const { num } = useParams();
  const navigate = useNavigate();

  const userName = useSelector((state) => state.userName);

  const [info, setInfo] = useState(null);
  const [confirmShow, setConfirmShow] = useState(false);

  useEffect(() => {
    axios
      .get(`/gallery/${num}`)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [num]);

  const handleDelete = () => {
    setConfirmShow(true);
  };

  const handleYes = () => {
    // 삭제 내용
    axios
      .delete(`/gallery/${num}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));

    setConfirmShow(false);
    navigate("/gallery");
  };

  const handleNo = () => {
    setConfirmShow(false);
  };

  return (
    <>
      <h1>Gallery Detail page</h1>
      {info && (
        <>
          <ConfirmModal show={confirmShow} message="삭제하시겠습니까?" yes={handleYes} no={handleNo} />
          <Pagination>
            <Pagination.Item as={Link} to={`/gallery/${info.prevNum}`} disabled={info.prevNum === 0}>
              &larr; Prev
            </Pagination.Item>
            <Pagination.Item as={Link} to={`/gallery/${info.nextNum}`} disabled={info.nextNum === 0}>
              Next &rarr;
            </Pagination.Item>
            {userName === info.writer && (
              <Button onClick={handleDelete} className="mx-5" variant="danger">
                Delete
              </Button>
            )}
          </Pagination>
          <Card>
            <Card.Body>
              <Card.Text>num : {info.num}</Card.Text>
              <Card.Text>caption : {!info.caption && "no title"}</Card.Text>
              <Card.Text>writer : {info.writer}</Card.Text>
              <Card.Text>reg date : {info.regdate}</Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={`/upload/images/${info.saveFileName}`} />
          </Card>
        </>
      )}
    </>
  );
}

export default GalleryDetail;
