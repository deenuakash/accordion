import { useState } from "react";
import { items as qna } from "../utils/items";

const Accordion = () => {
  const [items, setItems] = useState(qna);
  const [tapped, setTapped] = useState(-1);

  const handleCheckbox = (e, i) => {
    const newItems = [...items];
    newItems[i].checked = e.target.checked;
    setItems(newItems);
  };

  const handleIconTap = (i) => {
    setTapped((prev) => (prev !== i ? i : -1));
  };

  const computeDisabled = () => {
    return !items.every((el) => el.checked);
  };

  return (
    <>
      {items.map((el, i) => (
        <div className="accordion" key={i}>
          <div className="question-container">
            <input
              type="checkbox"
              className="checkbox"
              value={el.checked}
              onClick={(e) => handleCheckbox(e, i)}
            ></input>
            <p className="question">{el.question}</p>
            <span className="icon" onClick={() => handleIconTap(i)}>
              +
            </span>
          </div>
          <p
            className="answer"
            style={{ display: i === tapped ? "block" : "none" }}
          >
            {el.answer}
          </p>
        </div>
      ))}
      <button disabled={computeDisabled()}>Submit</button>
    </>
  );
};

export default Accordion;
