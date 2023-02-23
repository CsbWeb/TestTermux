import React, { useState } from "react";
import classes from "./Modal.module.css";

function Modal(props) {
  let [isOpen, setBool] = useState(false);
  let [txtBtn, setTxtBtn] = useState("Добавить обьект");
  function open() {
    if (!isOpen) {
      setBool((isOpen = true));
      setTxtBtn((txtBtn = "Закрыть"));
      document.body.style.overflow = "hidden";
    } else {
      setBool((isOpen = false));
      setTxtBtn((txtBtn = "Добавить обьект"));
      document.body.style.overflow = "";
    }
  }
  return (
    <div>
      <button
        style={{
          display: "block",
          margin: "15px auto",
          cursor: "pointer"
        }}
        onClick={open}
      >
        {txtBtn}
      </button>
      {isOpen ? (
        <div className={classes.modalBlack}>
          <div className={classes.modalPos}>
            <div className={classes.modalContent}>{props.func}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default Modal;
