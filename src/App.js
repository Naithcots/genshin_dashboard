import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Home";
import Page404 from "./Page404";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
