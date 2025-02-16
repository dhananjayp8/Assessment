import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7v5pmh5", // Replace with actual Service ID
        "template_32gp62c", // Replace with actual Template ID
        formRef.current,
        {
          publicKey: "kUBHWyu-ityrAY2RR", // Replace with actual Public Key
        }
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message, please try again later.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <form
        ref={formRef}
        onSubmit={sendEmail}
        style={{
          width: "500px",
          padding: "20px",
          background: "white",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "15px",
            fontSize: "1.5rem",
            fontWeight: "700",
          }}
        >
          Connect with us
        </h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            required
            style={{
              flex: 1,
              padding: "10px",
              border: "1px solid black",
              borderRadius: "10px",
            }}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            style={{
              flex: 1,
              padding: "10px",
              border: "1px solid black",
              borderRadius: "10px",
            }}
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            border: "1px solid black",
            borderRadius: "10px",
          }}
        />
        {/* <label>Message</label> */}
        <textarea
          name="message"
          placeholder="Your Message"
          required
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            border: "1px solid black",
            borderRadius: "10px",
            height: "100px",
          }}
        ></textarea>
        <button
          type="submit"
          style={{
            width: "100%",
            background: "#3674b5",
            color: "white",
            fontWeight: "600",
            padding: "10px",
            border: "none",
            cursor: "pointer",
            marginTop: "10px",
            borderRadius: "10px",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
