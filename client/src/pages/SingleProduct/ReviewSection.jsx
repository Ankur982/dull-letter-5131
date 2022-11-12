// import { FormControl, Input, useMediaQuery } from "@chakra-ui/react";
// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import io from "socket.io-client";

// const socket = io.connect("http://localhost:8081");

// function ReviewSection() {
//   const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
//   const [review, setReview] = useState("");
//   const [message, setMessage] = useState("");
//   //   const [historyMsg, setHistoryMsg] = useState("");
//   //   console.log(historyMsg);
//   useEffect(() => {
//     socket.on("message", (data) => {
//       setMessage(data);
//     });
//     // socket.on("history", (data) => {
//     //   setHistoryMsg(data);
//     // });
//   }, [socket]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // socket.emit("message", review);
//     console.log(review);
//     setReview("");
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Input
//           width={isLargerThan600 ? "40%" : "60%"}
//           placeholder="Add a Review"
//           value={review}
//           onChange={(e) => setReview(e.target.value)}
//         />
//         <Input
//           bg={"blue"}
//           color="white"
//           width={isLargerThan600 ? "20%" : "40%"}
//           type="submit"
//           value={"Sent Review"}
//         />
//       </form>
//       <h6>{message}</h6>
//       {/* <div>{historyMsg}</div> */}
//     </div>
//   );
// }

// export default ReviewSection;
