import React from "react";
import ListItems from "./ListItems";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function List(props) {
  return (
    <div>
      {props.list.length > 0 && (
        <TransitionGroup>
          {props.list.map((item, index) => (
            <CSSTransition key={item.id} classNames="item" timeout={500} appear>
              <ListItems item={item} num={index + 1} postRem={props.postRem} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}
    </div>
  );
}

export default List;
