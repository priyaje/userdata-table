import React from "react";
import UserTable from "./features/userDetails/userTable";

import { HashRouter, Routes, Route } from "react-router-dom";
import Create from "./features/userDetails/Create";
import Edit from "./features/userDetails/Edit";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<UserTable />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
