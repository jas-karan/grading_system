import './App.css';
import React from 'react';
import Main from "./components/Main.js";
import CourseList from "./components/CourseList.js";
import MenuInstructor from "./components/MenuInstructor.js";
import EvaluationScheme from "./components/EvaluationScheme.js";
import MarkEntryInternal from "./components/MarkEntryInternal.js";
import MarkEntryEndterm from "./components/MarkEntryEndterm.js";
import { Route, Routes } from "react-router-dom"
import Btp from "./components/Btp";

function App() {

  return (

    <div className="App" style={{ display: 'flex' }}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/MenuInstructor" element={<MenuInstructor />} />
        <Route path="/MenuInstructor/CourseListEvaluationScheme" element={<CourseList page="EvaluationScheme" list="EvaluationScheme" />} />
        <Route path="/MenuInstructor/CourseListInternal" element={<CourseList page="MarkEntryInternal" list="Internal" />} />
        <Route path="/MenuInstructor/CourseListEndterm" element={<CourseList page="MarkEntryEndterm" list="Endterm" />} />
        <Route path="/MenuInstructor/CourseListEvaluationScheme/EvaluationScheme" element={<EvaluationScheme />} />
        <Route path="/MenuInstructor/CourseListInternal/MarkEntryInternal" element={<MarkEntryInternal />} />
        <Route path="/MenuInstructor/CourseListEndterm/MarkEntryEndterm" element={<MarkEntryEndterm />} />
        <Route path="/MenuInstructor/Btp" element={<Btp />} />

      </Routes>

    </div>

  );
}

export default App;
