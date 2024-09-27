import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const profileStyle = {
  width: "200px",
  height: "200px",
  border: "solid 1px #cecece",
  borderRadius: "50%",
}

function UserDetail(props) {
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    axios
      .get("/api/user")
      .then((res) => {
        setUserInfo(res.data)
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <h1>회원 가입 정보 입니다</h1>
      <table className="table table-bordered">
        <colgroup>
          <col className="col-3" />
          <col className="col-9" />
        </colgroup>
        <thead className="table-dark">
          <tr>
            <th>항목</th>
            <th>내용</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>아이디(username)</td>
            <td>{userInfo.userName}</td>
          </tr>
          <tr>
            <td>ROLE</td>
            <td>{userInfo.role}</td>
          </tr>
          <tr>
            <td>이메일 주소</td>
            <td>{userInfo.email}</td>
          </tr>
          <tr>
            <td>가입일</td>
            <td>{userInfo.regdate}</td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <Link to="/user/password/edit">수정하기</Link>
            </td>
          </tr>
          <tr>
            <td style={{ verticalAlign: "middle" }}>프로필 이미지</td>
            <td>
              {userInfo.profile === undefined || userInfo.profile === null ? (
                <svg
                  style={profileStyle}
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
                <img style={profileStyle} src={`/upload/images/${userInfo.profile}`} alt="프로필 이미지" />
              )}
            </td>
          </tr>
        </tbody>
      </table>
      <Link to="/user/edit">개인정보 수정</Link>
    </>
  )
}

export default UserDetail
