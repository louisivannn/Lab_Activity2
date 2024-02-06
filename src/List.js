import React from "react";

function List(data) {
  return (
    <div className="container">
      <h3 className="text-left font">{data.contentsObj.title}</h3>
      <p className="text-left">{data.contentsObj.info1}</p>
      <p className="text-left">{data.contentsObj.info2}</p>
    </div>
  );
}

export default List;
