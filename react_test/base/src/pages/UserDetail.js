import axios from "axios"
import React, { useEffect, useState } from "react"

function UserDetail(props) {
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    axios
      .get("/api/user")
      .then((res) => {
        console.log(res.data.userInfo);
        
        setUserInfo(res.data.userInfo)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <h1>{userInfo.userName}</h1>
      <table className="table table-bordered">
        <colgroup>
          <col className="col-3"/>
          <col className="col-9"/>
        </colgroup>
        
      </table>
    </>
  )
}

export default UserDetail
