import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Course(props) {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/posts")
      .then((res) => {
        console.log(res.data);
        setPostList(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1 className="m-5">Course</h1>
      <Link
        to="/post/course/new"
        className="text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">
        new Course
      </Link>
      <div className="overflow-x-auto my-6">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">번호</th>
              <th className="py-3 px-6 text-left">제목</th>
              <th className="py-3 px-6 text-left">작성자</th>
              <th className="py-3 px-6 text-left">조회수</th>
              <th className="py-3 px-6 text-left">등록일</th>
              <th className="py-3 px-6 text-left">기타 정보</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {postList.map((item) => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{item.id}</td>
                <td className="py-3 px-6 text-left">
                  <Link to={`/post/${item.id}`} className="text-blue-600 hover:underline">
                    {item.title}
                  </Link>
                </td>
                <td className="py-3 px-6 text-left">{item.writer || "Unknown"}</td>
                <td className="py-3 px-6 text-left">{item.viewCount || 0}</td>
                <td className="py-3 px-6 text-left">{new Date(item.createdAt).toLocaleString()}</td>
                <td className="py-3 px-6 text-left">
                  <div>
                    <p>
                      <strong>User ID:</strong> {item.userId || "N/A"}
                    </p>
                    <p>
                      <strong>Type:</strong> {item.type || "N/A"}
                    </p>
                    <p>
                      <strong>Country:</strong> {item.country || "N/A"}
                    </p>
                    <p>
                      <strong>City:</strong> {item.city || "N/A"}
                    </p>
                    <p>
                      <strong>Tags:</strong> {item.tags || "N/A"}
                    </p>
                    <p>
                      <strong>Like Count:</strong> {item.likeCount || 0}
                    </p>
                    <p>
                      <strong>Rating:</strong> {item.rating || "N/A"}
                    </p>
                    <p>
                      <strong>Status:</strong> {item.status || "N/A"}
                    </p>
                    <p>
                      <strong>Updated At:</strong>{" "}
                      {item.updatedAt ? new Date(item.updatedAt).toLocaleDateString() : "N/A"}
                    </p>
                    <p>
                      <strong>Deleted At:</strong>{" "}
                      {item.deletedAt ? new Date(item.deletedAt).toLocaleDateString() : "N/A"}
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Course;
