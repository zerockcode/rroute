import logo from './logo.svg';
import './App.css';
import About from "./pages/About";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo/*" element={<TodoPage />} />
      </Routes>
    </div>
  );
}

export default App;
