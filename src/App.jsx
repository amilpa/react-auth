import { Navigate, Route, Routes } from "react-router-dom";

import Private from "./utils/Private";

import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Private redirect={"/login"} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Navigate to={"/dashboard"} />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
