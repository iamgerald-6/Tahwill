import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/App/Layout";
import LandingPage from "./pages/APP/LandingPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
