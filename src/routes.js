import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import SubGroups from "./views/SubGroups/SubGroups";
import PoemList from "./views/PoemList/PoemList";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/subgroups/:groupId" element={<SubGroups />} />
      <Route path="/poems/:groupId/:subGroupId" element={<PoemList />} />
    </Routes>
  </Router>
);

export default AppRoutes;
