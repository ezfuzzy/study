import React from "react";
import { Link } from "react-router-dom";

function CafeDetail(props) {

  
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
          <li className="breadcrumb-item" active>
            Detail
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default CafeDetail;
