import React, { useState } from "react";

function ListItems(props) {
  return (
    <div className="ListItem" style={{ textAlign: "center" }}>
      <h3>
        {props.num}. {props.item.title}
      </h3>
      <h5>{props.item.body}</h5>
      <button onClick={() => props.postRem(props.item)}>X</button>
      <hr />
    </div>
  );
}

export default ListItems;
