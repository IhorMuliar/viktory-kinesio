import {useRef, useState} from "react";

import "./Accordion.css";

const AccordionItem = ({title, description, isOpen, onClick}) => {
  const contentHeight = useRef();

  return (
    <div className={`item ${isOpen ? "open" : ""}`}>
      <button className="question" onClick={onClick}>
        <h3 className="content">{title}</h3>
        <span className="icon" />
      </button>
      <div
        ref={contentHeight}
        className="answer"
        style={
          isOpen
            ? {height: contentHeight.current.scrollHeight}
            : {height: "0px"}
        }
      >
        <p className="content" dangerouslySetInnerHTML={{__html: description}} />
      </div>
    </div>
  )
}

const Accordion = ({items}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          description={item.description}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  )
};

export default Accordion;
