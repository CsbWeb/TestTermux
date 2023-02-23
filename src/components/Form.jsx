import React, { useState } from "react";

function Form(props) {
  const [values, setValues] = useState({ title: "", body: "" });
  function sendValues() {
    const newConstruct = { ...values, id: Date.now() };
    if (newConstruct.title === "") {
      newConstruct.title = "Заголовок";
    }
    if (newConstruct.body === "") {
      newConstruct.body = "Описание";
    }
    props.send(newConstruct);
    setValues({ title: "", body: "" });
  }

  return (
    <div>
      <form className="flexCont">
        <div>
          <input
            type="text"
            className="inputText"
            placeholder="Заголовок"
            value={values.title}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
          />
          <input
            type="text"
            className="inputText"
            placeholder="Описание"
            value={values.body}
            onChange={(e) => setValues({ ...values, body: e.target.value })}
          />
        </div>
        <div>
          <input
            type="button"
            value="Добавить"
            className="inputBtn"
            onClick={sendValues}
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
