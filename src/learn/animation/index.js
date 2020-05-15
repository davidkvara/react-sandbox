import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./css/some.css";

export default () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleRemove = id => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  };

  const handleAdd = e => {
    e.preventDefault();
    if (inputValue.trim().length < 1) return;

    const newItem = {
      name: inputValue,
      id: Date.now()
    };
    setItems(items.concat(newItem));
    setInputValue("");
  };

  return (
    <div className="wrapper">
      <h2>List of things</h2>
      <Input
        onSubmit={handleAdd}
        value={inputValue}
        placeholder="add item"
        onChange={e => setInputValue(e.target.value)}
      />
      <ListItems items={items} handleRemove={handleRemove} />
    </div>
  );
};

const Input = ({ onSubmit, ...rest }) => (
  <form onSubmit={onSubmit}>
    <input {...rest} className="input" />
  </form>
);

const ListItems = props => {
  return (
    <TransitionGroup component="ul" className="list">
      {props.items.map(item => (
        <CSSTransition key={item.id} timeout={300} classNames="item">
          <li className="item" onClick={() => props.handleRemove(item.id)}>
            <button className="my-btn">{item.name}</button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
