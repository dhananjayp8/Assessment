// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

// const ContactForm = () => {
//   const formRef = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_7v5pmh5", // Replace with actual Service ID
//         "template_32gp62c", // Replace with actual Template ID
//         formRef.current,
//         {
//           publicKey: "kUBHWyu-ityrAY2RR", // Replace with actual Public Key
//         }
//       )
//       .then(
//         () => {
//           alert("Message sent successfully!");
//           formRef.current.reset();
//         },
//         (error) => {
//           alert("Failed to send message, please try again later.");
//           console.error("EmailJS Error:", error);
//         }
//       );
//   };

//   return (
//     <>
//       <div>
//         <h1
//           style={{
//             color: "#3674b5",
//             fontSize: "2.2rem",
//             fontWeight: "900",
//             textAlign: "center",
//           }}
//         >
//           CONNECT WITH US
//         </h1>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             minHeight: "100vh",
//           }}
//         >
//           <form
//             ref={formRef}
//             onSubmit={sendEmail}
//             style={{
//               width: "500px",
//               padding: "20px",
//               background: "white",
//               boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
//               borderRadius: "8px",
//             }}
//           >
//             {/* <h2
//           style={{
//             textAlign: "center",
//             marginBottom: "15px",
//             fontSize: "1.5rem",
//             fontWeight: "700",
//           }}
//         >
//           Connect with us
//         </h2> */}
//             <div style={{ display: "flex", gap: "10px" }}>
//               <input
//                 type="text"
//                 name="user_name"
//                 placeholder="Name"
//                 required
//                 style={{
//                   flex: 1,
//                   padding: "10px",
//                   border: "1px solid black",
//                   borderRadius: "10px",
//                 }}
//               />
//               <input
//                 type="email"
//                 name="user_email"
//                 placeholder="Email"
//                 required
//                 style={{
//                   flex: 1,
//                   padding: "10px",
//                   border: "1px solid black",
//                   borderRadius: "10px",
//                 }}
//               />
//             </div>
//             <input
//               type="text"
//               name="subject"
//               placeholder="Subject"
//               required
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 marginTop: "10px",
//                 border: "1px solid black",
//                 borderRadius: "10px",
//               }}
//             />
//             {/* <label>Message</label> */}
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               required
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 marginTop: "10px",
//                 border: "1px solid black",
//                 borderRadius: "10px",
//                 height: "100px",
//               }}
//             ></textarea>
//             <button
//               type="submit"
//               style={{
//                 width: "100%",
//                 background: "#3674b5",
//                 color: "white",
//                 fontWeight: "600",
//                 padding: "10px",
//                 border: "none",
//                 cursor: "pointer",
//                 marginTop: "10px",
//                 borderRadius: "10px",
//               }}
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactForm;
// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import Lottie from "lottie-react";
// import connectData from "../assets/connect.json"; // Replace with your Lottie JSON file

// const ContactForm = () => {
//   const formRef = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_7v5pmh5", // Replace with actual Service ID
//         "template_32gp62c", // Replace with actual Template ID
//         formRef.current,
//         {
//           publicKey: "kUBHWyu-ityrAY2RR", // Replace with actual Public Key
//         }
//       )
//       .then(
//         () => {
//           alert("Message sent successfully!");
//           formRef.current.reset();
//         },
//         (error) => {
//           alert("Failed to send message, please try again later.");
//           console.error("EmailJS Error:", error);
//         }
//       );
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "40px 20px" }}>
//       <h1
//         style={{
//           color: "#3674b5",
//           fontSize: "2.2rem",
//           fontWeight: "900",
//           marginBottom: "20px",
//         }}
//       >
//         CONNECT WITH US
//       </h1>

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           gap: "30px",
//           flexWrap: "wrap",
//           maxWidth: "900px",
//           margin: "0 auto",
//         }}
//       >
//         {/* Lottie Animation - Takes left side on large screens */}
//         <div
//           style={{
//             width: "45%",
//             minWidth: "300px",
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           <Lottie animationData={connectData} loop={true} />
//         </div>

//         <form
//           ref={formRef}
//           onSubmit={sendEmail}
//           style={{
//             width: "45%",
//             minWidth: "300px",
//             padding: "20px",
//             background: "white",
//             boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
//             borderRadius: "8px",
//           }}
//         >
//           <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
//             <input
//               type="text"
//               name="user_name"
//               placeholder="Name"
//               required
//               style={{
//                 flex: 1,
//                 padding: "10px",
//                 border: "1px solid black",
//                 borderRadius: "10px",
//               }}
//             />
//             <input
//               type="email"
//               name="user_email"
//               placeholder="Email"
//               required
//               style={{
//                 flex: 1,
//                 padding: "10px",
//                 border: "1px solid black",
//                 borderRadius: "10px",
//               }}
//             />
//           </div>
//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             required
//             style={{
//               width: "100%",
//               padding: "10px",
//               marginTop: "10px",
//               border: "1px solid black",
//               borderRadius: "10px",
//             }}
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             required
//             style={{
//               width: "100%",
//               padding: "10px",
//               marginTop: "10px",
//               border: "1px solid black",
//               borderRadius: "10px",
//               height: "100px",
//             }}
//           ></textarea>
//           <button
//             type="submit"
//             style={{
//               width: "100%",
//               background: "#3674b5",
//               color: "white",
//               fontWeight: "600",
//               padding: "10px",
//               border: "none",
//               cursor: "pointer",
//               marginTop: "10px",
//               borderRadius: "10px",
//             }}
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import connectData from "../assets/contact.json"; // Replace with your Lottie JSON file

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
    <div style={{ textAlign: "center", padding: "60px 20px" }}>
      <h1
        style={{
          color: "#3674b5",
          fontSize: "2.4rem",
          fontWeight: "900",
          marginBottom: "40px",
        }}
      >
        CONNECT WITH US
      </h1>

      {/* Container with Animation & Form */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "50px", // More spacing between elements
          flexWrap: "wrap",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
        className="enquire"
      >
        {/* Lottie Animation - Takes left side on large screens */}
        <div
          style={{
            width: "45%",
            minWidth: "320px",
            display: "flex",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <Lottie
            animationData={connectData}
            loop={true}
            style={{ width: "100%" }}
          />
        </div>

        {/* Contact Form - Takes right side */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          style={{
            width: "45%",
            minWidth: "320px",
            padding: "30px",
            background: "white",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
            borderRadius: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
              marginBottom: "15px",
            }}
          >
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              style={{
                flex: 1,
                padding: "12px",
                border: "1px solid black",
                borderRadius: "8px",
              }}
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              style={{
                flex: 1,
                padding: "12px",
                border: "1px solid black",
                borderRadius: "8px",
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
              padding: "12px",
              marginBottom: "15px",
              border: "1px solid black",
              borderRadius: "8px",
            }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              border: "1px solid black",
              borderRadius: "8px",
              height: "120px",
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              width: "100%",
              background: "#3674b5",
              color: "white",
              fontWeight: "600",
              padding: "12px",
              border: "none",
              cursor: "pointer",
              marginTop: "10px",
              borderRadius: "8px",
              fontSize: "1rem",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
