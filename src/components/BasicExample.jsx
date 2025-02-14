import React, { useState } from "react";

const CustomAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function to open/close accordion
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={styles.accordionContainer}>
      {accordionData.map((item, index) => (
        <div key={index} style={styles.accordionItem}>
          <button
            style={styles.accordionHeader}
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <span
              style={{
                transform:
                  openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              ▼
            </span>
          </button>
          <div
            style={{
              ...styles.accordionContent,
              maxHeight: openIndex === index ? "200px" : "0",
              padding: openIndex === index ? "10px" : "0 10px",
            }}
          >
            <p style={styles.contentText}>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Dummy accordion data
const accordionData = [
  { title: "Accordion Item #1", content: "Content for item 1" },
  { title: "Accordion Item #2", content: "Content for item 2" },
  { title: "Accordion Item #3", content: "Content for item 3" },
  { title: "Accordion Item #4", content: "Content for item 4" },
];

// ✅ Inline styles (You can move to CSS file)
const styles = {
  accordionContainer: {
    width: "50%",
    margin: "20px auto",
    border: "1px solid #ddd",
    borderRadius: "5px",
    overflow: "hidden",
  },
  accordionItem: {
    borderBottom: "1px solid #ddd",
  },
  accordionHeader: {
    width: "100%",
    padding: "15px",
    textAlign: "left",
    background: "#f5f5f5",
    border: "none",
    outline: "none",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  accordionContent: {
    overflow: "hidden",
    maxHeight: "0",
    transition: "all 0.3s ease-in-out",
    background: "#fff",
  },
  contentText: {
    margin: 0,
    fontSize: "16px",
    color: "#333",
  },
};

export default CustomAccordion;
