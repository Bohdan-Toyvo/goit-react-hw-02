import { useState, useEffect } from "react";
import Description from '../Description/Description.jsx';
// import Feedback from '../Feedback/Feedback.jsx';
import Options from '../Options/Options.jsx';
// import Notification from '../Notification/Notification.jsx';

// import css from './App.module.css';

export default function App() {
  // const [feedback, setFeedback] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });
  
  return (
    <>
      <Description />

      <Options />

      {/* <Notification /> */}
    </>
  );
}
