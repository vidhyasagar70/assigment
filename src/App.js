import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import SubGroups from "./components/SubGroups/SubGroups";
import PoemList from "./components/PoemList/PoemList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subgroups/:groupId" element={<SubGroups />} />
        <Route path="/poems/:groupId/:subGroupId" element={<PoemList />} />
      </Routes>
    </Router>
  );
};

export default App;
