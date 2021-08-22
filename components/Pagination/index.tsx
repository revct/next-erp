import React from "react";

interface Props {}

const Pagination = (props: Props) => {
  return (
    <div className="btn-group justify-center">
      <button className="btn">«</button>
      <button className="btn">1</button>
      <button className="btn btn-active">2</button>
      <button className="btn">3</button>
      <button className="btn">4</button>
      <button className="btn">»</button>
    </div>
  );
};

export default Pagination;
