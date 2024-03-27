import React from "react";
import "./App.css";
import LessonTypografi from "./components/LessonTypografi";
import LessonButton from "./components/LessonButton";
import LessonGroupButton from "./components/LessonGroupButton";
import LessonTextField from "./components/LessonTextField";
import { Button } from "@mui/material";
import LessonRadioButton from "./components/LessonRadioButton";

function App() {
  return (
    <header className="App-header">
      {/* <LessonButton></LessonButton> */}
      {/* <LessonGroupButton></LessonGroupButton> */}
      {/* <LessonTextField></LessonTextField> */}
      {/* <Button variant='contained'>Save</Button> */}

      <LessonRadioButton />
    </header>
  );
}

export default App;
